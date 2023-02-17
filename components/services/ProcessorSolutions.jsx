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
            <StyledBox >
                <Box  >
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: '100px', color: '#fbdcfc' }}>PROCESSOR</Typography>
                    </Box>
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: '6vw', marginTop: '-90px' }}>Solutions</Typography>
                    </Box>
                </Box>
            </StyledBox>
            <div  style={{ height: '500px', border: '1px solid #dde3ee',borderRight:'0px', borderLeft: 'none', display: 'flex', marginRight: '40px',marginBottom:'40px' }}>
                <div data-aos="fade-right" className={styles.ProcessorBG} style={{ width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography  sx={{ fontFamily: 'Alexandria', paddingLeft: '25px', fontWeight: 300, fontSize: '22px', color: 'white', maxWidth: '400px', borderLeft: '5px solid yellow' }}>
                        Digital payments are convenient and preferred, yet, they demand safety and security in terms of transactions. We at BNT build secure and tech-advanced processor solutions for e-commerce, in-stores or retail, along with, both offline and online solutions for your business goals.                    </Typography>
                </div>
                <div  style={{ width: '60%', backgroundColor: '#FBFBFB', display: 'flex', }}>
                    {headings.map((heading, i) => (<>
                        <div className={styles.processsorElement} style={{ width: '25%', padding: '20px', paddingTop: '40px', borderRight: '1px solid #dde3ee' }}>
                            <Box  data-aos="fade-right" data-aos-delay={ 200 * i } >
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 400, color: '#502f73', fontSize: '20px' }}>{heading}</Typography>
                                <p style={{ fontFamily: 'Alexandria', color: '#424242', fontWeight: 300, fontSize: '14px', lineHeight: '21px', }}>{desc[i]}</p>
                            </Box>
                        </div>

                    </>))}

                </div>
            </div>
        </>
    )
}

export default ProcessorSolutions