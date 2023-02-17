import React from 'react'
import styles from '../../styles/services/payments.module.css'
import { Box, Stack, styled, Typography, Grid } from '@mui/material'
import { MdMobileScreenShare } from 'react-icons/md';
import { BiWallet } from 'react-icons/bi';
import { MdKeyboardArrowLeft } from 'react-icons/md';



const StyledBox = styled(Box)({
    height: '180px',
    // border: '1px solid black',
    // flex : 1,
    display: 'flex',
    justifyContent: 'end',
})

const mobilePaymentDetails = [
    {
        logo: <MdMobileScreenShare className={styles.actualLogo} />,
        title: 'Mobile Banking and Payments',
        desc: 'Leveraging social media to effectively market online store.'
    },
    {
        logo: <BiWallet className={styles.actualLogo} />,
        title: 'Digital/Mobile Wallets',
        desc: 'Processes all payment modes for online and traditional business, anywhere.'
    }
]


const MobilePayments = () => {
    return (
        <>
            <div style={{ margin: '100px', marginRight: '40px', display: 'flex', alignItems: 'center', gap: '30px' }}>
                {mobilePaymentDetails.map(item => (<>
                    <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0" data-aos-duration="800">
                        <div className={styles.mobile_card} >
                            <div className={styles.mobile__card_logo}>{item.logo}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}.</p>
                        </div>
                    </div>
                </>))}
                <div data-aos="fade-left">
                    <MdKeyboardArrowLeft style={{ height: '80px', width: '80px', color: 'pink' }} />
                </div>
                <StyledBox >
                    <Box  >
                        <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                            <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: '70px', color: '#fbdcfc', textAlign: 'center' }}>MOBILE</Typography>
                        </Box>
                        <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                            <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: '5vw', marginTop: '-70px' }}>Payments</Typography>
                        </Box>
                    </Box>
                </StyledBox>
            </div>
        </>
    )
}

export default MobilePayments