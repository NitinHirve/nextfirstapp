import React from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md';

import { Box, Stack, styled, Typography, Grid } from '@mui/material'
import styles from '../../styles/services/payments.module.css'
import AcquiringPayments from './AcquiringPayments';
import ProcessorSolutions from './ProcessorSolutions'
import Ewallets from './Ewallets'
import MobilePayments from './MobilePayments'





// const StyledBox = styled(Box)({
   
//     // border: '1px solid black',
//     display: 'flex',
//     justifyContent: 'end',
//     marginTop: '50px',
//     marginBottom: '50px'
// })

const headings = [
    'Mobile Payment Solutions',
    'Terminal Management System',
    'Payment Terminal Applications',
    'Acquiring Authorization',
    'Fx Solutions',
    'Biometric And Nfc',
    'Building Open Apis',
    'Merchant Management System'
]

const desc = [
    'As payment landscapes have evolved with mobile phones, accepting credit card payments is a must for businesses.',
    'Our team offers Terminal Management Systems that syncs automatically and updates your terminal swiftly.',
    'Our experts with years of market experience design and develop smart solutions for various payment terminals.',
    'BNT’s experienced team has developed a real-time switching and authorization system designed to support the evolving payment standards for channels, schemes and card products.',
    'While foreign exchange can be tricky and complicated, we build global decentralized and over the counter market for exchanging or trading currencies.',
    'Utilizing latest technology of biometric and NFC ability we enable contactless payments.',
    'We build open API for businesses that allows to share data and functionality with other developers and business',
    'Gives you the freedom to act independently and provide the best experience'
]

const payments = () => {
    return (

        <>
            <Stack className={styles.myBG} direction="row" sx={{height: {sm:'90vh',xs:'auto'}}} >
                <Box sx={{ width: {sm:'50%',xs:'100%'},  display: 'flex', alignItems: {sm:'center',xs:'start'}, justifyContent: 'center',padding:{sm:0,xs:'20px'} }}>
                    <Box >
                        <Typography data-aos="fade-down" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#8f1e9e', fontSize: {sm:'75px',xs:'55px'} }}>
                            Payments
                        </Typography>
                        <Typography data-aos="fade-up" sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: {sm:'22px',xs:'18px'}, color: '#535151', maxWidth: '400px',padding:{sm:0,xs:'10px'} }}>
                            Fuelled with technology, expertise,<br /> and experiences. Our team offers<br /> an effective combination of broad<br />  fintech service expertise
                            and deep product knowledge to help you deliver a differentiated financial experience.
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{width: '50%',display: {sm:'flex',xs:'none'}, alignItems: 'center', justifyContent: 'center' }}>
                    <Box data-aos="zoom-out" >
                            <img className={styles.floatingImg} style={{ width: '500px' }} src="/services/images/payments.png" alt="abutImg"></img>
                    </Box>
                </Box>
            </Stack>

            <Box sx={{ display: 'flex',justifyContent: 'end', marginTop: '50px',marginBottom: '50px', height: {sm:'180px',xs:'85px'},paddingRight: {sm:'40px',xs:'20px'},}} >
                <Box  >
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: {sm:'100px',xs:'50px'}, color: '#fbdcfc' }}>ACQUIRING</Typography>
                    </Box>
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: {sm:'6vw',xs:'40px'}, marginTop: {sm:'-90px',xs:'-45px'} }}>Solutions</Typography>
                    </Box>
                </Box>
            </Box>


            <Grid sx={{ padding: {sm:'30px 70px',xs:'20px 20px'} }} container spacing={2} >
                {headings.map((item, i) => (<>
                    <Grid item xs={12} sm={4} md={3} >
                        <Box data-aos="fade-left" data-aos-delay={i <= 3 ? 300 * i : 300 * (i - 4)} className={styles.card_outer} sx={{  width: {sm:'280px',xs:'100%'},height: {sm:'230px',xs:'230px'},marginBottom:'30px'}}>
                            <div className={styles.card}>
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 400, fontSize: '24px' }} >{item}</Typography>
                            </div>
                            <div className={styles.car_footer}>
                                <MdKeyboardArrowUp />
                                <Typography className={styles.car_footer_readMore} > Read More</Typography>
                                <p className={styles.card_desc}>{desc[i]}</p>
                            </div>
                        </Box>
                    </Grid>
                </>))}
            </Grid>

            <ProcessorSolutions />
            <Ewallets />
            <MobilePayments />























            {/* <div style={{ height: '300px' }}>

            </div> */}
            {/* <div>
               
                <div style={{ minHeight: '500px', backgroundColor: '#222' }} className={styles.container} >
                    {
                        headings.map((heading, i) => (<AcquiringPayments heading={heading} desc={desc[i]} />))
                    }
                </div>
            </div> */}
        </>
    )
}

export default payments