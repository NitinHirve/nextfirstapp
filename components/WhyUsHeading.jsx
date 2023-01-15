import { Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React, { useEffect } from 'react'
import styles from '../styles/homeservices.module.css'


const StyledBox = styled(Box)({
    height: '180px',
    display: 'flex',
    justifyContent: 'right',
    marginRight:'50px'
})

const WhyUsHeading = () => {


    return (
        <>
            <StyledBox data-aos-once="true" >
                <Box data-aos="fade-left" data-aos-once="false" sx={{
                    width: '500px', height: '180px', display: 'flex', 
                    justifyContent: 'center', marginTop: '-50px', backgroundColor: '#1e8be1'
                }} >
                    <Box >
                        <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                            <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 100, fontSize: '110px', color: '#e8e8e8' }}>WHY</Typography>
                        </Box>
                        <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                            <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 400, color: 'white', textAlign: 'center', fontSize: '5vw', marginTop: '-90px' }}>Us</Typography>
                        </Box>
                    </Box>
                </Box>
            </StyledBox>
        </>
    )
}

export default WhyUsHeading