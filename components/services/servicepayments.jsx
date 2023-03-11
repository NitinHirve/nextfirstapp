import React from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md';

import { Box, Stack, styled, Typography, Grid } from '@mui/material'
import styles from '../../styles/services/payments.module.css'
import AcquiringPayments from './AcquiringPayments';
import ProcessorSolutions from './ProcessorSolutions'
import Ewallets from './Ewallets'
import MobilePayments from './MobilePayments'





const StyledBox = styled(Box)({
    height: '180px',
    // border: '1px solid black',
    display: 'flex',
    justifyContent: 'end',
    paddingRight: '40px',
    marginTop: '50px',
    marginBottom: '50px'
})

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
            <Stack className={styles.myBG} direction="row" >
                <Box sx={{ position: 'relative', width: '50%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box sx={{ position: 'absolute', marginTop: '-60px' }}>
                        {/* <Typography data-aos="fade-right" style={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#1a237e', fontSize: '60px' }}>Next-Gen</Typography> */}
                        <Typography data-aos="fade-down" style={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#8f1e9e', fontSize: '75px', marginTop: '-10px', }}>
                            Payments
                        </Typography>
                        <Typography data-aos="fade-up" sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: '22px', color: '#535151', maxWidth: '400px' }}>
                            Fuelled with technology, expertise,<br /> and experiences. Our team offers<br /> an effective combination of broad<br />  fintech service expertise
                            and deep product knowledge to help you deliver a differentiated financial experience.
                        </Typography>
                    </Box>
                </Box>
                <StyledBox sx={{ position: 'relative' }}>
                    <Box data-aos="zoom-out" sx={{ position: 'relative' }}>
                        <figure >
                            <img className={styles.floatingImg} style={{ width: '500px' }} src="/services/images/payments.png" alt="abutImg"></img>
                        </figure>
                    </Box>
                </StyledBox>
            </Stack>

            <StyledBox >
                <Box  >
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: '100px', color: '#fbdcfc' }}>ACQUIRING</Typography>
                    </Box>
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: '6vw', marginTop: '-90px' }}>Solutions</Typography>
                    </Box>
                </Box>
            </StyledBox>


            <Grid sx={{ padding: '30px 70px' }} container spacing={2} >
                {headings.map((item, i) => (<>
                    <Grid item xs={12} sm={4} md={3} >
                        <div data-aos="fade-left" data-aos-delay={i <= 3 ? 300 * i : 300 * (i - 4)} className={styles.card_outer}>
                            <div className={styles.card}>
                                <Typography style={{ fontFamily: 'Alexandria', fontWeight: 400, fontSize: '24px' }} >{item}</Typography>
                            </div>
                            <div className={styles.car_footer}>
                                <MdKeyboardArrowUp />
                                <Typography className={styles.car_footer_readMore} > Read More</Typography>
                                <p className={styles.card_desc}>{desc[i]}</p>
                            </div>
                        </div>
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