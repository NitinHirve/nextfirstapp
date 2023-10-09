import React from 'react'
import styles from '../../styles/services/payments.module.css'
import { Box, Stack, styled, Typography, Grid } from '@mui/material'
import { MdMobileScreenShare } from 'react-icons/md';
import { BiWallet } from 'react-icons/bi';
import { MdKeyboardArrowLeft } from 'react-icons/md';



// const StyledBox = styled(Box)({
//     height: '180px',
//     // border: '1px solid black',
//     // flex : 1,
//     display: 'flex',
//     justifyContent: 'end',
// })

const mobilePaymentDetails = [
    {
        logo: <MdMobileScreenShare className={styles.actualLogo} />,
        title: 'Mobile Banking and Payments',
        desc: 'Enabling you to make financial transactions on any mobile device across all nations'
    },
    {
        logo: <BiWallet className={styles.actualLogo} />,
        title: 'Mobile Wallets',
        desc: 'Seamless payment experience in a single, streamlined solution that’s your e-wallet.'
    }
]


const MobilePayments = () => {
    return (
        <>
            <Box sx={{ margin: {sm:'100px',xs:'20px'}, marginRight: '40px', display: 'flex',flexDirection:{sm:'row',xs:'column-reverse'}, alignItems: 'center', gap: '30px' }}>
                {mobilePaymentDetails.map(item => (<>
                    <Box data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0" data-aos-duration="800">
                        <Box className={styles.mobile_card} >
                            <Box className={styles.mobile__card_logo}>{item.logo}</Box>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </Box>
                    </Box>
                </>))}
                <Box sx={{display:{sm:'block',xs:'none'}}} data-aos="fade-left">
                    <MdKeyboardArrowLeft style={{ height: '80px', width: '80px', color: '#e8e8e8' }} />
                </Box>
                <Box sx={{  height: {sm:'180px',xs:'100px'},display: 'flex',justifyContent: 'end',}} >
                    <Box  >
                        <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                            <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: {sm:'70px',xs:'45px'}, color: '#e3e3e3', textAlign: 'center' }}>MOBILE</Typography>
                        </Box>
                        <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                            <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: {sm:'5vw',xs:'40px'}, marginTop: {sm:'-70px',xs:'-35px'} }}>Payments</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default MobilePayments