import nodemailer from 'nodemailer';
import multer from 'multer';
const upload = multer().single('resumeFile');

export const config = {
  api: {
    bodyParser: false
  }
}


export default async function handler(req, res) {

  if (req.method === 'POST') {

    upload(req, res, async (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Error handling FormData' });
        return;
      }

      const formData = req.body;
      const { name, email, phone, coverletter } = formData;

    const transporter = nodemailer.createTransport({
      service: 'Outlook',
      auth: {
        user: 'noreply@bnt-soft.com',
        pass: 'Pad05029',
      },
    });

    const mailOptions = {
      from: 'noreply@bnt-soft.com',
      to: 'hr@bnt-soft.com',
      subject: 'New Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Cover Letter: ${coverletter}
        Resume : 
      `,
      attachments: req.file
        ? [
            {
              filename: req.file.originalname,
              content: req.file.buffer,
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

    });  
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}



