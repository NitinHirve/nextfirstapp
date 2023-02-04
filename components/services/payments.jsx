import React from 'react'
import { Box, styled, Typography } from '@mui/material'
import styles from '../../styles/services/payments.module.css'
import AcquiringPayments from './AcquiringPayments'



const StyledBox = styled(Box)({
    height: '180px',
    // border: '1px solid black',
    display: 'flex',
    justifyContent: 'center'
})

const headings = ['Mobile Payment Solutions',
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
            <div>
                <div style={{ height: '400px', backgroundColor: '#222' }} className={styles.container} >
                    <StyledBox >
                        <Box  >
                            <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: '110px', color: '#e8e8e8' }}>ACQUIRING</Typography>
                            </Box>
                            <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: '6vw', marginTop: '-40px' }}>Solutions</Typography>
                            </Box>
                        </Box>
                    </StyledBox>
                </div>
                <div style={{ minHeight: '500px', backgroundColor: '#222' }} className={styles.container} >
                    {
                        headings.map((heading, i) => (<AcquiringPayments heading={heading} desc={desc[i]} />))
                    }
                </div>
            </div>
{/* second */}
            <div>
                <div style={{ height: '400px', backgroundColor: '#00796b' }} className={styles.container} >
                    <StyledBox >
                        <Box  >
                            <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: '110px', color: '#e8e8e8' }}>PROCESSOR</Typography>
                            </Box>
                            <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: '6vw', marginTop: '-40px' }}>Solutions</Typography>
                            </Box>
                        </Box>
                    </StyledBox>
                </div>
                <div style={{ minHeight: '500px', backgroundColor: '#00796b' }} className={styles.container} >
                    {
                        headings.map((heading, i) => (<AcquiringPayments heading={heading} desc={desc[i]} />))
                    }
                </div>
            </div>
{/* third */}
            <div>
                <div style={{ height: '400px', backgroundColor: '#558b2f' }} className={styles.container} >
                    <StyledBox >
                        <Box  >
                            <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: '110px', color: '#e8e8e8' }}>MOBILE</Typography>
                            </Box>
                            <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#fff', textAlign: 'center', fontSize: '4vw', marginTop: '-40px' }}>Payments</Typography>
                            </Box>
                        </Box>
                    </StyledBox>
                </div>
                <div style={{ minHeight: '500px', backgroundColor: '#558b2f' }} className={styles.container} >
                    {
                        headings.map((heading, i) => (<AcquiringPayments heading={heading} desc={desc[i]} />))
                    }
                </div>
            </div>
{/* fourth */}
           <div>
                <div style={{ height: '400px', backgroundColor: '#7e57c2' }} className={styles.container} >
                    <StyledBox >
                        <Box  >
                            <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: '110px', color: '#e8e8e8' }}>PREPAID</Typography>
                            </Box>
                            <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#fff', textAlign: 'center', fontSize: '6vw', marginTop: '-40px' }}>Cards</Typography>
                            </Box>
                        </Box>
                    </StyledBox>
                </div>
                <div style={{ minHeight: '500px', backgroundColor: '#7e57c2' }} className={styles.container} >
                    {
                        headings.map((heading, i) => (<AcquiringPayments heading={heading} desc={desc[i]} />))
                    }
                </div>
            </div>    
{/* fifth */}
            <div>
                <div style={{ height: '400px', backgroundColor: '#5d4037' }} className={styles.container} >
                    <StyledBox >
                        <Box  >
                            <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: '110px', color: '#e8e8e8' }}>E-WALLETS</Typography>
                            </Box>
                            {/* <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#fff', textAlign: 'center', fontSize: '6vw', marginTop: '-40px' }}>Cards</Typography>
                            </Box> */}
                        </Box>
                    </StyledBox>
                </div>
                <div style={{ minHeight: '500px', backgroundColor: '#5d4037' }} className={styles.container} >
                    {
                        headings.map((heading, i) => (<AcquiringPayments heading={heading} desc={desc[i]} />))
                    }
                </div>
            </div>                     
        </>
    )
}

export default payments