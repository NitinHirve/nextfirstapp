import React from 'react'
import { Box, Stack, styled, Typography, Grid } from '@mui/material'
import styles from '../../styles/services/payments.module.css'



const StyledBox = styled(Box)({
    height: '180px',
    // border: '1px solid black',
    display: 'flex',
    justifyContent: 'start',
    paddingLeft: '80px',
    marginTop: '70px',
    marginBottom: '30px'
})


const headings = [
    'Merchant on Boarding',
    'Transaction Switches, Routing',
    'Business Analytics & Reporting',
    'Payment Gateway'
]

const desc = [
    'We at BNT offer the most advanced technology base merchant onboarding solutions. We offer quick and easy, customizable and exceptional branding experience for merchant onboarding. We also take care of KYC underwritings and provide efficient mechanisms with the setup facility.',
    'BNT’s exceptional technology-driven team with the latest payment industry know-how is a perfect pick for building all your switch and routing platforms. We design, develop and support standard and innovative transaction requirements keeping with the new electronic market.',
    'As data is key essential to any business growth, we offer exception skills and utilize best technology practices providing analytics and reporting for enhancing your business growth.',
    'We develop strong and sound payment gateways, authorizing credit card or direct payments processing for all types of businesses. We guarantee to design and develop secure payment gateways that enable businesses with digital payment processes globally without any glitch.'
]

const ProcessorSolutions = () => {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'start', marginTop: '50px', marginBottom: '50px', height: { sm: '180px', xs: '85px' }, paddingLeft: { sm: '80px', xs: '20px' }, }} >
                <Box  >
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: { sm: '100px', xs: '50px' }, color: '#fbdcfc' }}>PROCESSOR</Typography>
                    </Box>
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: { sm: '6vw', xs: '40px' }, marginTop: { sm: '-90px', xs: '-45px' } }}>Solutions</Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ height: {sm:'500px',xs:'auto'}, border: {sm:'1px solid #dde3ee',xs:'none'}, borderRight: '0px', borderLeft: 'none', display: 'flex', flexDirection:{sm:'row',xs:'column'}, marginRight: {sm:'40px',xs:'0px'}, marginBottom: '40px' }}>
                <Box data-aos="fade-right" className={styles.ProcessorBG} sx={{ width: {sm:'40%',xs:'100%'}, display: 'flex', alignItems: 'center', justifyContent: 'center',padding:{sm:0,xs:'30px 20px'} }}>
                    <Typography sx={{ fontFamily: 'Alexandria', paddingLeft: '25px', fontWeight: 300, fontSize: '22px', color: 'white', maxWidth: '400px', borderLeft: '5px solid yellow' }}>
                        Digital payments are convenient and preferred, yet, they demand safety and security in terms of transactions. We at BNT build secure and tech-advanced processor solutions for e-commerce, in-stores or retail, along with, both offline and online solutions for your business goals.                    </Typography>
                </Box>
                <Box sx={{ width: {sm:'60%',xs:'100%'}, backgroundColor: '#FBFBFB', display: 'flex', flexDirection:{sm:'row',xs:'column'}, }}>
                    {headings.map((heading, i) => (<>
                        <Box className={styles.processsorElement} sx={{ width: {sm:'25%',xs:'100%'}, padding: '20px', paddingTop: {sm:'40px',xs:'20px'}, borderRight: '1px solid #dde3ee' }}>
                            <Box data-aos="fade-right" data-aos-delay={200 * i} sx={{backgroundColor:{xs:'#f2f5f3',sm:'#FBFBFB'},padding:{xs:'10px',sm:0},borderRadius:{sm:0,xs:'7px'}}}>
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 400, color: '#502f73', fontSize: '20px' }}>{heading}</Typography>
                                <p style={{ fontFamily: 'Alexandria', color: '#424242', fontWeight: 300, fontSize: '14px', lineHeight: '21px', }}>{desc[i]}</p>
                            </Box>
                        </Box>
                    </>))}
                </Box>
            </Box>
        </>
    )
}

export default ProcessorSolutions