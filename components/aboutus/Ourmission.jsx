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
                        <Box sx={{ height: {sm:'170px',xs:'400px'}, backgroundColor: 'white', width: {sm:'700px',xs:'93%'}, position: 'relative', zIndex: 1,marginBottom:{sm:0,xs:'20px'} }}>

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