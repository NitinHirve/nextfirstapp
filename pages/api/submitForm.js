import nodemailer from 'nodemailer';
import multer from 'multer';
import bodyParser from 'body-parser';
import formidable from 'formidable';


export default async function handler(req, res) {

  if (req.method === 'POST') {
    const { name, email, phone, coverletter } = JSON.parse(req.body);
    const resumeFile = req.files && req.files.resumeFile; // Assuming you are using the `express-fileupload` middleware to handle file uploads
    // Perform any additional validation here if needed
    console.log("Email req body : ",JSON.parse(req.body));
    console.log("Email name : ",name);
    console.log("Email email : ",email);
    // Configure your email service (here we use Gmail as an example, but you can use other services)
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'hirvenitin@gmail.com',
        pass: 'fmoyoudwzhjupnfn',
      },
    });

    const mailOptions = {
      from: 'hirvenitin@gmail.com',
      to: 'hirvenitin@gmail.com',
      subject: 'New Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Cover Letter: ${coverletter}
      `,
      attachments: resumeFile
        ? [
            {
              filename: resumeFile.name,
              content: resumeFile.data,
            },
          ]
        : [],
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Form submission successful!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}



