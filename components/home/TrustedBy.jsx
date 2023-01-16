import React from 'react'
import { Box, styled } from '@mui/system'
// import  CDlogo  from '../public/images/TrustedBy/CDlogo.png';
import { Stack } from '@mui/material';
import SwiperApp from './SwiperApp'




const TrustedBy = () => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Box data-aos="zoom-in-up"
                sx={{ height: '250px', width: '600px', boxShadow: 3, backgroundColor: '#fff', marginLeft: '150px', zIndex: 2 }}>
                    <Stack direction="row" justifyContent="space-around">
                        <img src='/home/images/TrustedBy/onTab3logo.png' style={{ width: '130px' }} />
                        <img src='/home/images/TrustedBy/CDlogo.png' style={{ width: '130px' }} />
                        <img src='/home/images/TrustedBy/AtosLogo.png' style={{ width: '130px' }} />
                    </Stack>
                    <Stack direction="row" justifyContent="space-around" sx={{ marginTop: '-30px', padding: '0px 80px 0 80px' }}>
                        <img src='/home/images/TrustedBy/poyntLogo2.png' style={{ width: '70px', height: '90px', marginTop: '20px' }} />
                        <img src='/home/images/TrustedBy/ItzCash.png' style={{ width: '130px' }} />
                    </Stack>
                </Box>
                <Box data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0" data-aos-duration="800"
                    sx={{ height: '400px', width: '600px', marginTop: '-70px', marginLeft: '-50px', }}>
                    <SwiperApp />
                </Box>
            </Box>
        </>
    )
}

export default TrustedBy