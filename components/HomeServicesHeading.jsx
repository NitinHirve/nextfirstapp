import { Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React, { useEffect } from 'react'
import styles from '../styles/homeservices.module.css'


const StyledBox = styled(Box)({
    height: '180px',
    // border: '1px solid black',
    display: 'flex',
    justifyContent: 'center'
})

const HomeServicesHeading = () => {


    return (
        <><Box sx={{position:'relative' }}>
            <img className={styles.rotatePoly} src="/svgani/poligon11.svg" style={{ width: '160px',position:'absolute',zIndex:1,top:'60px'  }} />
            <img  src="/svgani/poligon3.svg" style={{ width: '370px',position:'absolute',left:'20px'  }} />
            <StyledBox >
                <Box  >
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: '110px', color: '#e8e8e8' }}>SERVICES</Typography>
                    </Box>
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: '4vw', marginTop: '-80px' }}>What we do?</Typography>
                    </Box>
                </Box>
            </StyledBox>
            <Box sx={{padding:"0 160px 50px 160px"}} >
                <Typography data-aos="fade-up" data-aos-once="false" sx={{textAlign: 'center', fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: '18px' }}>
                    Let us know which industry you belong to? With the rapidly growing Fintech market,
                    we at BNT provide the latest and evolved technology know-how, building remarkable payment
                    experiences. Offering dynamic and rigorous payment solutions, we cater to developing a
                    secure and reliable payment solution. 
                </Typography>
            </Box>
            </Box>
        </>
    )
}

export default HomeServicesHeading