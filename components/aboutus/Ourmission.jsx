import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../styles/aboutus/aboutus.module.css'


const Ourmission = () => {


    const [tabOn, setTabOn] = useState('1')


    return (
        <>
            <Box sx={{ width: '100vw', height: {sm:'464px',xs:'auto'}, display: 'flex',}}>
                <Box className={styles.OurmissionLeftSection} sx={{ width: {sm:'50%',xs:'100%'}, padding: {sm:'20px',xs:0}, boxSizing: 'border-box'  }}>
                    <Box sx={{ marginLeft: {sm:'250px',xs:'20px'}, marginTop: '50px' }}>
                        <p style={{ margin: 0, padding: 0, fontFamily: 'Alexandria', fontSize: '11px', color: '#6f6675' }}>Top level company</p>
                        <Typography sx={{ fontFamily: 'Alexandria', padding: 0, margin: '0!important', color: 'white', fontSize: '30px' }}>Providing Innovative<br></br> Web Solutions for Future</Typography>
                        <Box sx={{ height: '45px', marginTop: '30px', width: {sm:'100%',xs:'93%'}, display: 'flex', alignItems: 'center' }}>
                            <Box onClick={() => { setTabOn('1') }} sx={{ fontFamily: 'Alexandria', fontSize: '13px', cursor: 'pointer', flex: 1, backgroundColor: tabOn == '1' ? '#fff' : '#7e16f5', color: tabOn == '1' ? 'black' : '#fff', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(0% 0%, 100% 0%, 92% 100%, 0% 100%)' }}>Our Mission</Box>
                            <Box onClick={() => { setTabOn('2') }} sx={{ fontFamily: 'Alexandria', fontSize: '13px', cursor: 'pointer', flex: 1, backgroundColor: tabOn == '2' ? '#fff' : '#7e16f5', color: tabOn == '2' ? 'black' : '#fff', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)' }}>Our Vision</Box>
                            <Box onClick={() => { setTabOn('3') }} sx={{ fontFamily: 'Alexandria', fontSize: '13px', cursor: 'pointer', flex: 1, backgroundColor: tabOn == '3' ? '#fff' : '#7e16f5', color: tabOn == '3' ? 'black' : '#fff', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>Our History</Box>
                        </Box>
                        <Box sx={{ height: { sm: '170px', xs: '400px' }, backgroundColor: 'white', width: { sm: '750px', xs: '93%' }, position: 'relative', zIndex: 1, marginBottom: { sm: 0, xs: '20px' }, padding: '20px' }}>
                           
                            <Box sx={{display:'flex',height:'100%',flexDirection:{sm:'row',xs:'column-reverse'}}}>
                               
                            <Typography sx={{ fontFamily: 'Alexandria', paddingRight: {sm:'10px',xs:0}, margin: '0!important', fontSize: '15px', color: '#6f6675',width:{sm:'70%',xs:'100%'},fontWeight:300,height:{sm:'100%',xs:'65%'},paddingTop:{sm:0,xs:'10px'} }}>
                                {tabOn == '1' && '\"We envision revolutionizing the payment solutions industry by delivering customized solutions that meet the unique needs of businesses worldwide. We strive to be the leading provider of tailored payment solutions, offering exceptional customer service and expertise to our clients.\"'}
                                {tabOn == '2' && '\"We believe in fostering strong partnerships with our clients as technology and product agnostics. Our goal is to make payment processing simple and easy, so that businesses can focus on what they do best - growing their businesses.\"'}
                                {tabOn == '3' && '\"Established a decade ago, we are passionate about helping businesses succeed, and we are dedicated to providing exceptional service and support to our clients. Our tech experts with the latest markets and industry trends provide the best-customised payment solutions that meet their business goals.\"'}
                            </Typography>
                             <Box className={styles.ourMission} sx={{width:{sm:'30%',xs:'100%'},padding:'10px!important',height:{sm:'100%',xs:'35%'},backgroundImage: tabOn == '1'? 'url(/aboutus/images/ourmission/ourmission.jpg)':(tabOn == '2' ? 'url(/aboutus/images/ourmission/ourvison.jpg)':'url(/aboutus/images/ourmission/ourhistory.jpg)')}}></Box>
                            </Box>

                        </Box>
                    </Box>
                </Box>
                <Box className={styles.OurmissionRightSection} sx={{ width: '50%',display:{sm:'block',xs:'none'} }}></Box>
            </Box>


            <Box sx={{ marginTop: '30px', width: '100vw', height: '461px', display: 'flex' }}>
                <Box sx={{ width: '53%', display: {sm:'flex',xs:'none'}, alignItems: 'center', justifyContent: 'end' }}>
                    <Box className={styles.aboutBnt} sx={{ height: '80%', width: '80%' }}></Box>
                </Box>
                <Box sx={{ width: {sm:'47%',xs:'100%'}, display: 'flex', alignItems: 'center', paddingLeft: {sm:'70px',xs:'20px'}, paddingRight: {sm:'180px',xs:'30px'} }}>
                    <Box >
                        <p style={{ margin: 0, padding: 0, fontFamily: 'Alexandria', fontSize: '13px', color: '#6f6675', letterSpacing: '10px' }}>WHO WE ARE</p>
                        <Typography sx={{ fontFamily: 'Alexandria', padding: 0, marginTop: '10px', color: 'black', fontSize: '45px', lineHeight: '52px' }}>Smart<br style={{ width: '5px' }}></br>Platform<br></br>Integration</Typography>
                        <Typography sx={{ marginTop: '20px' }}>
                            We at <span style={{ fontFamily: 'Alexandria', color: '#1e8be1' }}>BNT- "Bits and Thoughts"</span> have been providing services for more than a decade now.
                            Accelerated with innovative goals, we envision our services with no compromise on
                            quality. We are committed to high quality performance along with integrity &
                            client satisfaction.
                        </Typography>
                    </Box>
                </Box>
            </Box>

          
            {/* <Box sx={{ height: '300px' }}></Box> */}
        </>
    )
}

export default Ourmission