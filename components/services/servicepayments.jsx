import React from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md';

import { Box, Stack, styled, Typography, Grid, useMediaQuery } from '@mui/material'
import styles from '../../styles/services/payments.module.css'
import style from '../../styles/services/newtechnologies.module.css';
import AcquiringPayments from './AcquiringPayments';
import ProcessorSolutions from './ProcessorSolutions'
import Ewallets from './Ewallets'
import MobilePayments from './MobilePayments'
import Link from 'next/link'



const details =[
    {
        heading:'Mobile Payment Solutions',
        desc : 'As payment landscapes have evolved with mobile phones, accepting credit card payments is a must for businesses.',
        imgBG : 'img1'
    },
    {
        heading:'Terminal Management System',
        desc : 'Our team offers Terminal Management Systems that syncs automatically and updates your terminal swiftly.',
        imgBG : 'img2'
    },
    {
        heading: 'Payment Terminal Applications',
        desc : 'Our experts with years of market experience design and develop smart solutions for various payment terminals.',
        imgBG : 'img3'
    },
    {
        heading: 'Acquiring Authorization',
        desc : 'BNT’s experienced team has developed a real-time switching and authorization system designed to support the evolving payment standards for channels, schemes and card products.',
        imgBG : 'img4'
    },
    {
        heading:'Fx Solutions',
        desc : 'While foreign exchange can be tricky and complicated, we build global decentralized and over the counter market for exchanging or trading currencies.',
        imgBG : 'img5'
    },
    {
        heading:'Biometric And Nfc',
        desc : 'Utilizing latest technology of biometric and NFC ability we enable contactless payments.',
        imgBG : 'img6'
    },
    {
        heading:'Building Open Apis',
        desc : 'We build open API for businesses that allows to share data and functionality with other developers and business',
        imgBG : 'img7'
    },
    {
        heading:'Merchant Management System',
        desc : 'Gives you the freedom to act independently and provide the best experience',
        imgBG : 'img8'
    },
]

const Payments = () => {

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));


    return (

        <>
            <Stack className={styles.myBG} direction="row" sx={{height: {sm:'90vh',xs:'auto'}}} >
                <Box sx={{ width: {sm:'50%',xs:'100%'},  display: 'flex', alignItems: {sm:'center',xs:'start'}, justifyContent: 'center',padding:{sm:0,xs:'20px'} }}>
                    <Box >
                        <Typography data-aos="fade-down" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#303f9f', fontSize: {sm:'75px',xs:'55px'} }}>
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
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: {sm:'100px',xs:'50px'}, color: '#e8e8e8' }}>ACQUIRING</Typography>
                    </Box>
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: {sm:'6vw',xs:'40px'}, marginTop: {sm:'-90px',xs:'-45px'} }}>Solutions</Typography>
                    </Box>
                </Box>
            </Box>


            <Grid sx={{ padding: {sm:'30px 70px',xs:'20px 20px'} }} container spacing={2} >
                {details.map((detail, i) => (<>
                    <Grid item xs={12} sm={4} md={3} >
                        <Box data-aos="fade-left" data-aos-delay={i <= 3 ? 300 * i : 300 * (i - 4)} className={styles.card_outer} sx={{  width: {sm:'280px',xs:'100%'},height: {sm:'230px',xs:'230px'},marginBottom:'30px'}}>
                            <div className={styles.card} style={{    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/services/images/payments/${detail.imgBG}.jpg')`}}>
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 400, fontSize: '24px' }} >{detail.heading}</Typography>
                            </div>
                            <div className={styles.car_footer} style={{backgroundColor:'#2d6beb'}}>
                                <MdKeyboardArrowUp />
                                <Typography className={styles.car_footer_readMore} > Read More</Typography>
                                <p className={styles.card_desc}>{detail.desc}</p>
                            </div>
                        </Box>
                    </Grid>
                </>))}
            </Grid>

            <ProcessorSolutions />
            <Ewallets />
            <MobilePayments />

             {/* contact us  */}

             <Box sx={{ height: '190px' }}>
                <Box sx={{ width: '100vw', height: '100%', marginTop: '100px', display: 'flex' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '60%', backgroundColor: '#7e16f5', clipPath: 'polygon(0% 0%, 55% 0%,80% 45%,80% 65%, 92% 100%, 0% 100%)' }}>
                        {!isMobile && <Typography sx={{ marginLeft: { sm: '200px', xs: '20px' }, lineHeight: '32px', fontFamily: 'Alexandria', color: 'white', fontSize: { sm: '30px', xs: '19px' } }}>Collaborate with the <br></br> &nbsp;&nbsp;Right Technology Partner  </Typography>}
                        {isMobile && <Typography sx={{ marginLeft: { sm: '200px', xs: '20px' }, lineHeight: '32px', fontFamily: 'Alexandria', color: 'white', fontSize: { sm: '30px', xs: '19px' } }}>Collaborate  <br></br> with <br></br>the Right <br></br> Technology <br></br>Partner.</Typography>}
                    </Box>
                </Box>
                <Box sx={{ marginTop: '-191px', width: '100vw', height: '100%', display: 'flex', justifyContent: 'end' }}>
                    <Box className={style.joinUs} sx={{ display: 'grid', placeContent: 'center', width: '63%', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%,33% 100%,20% 62%,20% 39%)' }}>
                        <Link href={'/buildwithus'}>
                            <Box sx={{ cursor: 'pointer', fontFamily: 'Alexandria', display: 'grid', placeContent: 'center', color: 'white', height: { sm: '40px', xs: '33px' }, width: { sm: '158px', xs: '100px' }, background: ' linear-gradient(90deg, rgba(126,22,245,1) 0%, rgba(192,144,247,1) 71%)', marginLeft: { sm: 0, xs: '53px' } }}>
                                Contact Us
                            </Box>
                        </Link>
                    </Box>
                </Box>
            </Box>























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

export default Payments