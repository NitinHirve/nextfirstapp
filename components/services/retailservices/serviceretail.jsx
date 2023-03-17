import { Box, Stack, Typography, styled, Grid } from '@mui/material'
import React from 'react'
import styles from '../../../styles/services/retail.module.css'
import stylesPayment from '../../../styles/services/payments.module.css'
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdMobileScreenShare } from 'react-icons/md';
import { BiWallet } from 'react-icons/bi';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import CategoryIcon from '@mui/icons-material/Category';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';



const StyledBox = styled(Box)({
    height: '180px',
    // border: '1px solid black',
    display: 'flex',
    justifyContent: 'end',
    paddingRight: '40px',
    marginTop: '120px',
    // marginBottom: '50px'
})

const StyledBoxHeading = styled(Box)({
    height: '180px',
    // border: '1px solid black',
    display: 'flex',
    justifyContent: 'end',
    paddingRight: '40px',
    marginTop: '50px',
    marginBottom: '50px'
})

const StyledBoxHeading2 = styled(Box)({
    height: '180px',
    // border: '1px solid black',
    display: 'flex',
    justifyContent: 'start',
    paddingLeft: '80px',
    marginTop: '110px',
    // marginBottom: '30px'
})


const StyledBoxHeadingECommerce = styled(Box)({
    height: '180px',
    display: 'flex',
    justifyContent: 'start',
    paddingRight: '40px',
    position: 'absolute',
    top: 360,
    left: 200
})

const headings = [
    'Pos And Payment Peripherals',
    'Kiosk And Self Checkout',
    'Mobile/ Tablet Applications',
    'Gift & Loyalty Application',
    'Credit/ Debit Card Applications',
]

const desc = [
    'Integrate with Pin Pads, Barcode readers, ECRs, Bluetooth Printers, Biometric readers under one platform for flawless operation facility.',
    'Automating retail experience with DIY ability and enabling users to scan goods and pay through your own choice of digital medium.',
    'Building responsive applications across all digital mediums, appropriate for mobiles and tablets.',
    'Offering rewards from all major brands, it works across a number of retailers.',
    'Accepts all credit and debit cards across all banks.'
]

const headingsBackOffice = [
    'Workforce Management',
    'Customer Management',
    'Inventory Management',
    'Bi And Analytics'
]

const descBackOffice = [
    'With large retail facilities spread across geographies, workforce management is crucial. Training and engaging the workforce at regular intervals and directing with the right information can be processed with our exception dashboards. We offer an Integrated set of processes that enables optimization of your workforce.',
    'As retailers, developing and maintaining client relationships is significant. While CRM’s are old and known, customer management platform is integral to increase overall experience between a company and client. Our data-drive analytical process also offers key insights and customer details that can be advantageous for business success.',
    'Stocking goods for future use, Organizations can now master the discipline of storing and managing stock inputs, along with, tracking and maintain stock reports. We design and develop seamless inventory management solutions that are simple, suitable, efficient and effective for all small and large size companies.',
    'Offering a competitive edge and radical solutions to your business concerns, our business intelligence, and analytics platform is built with the latest and cutting-edge technology. Our proven expert data-driven tool provides faster and realistic decision-making ability across all industries and verticals.'
]


const StyledBoxHeadingENTERPRISE = styled(Box)({
    height: '180px',
    // border: '1px solid black',
    // flex : 1,
    display: 'flex',
    justifyContent: 'end',
})

const enterpriseSolutionsDetails = [
    {
        logo: <MobileFriendlyIcon style={{ color: '#04c718' }} className={stylesPayment.actualLogo} />,
        title: 'Enterprise Mobility Solution',
        desc: 'Smart world demand business presence in smart devices. As applications are accessed through different mediums'
    },
    {
        logo: <PrecisionManufacturingIcon style={{ color: '#04c718' }} className={stylesPayment.actualLogo} />,
        title: 'Supply Chain Management',
        desc: 'While maximizing customer value is imperative, it is also essential to hold a competitive advantage at all hours.'
    },
    {
        logo: <SensorOccupiedIcon style={{ color: '#04c718' }} className={stylesPayment.actualLogo} />,
        title: 'Erp And Crm',
        desc: 'Business success depends on engaging and managing various interactions. As customers are of prime significance.'
    },
    {
        logo: <CategoryIcon style={{ color: '#04c718' }} className={stylesPayment.actualLogo} />,
        title: 'Merchandising   ',
        desc: 'While all products might be customer centric, not all customers are all product centric. Hence, it is crucial to rightly promote products that will attract customers and also increase sales.   '
    }
]

const serviceretail = () => {
    return (
        <>
            <Stack className={styles.myBG} direction="row" >
                <Box sx={{ position: 'relative', width: '50%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box sx={{ position: 'absolute', marginTop: '-60px' }}>
                        {/* <Typography data-aos="fade-right" style={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#1a237e', fontSize: '60px' }}>Next-Gen</Typography> */}
                        <Typography data-aos="fade-down" style={{ fontFamily: 'Alexandria', fontWeight: '400', color: '#53bd5f', fontSize: '75px', marginTop: '-10px', }}>
                            Retail
                        </Typography>
                        <Typography data-aos="fade-up" sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: '22px', color: '#535151', maxWidth: '400px' }}>
                            With an increasing focus on customer experience, it is imperative to offer an elevated and competitive shopping experience for consumers. Thus, it is optimum to strengthen your retail in-store operations.
                        </Typography>
                    </Box>
                </Box>
                <StyledBox sx={{ position: 'relative' }}>
                    <Box data-aos="zoom-out" sx={{ position: 'relative' }}>
                        <figure >
                            <img className={styles.floatingImg} style={{ width: '500px' }} src="/services/images/retail.png" alt="abutImg"></img>
                        </figure>
                    </Box>
                </StyledBox>
            </Stack>

            
            <StyledBoxHeading >
                <Box  >
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: '64px', color: '#b4fabc' }}>IN-STORE OPERATIONS</Typography>
                    </Box>
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: '5vw', marginTop: '-60px' }}>POS Solutions</Typography>
                    </Box>
                </Box>
            </StyledBoxHeading>

            <Grid sx={{ padding: '0px 170px' }} container spacing={2} >
                {headings.map((item, i) => (<>
                    <Grid item xs={12} sm={4} md={4} >
                        <div data-aos="fade-left" data-aos-delay={i <= 3 ? 300 * i : 300 * (i - 4)} className={stylesPayment.card_outer}>
                            <div className={stylesPayment.card}>
                                <Typography style={{ fontFamily: 'Alexandria', fontWeight: 400, fontSize: '24px' }} >{item}</Typography>
                            </div>
                            <div className={stylesPayment.car_footer} style={{ backgroundColor: '#37b345' }} >
                                <MdKeyboardArrowUp />
                                <Typography className={stylesPayment.car_footer_readMore} > Read More</Typography>
                                <p className={stylesPayment.card_desc}>{desc[i]}</p>
                            </div>
                        </div>
                    </Grid>
                </>))}
            </Grid>

            <StyledBoxHeading2 >
                <Box  >
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: '64px', color: '#b4fabc' }}>IN-STORE OPERATIONS</Typography>
                    </Box>
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: '5vw', marginTop: '-60px' }}>Back Office</Typography>
                    </Box>
                </Box>
            </StyledBoxHeading2>

            <div style={{ height: '500px', border: '1px solid #dde3ee', borderRight: '0px', borderLeft: 'none', display: 'flex', marginRight: '40px', marginBottom: '40px' }}>
                <div data-aos="fade-right" className={styles.backOfficeBG} style={{ width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography sx={{ fontFamily: 'Alexandria', paddingLeft: '25px', fontWeight: 300, fontSize: '22px', color: 'white', maxWidth: '400px', borderLeft: '5px solid yellow' }}>
                        With an increasing focus on customer experience, it is imperative to offer an elevated and competitive shopping experience for consumers. Thus, it is optimum to strengthen your retail in-store operations.</Typography>
                </div>
                <div style={{ width: '60%', backgroundColor: '#FBFBFB', display: 'flex', }}>
                    {headingsBackOffice.map((heading, i) => (<>
                        <div className={stylesPayment.processsorElement} style={{ width: '25%', padding: '20px', paddingTop: '40px', borderRight: '1px solid #dde3ee' }}>
                            <Box data-aos="fade-right" data-aos-delay={200 * i} >
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 400, color: '#144719', fontSize: '20px' }}>{heading}</Typography>
                                <p style={{ fontFamily: 'Alexandria', color: '#424242', fontWeight: 300, fontSize: '14px', lineHeight: '21px', }}>{descBackOffice[i]}</p>
                            </Box>
                        </div>

                    </>))}

                </div>
            </div>

            {/* E-Commerce Solution> */}

            <div style={{ height: '1000px', backgroundColor: '#eff0f4', position: 'relative', paddingTop: '100px' }}>
                <StyledBoxHeadingECommerce >
                    <Box  >
                        <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                            <Typography sx={{
                                fontFamily: 'Alexandria', fontWeight: 300, fontSize: '110px', color: '#d4d4d6', color: '#eff0f4',
                                textShadow: '0 13.36px 8.896px #c4b59d,0 -2px 1px #fff'
                            }}>E</Typography>
                        </Box>
                        <Box data-aos="fade-right" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                            <Typography className={stylesPayment.walletHead} sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: '8vw', marginTop: '-90px', marginLeft: '-60px' }}>Commerce</Typography>
                        </Box>
                    </Box>
                </StyledBoxHeadingECommerce>
                <div data-aos="zoom-out" style={{ position: 'absolute', top: 50, right: 600 }}>
                    <div className={stylesPayment.drop}>
                        <div className={stylesPayment.content}>
                            <h2 style={{ color: '#298f33' }}>01</h2>
                            <h1 >Quick Online Checkout</h1>
                            <a style={{ backgroundColor: '#02690d' }} >Read more</a>
                        </div>
                        <div className={stylesPayment.contentDesc}>
                            <p style={{ textAlign: 'center' }}>Increasing market visibility and traction, social media is an effective and powerful medium to engage and redirect audience to online store.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-out" data-aos-delay="300" style={{ position: 'absolute', top: 120, right: 250 }}>
                    <div className={stylesPayment.drop} style={{ borderRadius: '61% 39% 50% 50% / 41% 52% 48% 59% ' }}>
                        <div className={stylesPayment.content}>
                            <h2 style={{ color: '#298f33' }}>02</h2>
                            <h1 >Social Media Commerce</h1>
                            <a style={{ backgroundColor: '#02690d' }}>Read more</a>
                        </div>
                        <div className={stylesPayment.contentDesc}>
                            <p style={{ textAlign: 'center' }}>
                                Increasing market visibility and traction, social media is an effective and powerful medium to engage and redirect audience to online store.
                            </p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-out" style={{ position: 'absolute', top: 460, right: 250 }}>
                    <div className={stylesPayment.drop} style={{ borderRadius: '56% 44% 71% 29% / 50% 54% 46% 50% ' }}>
                        <div className={stylesPayment.content}>
                            <h2 style={{ color: '#298f33' }}>03</h2>
                            <h1 >SAAS Solutions</h1>
                            <a style={{ backgroundColor: '#02690d' }}>Read more</a>
                        </div>
                        <div className={stylesPayment.contentDesc}>
                            <p style={{ textAlign: 'center' }}>
                                Utilizing advanced and latest technology, we develop and provide latest SaaS ecommerce solutions. Providing cloud based hosting systems, they can be accessed by any web user on the internet.
                            </p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-out" style={{ position: 'absolute', top: 650, right: 600 }}>
                    <div className={stylesPayment.drop} style={{ borderRadius: '55% 45% 33% 67% / 35% 31% 69% 65% ' }}>
                        <div className={stylesPayment.content}>
                            <h2 style={{ color: '#298f33' }}>04</h2>
                            <h1 >Web Design And Development</h1>
                            <a style={{ backgroundColor: '#02690d' }}>Read more</a>
                        </div>
                        <div className={stylesPayment.contentDesc}>
                            <p style={{ textAlign: 'center' }}>
                                Variants of portals include mashups and intranet ``dashboards`` for executives and managers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ENTERPRISE SOLUTIONS */}

            <StyledBoxHeading sx={{marginBottom:'-60px'}} >
                <Box  >
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: '100px', color: '#b4fabc' }}>ENTERPRISE</Typography>
                    </Box>
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: '6vw', marginTop: '-90px' }}>Solutions</Typography>
                    </Box>
                </Box>
            </StyledBoxHeading>


            <div style={{ margin: '100px 0px 100px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px' }}>
                {enterpriseSolutionsDetails.map(item => (<>
                    <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0" data-aos-duration="800">
                        <div className={stylesPayment.mobile_card} >
                            <div className={stylesPayment.mobile__card_logo}>{item.logo}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}.</p>
                        </div>
                    </div>
                </>))}
            </div>
        </>
    )
}

export default serviceretail