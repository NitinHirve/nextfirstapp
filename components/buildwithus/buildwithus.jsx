import React from 'react';
import * as Yup from 'yup';
import { Box, Typography, Grid } from '@mui/material';
// import style from '../../styles/services/newtechnologies.module.css'
import style from '../../styles/buildwithus/buildwithus.module.css'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ConnectForm from './ConnectForm'


const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  businessType: Yup.string().required('Business Type is required'),
  services: Yup.string().required('Services is required'),
  message: Yup.string().required('Message is required'),
});

const BNTaddresses = [
  {
    country: 'India Office',
    officeName:'BNT Soft Pvt. Limited',
    address: '4th floor, Vari Tech Centre,Phase 1 Rd,Rajiv Gandhi Infotech Park, Hinjawadi, Pimpri-Chinchwad, Maharashtra 411057',
    phone: '+91 20 6649 9300',
    email: 'info@bnt-soft.com'
  },
  {
    country: 'US Office',
    officeName:'BNT Soft Inc',
    address: 'PO. Box 58 Gardner Ma 01440',
    phone: '978 840 8321',
    email: ' usoffice@bnt-soft.com'
  }
]







const BuildWithUs = () => {
  return (
    <>


      <Box className={style.newtechBg} sx={{ height: { sm: '400px', xs: 'auto' }, marginBottom: '50px', padding: { sm: '0 70px 0 70px', xs: '0' } }}>
        <Box sx={{ height: '100%', width: { sm: '100%', xs: '100%' }, paddingTop: { sm: '70px', xs: '40px' } }}>
          <Box sx={{ height: { xs: '100px', sm: '180px' }, display: 'flex', justifyContent: 'center' }} >
            <Box  >
              <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, textAlign: 'center', fontSize: { xs: '32px', sm: '110px' }, letterSpacing: { xs: '9px' }, color: '#e8e8e8' }}>CONNECT</Typography>
              </Box>
              <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: { xs: '41px', sm: '60px' }, marginTop: { xs: '-33px', sm: '-80px' } }}>Us</Typography>
              </Box>
            </Box>
          </Box>
          <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: { sm: '21px', xs: '18px' }, color: '#fff', padding: { sm: '0 350px 0 350px', xs: '10px' }, textAlign: 'center' }}>
            <span style={{ color: '#1e8be1', fontSize: '26px' }}>We</span> are a family of tech folks always striving for the next best thing.
          </Typography>
        </Box>
      </Box>



      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <Grid sx={{ width: '100%' }} container spacing={2} >
          {BNTaddresses.map((BNTaddress, i) => (<>
            <Grid item xs={12} sm={6} md={6} sx={{display:'flex',justifyContent:'center'}} >
              <Box sx={{ width: { sm: '520px', xs: '100%' }, height: { sm: '220px', xs: '110' }, marginBottom: '30px', border: '1px solid #d9dbde', borderRadius: '5px', padding: '15px' }}>
                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 400, fontSize: '20px', color: '#414242' }}>
                  {BNTaddress.country}
                </Typography>
                <Typography sx={{ margin: '10px 0 10px 0', fontFamily: 'Alexandria', fontWeight: 300, fontSize: '17px', color: '#1e8be1', }}>
                  {BNTaddress.officeName}
                </Typography>
                <table className={style.table}>
                  <tr>
                    <td><LocationOnIcon sx={{ fontSize: '20px', color: '#a8a7a7' }} /></td>
                    <td>
                      <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize:  '14px', color: '#6a6b6a', padding:'0 0 5px 5px', marginTop: { sm: '5px', xs: 0 }, marginTop: 0 }}>
                      {BNTaddress.address}
                      </Typography>
                    </td>
                  </tr>
                  <tr>
                    <td><PhoneIcon sx={{ fontSize: '20px', color: '#a8a7a7' }} /></td>
                    <td>
                      <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: '14px' , color: '#6a6b6a', padding:'0 0 5px 5px', marginTop: { sm: '5px', xs: 0 }, marginTop: 0 }}>
                        {BNTaddress.phone}
                      </Typography>
                    </td>
                  </tr>
                  <tr>
                    <td><EmailIcon sx={{ fontSize: '20px', color: '#a8a7a7' }} /></td>
                    <td>
                      <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: '14px', color: '#6a6b6a', padding:'0 0 5px 5px', marginTop: { sm: '5px', xs: 0 }, marginTop: 0 }}>
                        {BNTaddress.email}
                      </Typography>
                    </td>
                  </tr>
                </table>
              </Box>
            </Grid>
          </>))}
        </Grid>
      </Box>

      <Box sx={{width:'100%',display:'flex',justifyContent:'center',marginTop:'50px'}}>
        <ConnectForm />
      </Box>
      

       

      
    </>
  );
};

export default BuildWithUs;
