import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../styles/aboutus/aboutus.module.css'


const Ourmission = () => {


    const [tabOn, setTabOn] = useState('1')


    return (
        <>
            <Box sx={{ marginTop: '100px', width: '100vw', height: '464px', display: 'flex' }}>
                <Box className={styles.OurmissionLeftSection} sx={{ width: '50%', padding: '20px', boxSizing: 'border-box' }}>
                    <Box sx={{ marginLeft: '250px', marginTop: '50px' }}>
                        <p style={{ margin: 0, padding: 0, fontFamily: 'Alexandria', fontSize: '11px', color: '#6f6675' }}>Top level company</p>
                        <Typography sx={{ fontFamily: 'Alexandria', padding: 0, margin: '0!important', color: 'white', fontSize: '30px' }}>Providing Innovative<br></br> Web Solutions for Future</Typography>
                        <Box sx={{ height: '45px', marginTop: '30px', width: '100%', display: 'flex', alignItems: 'center' }}>
                            <Box onClick={() => { setTabOn('1') }} sx={{ fontFamily: 'Alexandria',fontSize:'13px',cursor: 'pointer', flex: 1, backgroundColor: tabOn == '1' ? '#fff' : '#7e16f5', color: tabOn == '1' ? 'black' : '#fff', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(0% 0%, 100% 0%, 92% 100%, 0% 100%)' }}>Our Mission</Box>
                            <Box onClick={() => { setTabOn('2') }} sx={{ fontFamily: 'Alexandria',fontSize:'13px',cursor: 'pointer', flex: 1, backgroundColor: tabOn == '2' ? '#fff' : '#7e16f5', color: tabOn == '2' ? 'black' : '#fff', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)' }}>Our Vision</Box>
                            <Box onClick={() => { setTabOn('3') }} sx={{ fontFamily: 'Alexandria',fontSize:'13px',cursor: 'pointer', flex: 1, backgroundColor: tabOn == '3' ? '#fff' : '#7e16f5', color: tabOn == '3' ? 'black' : '#fff', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>Our History</Box>
                        </Box>
                        <Box sx={{ height: '170px', backgroundColor: 'white', width: '700px', position: 'relative', zIndex: 1 }}>

                        </Box>
                    </Box>
                </Box>
                <Box className={styles.OurmissionRightSection} sx={{ width: '50%' }}></Box>
            </Box>


            {/* <Box sx={{ height: '300px' }}></Box> */}
        </>
    )
}

export default Ourmission