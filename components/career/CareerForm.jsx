import React from 'react';
import { useFormik, Field } from 'formik';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, styled } from '@mui/material';
import * as Yup from 'yup';

const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#d9dbde',
        },
    },
    inputProps: {
        style: {
            color: '#d9dbde', // Set your desired font color
        },
    },
    '& input': {
        color: '#d9dbde',
    }

})

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.number().required('Phone is required'),
    coverletter: Yup.string().required('Message is required'),
});


const MyForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            coverletter: '',
        },
        validationSchema,
        onSubmit: (values) => {
            // Handle form submission here
            console.log(values);
        },
    });

    return (
        <form style={{width:'80%'}}  onSubmit={formik.handleSubmit}>
            <TextField
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && formik.errors.name}
                helperText={formik.touched.name && formik.errors.name}
                sx={{ width: { sm: '100%', xs: '95%' }, }}

            />
            <br></br><br></br>

            <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && formik.errors.email}
                helperText={formik.touched.email && formik.errors.email}
                sx={{ width: { sm: '100%', xs: '95%' },  }}
            />

            <br></br><br></br>

            <TextField
                id="phone"
                name="phone"
                label="Phone"
                variant="outlined"
                type="number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && formik.errors.phone}
                helperText={formik.touched.phone && formik.errors.phone}
                sx={{ width: { sm: '100%', xs: '95%' }}}
                InputProps={{
                    style: {
                        borderColor: 'red', // Set your desired border color
                    },
                }}
            />

          

            <br></br><br></br>

            <TextField
                multiline
                id="coverletter"
                name="coverletter"
                label="coverletter"
                rows={4}
                value={formik.values.coverletter}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.coverletter && formik.errors.coverletter}
                helperText={formik.touched.coverletter && formik.errors.coverletter}
                sx={{ width: { sm: '100%', xs: '95%' }, }}
            />

            <br></br>

            <Button sx={{ width: { sm: '100%', xs: '95%' }, margin: '30px 0 30px 0' }} type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
};

export default MyForm;
