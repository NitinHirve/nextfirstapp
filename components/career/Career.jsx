
import React from 'react'

import { Box, Stack, Typography, styled, alpha, InputBase, MenuItem, TextField, Grid, Button, Modal } from '@mui/material'
import style from '../.././styles/career/career.module.css'
import CircleIcon from '@mui/icons-material/Circle';

import SearchIcon from '@mui/icons-material/Search';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: '1px solid #d9dbde',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    height: '50px',
    // width: '300px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        // width: '300px',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    height: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
            width: '100%',
        },
    },
    width: '100%'
}));

const currencies = [
    {
        value: 'All Job Type',
        label: 'All Job Type',
    },
    {
        value: 'Full Time',
        label: 'Full Time',
    }
];

const jobLocations = [
    {
        value: 'All Job Locations',
        label: 'All Job Locations',
    },
    {
        value: 'Pune',
        label: 'Pune',
    }
];


const jobVacencies = [
    {
        title: 'Java Developer',
        location: 'Pune',
        experiance: '5+ years',
        type: 'Full Time'
    },
    {
        title: 'Salesforce Developer',
        location: 'Pune',
        experiance: '2-4 years',
        type: 'Full Time'
    },
    {
        title: 'Android Developer',
        location: 'Pune',
        experiance: '2-3 years',
        type: 'Full Time'
    },
    {
        title: 'QA(Automation)',
        location: 'Pune',
        experiance: '5-6 years',
        type: 'Full Time'
    },
    {
        title: 'React JS Developer',
        location: 'Pune',
        experiance: '4-6 years',
        type: 'Full Time'
    },
    {
        title: 'Python Developer',
        location: 'Pune',
        experiance: '4-6 years',
        type: 'Full Time'
    },
    {
        title: 'Embedded C++',
        location: 'Pune',
        experiance: '4-6 years',
        type: 'Full Time'
    },
    {
        title: 'POS Developer',
        location: 'Pune',
        experiance: '7-8 years',
        type: 'Full Time'
    },




]

const Career = () => {


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Box className={style.myBG} sx={{ height: {sm:'500px',xs:'auto'} }}>
                <Box sx={{ height: '100%', maxWidth: {sm:'800px',xs:'100%'}, marginLeft: {sm:'80px',xs:'20px'}, paddingTop: {sm:'110px',xs:'40px'} }}>
                    <Typography sx={{ fontFamily: 'Alexandria', padding: 0, margin: '0!important', color: 'white', fontSize: '40px', fontWeight: 600 ,lineHeight:{xs:'45px',sm:1.5}}}>
                        Let’s Grow Together And Join Us To<br></br> Spread The Power Of Technology!
                    </Typography>
                    <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: { sm: '19px', xs: '18px' }, color: '#fff', padding: { sm: 0, xs: '10px' }, marginTop: '40px' }}>
                        We are searching for extraordinary people who will help us make an impact on the tech industry
                        with great work. Collaborate with us for ambitious projects on the latest technologies,
                        push your limits, and make a difference.
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ padding: {sm:'100px',xs:'20px'} }}>

                <Box sx={{ display: 'flex',flexDirection:{sm:'row',xs:'column'} ,gap: '15px' }}>
                    <Search sx={{ width: {sm:'70%' ,xs:'100%'}}}>
                        <SearchIconWrapper>
                            <SearchIcon sx={{ color: '#d9dbde' }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>

                    <Box sx={{display: 'flex',gap: '15px'}}>
                    <Box >
                        <TextField
                            id="outlined-select-currency"
                            select
                            // label="Select"
                            defaultValue="All Job Type"
                            // helperText="Please select your currency"

                            InputProps={{ style: { height: '50px',color:'#858585'} }}
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>

                    <Box >
                        <TextField
                            id="outlined-select-currency"
                            select
                            // label="Select"
                            defaultValue="All Job Locations"
                            // helperText="Please select your currency"
                            InputProps={{ style: { height: '50px',color:'#858585' } }}
                        >
                            {jobLocations.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    </Box>
                </Box>


                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                    <Grid sx={{ padding: { sm: '30px 40px', xs: '0px 0px' }, width: { sm: '100%', xs: '100%' } }} container spacing={2} >
                        {jobVacencies.map((job, i) => (<>
                            <Grid item xs={12} sm={4} md={4} >
                                <Box sx={{ width: { sm: '320px', xs: '100%' }, height: { sm: '110px', xs: '110' }, marginBottom: '30px', border: '1px solid #d9dbde', borderRadius: '5px', padding: '10px' }}>
                                    <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: '18px' , color: '#414242', padding: { sm: 0, xs: '10px' } }}>
                                        {job.title}
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: { sm: '13px' }, color: '#8c8c8c', padding: { sm: 0, xs: '10px' }, marginTop: {sm:'5px',xs:0} }}>
                                        {job.location}&nbsp; <CircleIcon sx={{ fontSize: '6px', color: '#a8a7a7' }} />&nbsp;   {job.experiance}&nbsp;  <CircleIcon sx={{ fontSize: '6px', color: '#a8a7a7' }} />&nbsp;  {job.type}
                                    </Typography>
                                    <Button onClick={handleOpen} sx={{ textTransform: 'none', fontFamily: 'Alexandria', fontWeight: 400, }}>Details&nbsp; <KeyboardDoubleArrowRightIcon sx={{ fontSize: '16px' }} /></Button>
                                </Box>
                            </Grid>
                        </>))}
                    </Grid>
                </Box>


            </Box>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: {sm:900,xs:'90%'},
                    height: '90%',
                    bgcolor: 'background.paper',
                    // border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Box sx={{ border: '1px solid #2973f2', height: '40%' }}>
                        <Box sx={{ height: '80px', padding: '10px', width: '100%', backgroundColor: '#2973f2' }}>
                            <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 400, fontSize: { sm: '24px' }, color: '#fff', padding: { sm: 0, xs: '10px' } }}>
                                Java Developer
                            </Typography>
                            <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: { sm: '13px' }, color: '#fff', padding: { sm: 0, xs: '10px' }, }}>
                                Pune&nbsp; <CircleIcon sx={{ fontSize: '6px', color: '#fff' }} />&nbsp;   5+ years&nbsp;  <CircleIcon sx={{ fontSize: '6px', color: '#fff' }} />&nbsp;  Full Time
                            </Typography>

                        </Box>
                    </Box>

                </Box>
            </Modal>



            {/* <Box sx={{ height: '300px' }}></Box> */}
        </>
    )
}

export default Career