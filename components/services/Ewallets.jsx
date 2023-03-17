import React from 'react'
import { Box, Stack, styled, Typography, Grid } from '@mui/material'
import styles from '../../styles/services/payments.module.css'


const StyledBox = styled(Box)({
    height: '180px',
    // border: '1px solid black',
    display: 'flex',
    justifyContent: 'start',
    paddingRight: '40px',
    position: 'absolute',
    top: 360,
    left: 200
})


const Ewallets = () => {
    return (
        <>
            <div style={{ height: '1000px', backgroundColor: '#eff0f4', position: 'relative', paddingTop: '100px'}}>
                <StyledBox >
                    <Box  >
                        <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                            <Typography sx={{
                                fontFamily: 'Alexandria', fontWeight: 300, fontSize: '110px', color: '#d4d4d6', color: '#eff0f4',
                                textShadow: '0 13.36px 8.896px #c4b59d,0 -2px 1px #fff'
                            }}>E</Typography>
                        </Box>
                        <Box data-aos="fade-right" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                            <Typography className={styles.walletHead} sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: '8vw', marginTop: '-90px' }}>Wallets</Typography>
                        </Box>
                    </Box>
                </StyledBox>
                <div data-aos="zoom-out" style={{ position: 'absolute', top: 50, right: 600 }}>
                    <div className={styles.drop}>
                        <div className={styles.content}>
                            <h2 style={{ color: '#ff0f5b' }}>01</h2>
                            <h1 >Cloud Based Payment</h1>
                            <a >Read more</a>
                        </div>
                        <div className={styles.contentDesc}>
                            <p style={{ textAlign: 'center' }}>Redefining payment systems, we guarantee to transform your payment experience with our cloud based payment solutions. Offering flexibility and no latency, our cloud platforms are secure and efficient.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-out" data-aos-delay="300" style={{ position: 'absolute', top: 120, right: 250 }}>
                    <div className={styles.drop} style={{ borderRadius: '61% 39% 50% 50% / 41% 52% 48% 59% ' }}>
                        <div className={styles.content}>
                            <h2 style={{ color: '#ff0f5b' }}>02</h2>
                            <h1 >Cross Border Payment</h1>
                            <a >Read more</a>
                        </div>
                        <div className={styles.contentDesc}>
                            <p style={{ textAlign: 'center' }}>
                                Refining payment systems, we also empower individuals, corporations, settlement institutions and central banks with convenient and flexible payment processes.
                            </p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-out" style={{ position: 'absolute', top: 460, right: 250 }}>
                    <div className={styles.drop} style={{ borderRadius: '56% 44% 71% 29% / 50% 54% 46% 50% ' }}>
                        <div className={styles.content}>
                            <h2 style={{ color: '#ff0f5b' }}>03</h2>
                            <h1 >Crypto Currencies</h1>
                            <a >Read more</a>
                        </div>
                        <div className={styles.contentDesc}>
                            <p style={{ textAlign: 'center' }}>
                                We evolve and provide trending market suitable solutions to all your payment process. We build and provide digital currency with cutting edge encryption techniques utilizing latest Bitcoin and ETH methods.
                            </p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-out" style={{ position: 'absolute', top: 650, right: 600 }}>
                    <div className={styles.drop} style={{ borderRadius: '55% 45% 33% 67% / 35% 31% 69% 65% ' }}>
                        <div className={styles.content}>
                            <h2 style={{ color: '#ff0f5b' }}>04</h2>
                            <h1 >Payment With Social Media</h1>
                            <a >Read more</a>
                        </div>
                        <div className={styles.contentDesc}>
                            <p style={{ textAlign: 'center' }}>
                                Facilitating payment collection across all platforms, our e-wallets are flexible and can be integrated with all social media platforms for any payment requirement.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ewallets