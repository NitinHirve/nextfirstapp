import React from 'react'
import styles from '../../../styles/services/fintech.module.css'
import { Box, Stack, Typography, styled, Grid } from '@mui/material'
import stylesPayment from '../../../styles/services/payments.module.css'
import { MdKeyboardArrowUp } from 'react-icons/md';
import { Architecture } from '@mui/icons-material';
import AnimationIcon from '@mui/icons-material/Animation';
import BusinessIcon from '@mui/icons-material/Business';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import BugReportIcon from '@mui/icons-material/BugReport';




const StyledBox = styled(Box)({
    height: '180px',
    // border: '1px solid black',
    display: 'flex',
    justifyContent: 'end',
    paddingRight: '40px',
    marginTop: '20px',
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
    'Idea Validation & Refinement',
    'Analysis And Planning',
    'Understanding Technology Stack',
    'Mockup Creation',
    'Roadmap For Mvp'
]

const desc = [
    'Process of testing and validating your idea prior to launching your business name, tagline, product, service, website etc.',
    'Discipline combines in-depth analysis of both operational and financial data to help align business processes and strategies with financial goals.',
    'Identifying the set of softwares that provides the infrastructure for your business and MVP.',
    'Create model used for teaching, demonstration, design evaluation, promotion, and other purposes.',
    'A version of a new product which allows a team to collect the maximum amount of validated learnings about customers with the least effort.'
]

const architectureHeading = [
    'Technical Architecture Design',
    'Unit Testing Developed Modules',
    'Module Wise Deliveries',
    'Front-end Develeopent'
]

const architecturDesc = [
    'Development of methodical information technology specifications, models and guidelines, using a variety of Information Technology notations.',
    'Testing modules together with associated control data, usage procedures, and operating procedures.',
    'Programs are composed of one or more independently developed modules that are not combined until the program is linked.',
    'Developmen of website or app and server side of development where we focus how the site works.'
]

const reEngineeringDetails = [

    {
        logo: <AnimationIcon style={{ color: '#04c718' }} className={stylesPayment.actualLogo} />,
        title: 'Product Enhancement',
        desc: 'Bringing in noteworthy and functional improvements to your product as part of a new version of it.'
    },
    {
        logo: <BusinessIcon style={{ color: '#04c718' }} className={stylesPayment.actualLogo} />,
        title: 'Business Intelligence',
        desc: "Meet your customer's needs more effectively and efficiently, make interactions faster and easier."
    },
    {
        logo: <DragIndicatorIcon style={{ color: '#04c718' }} className={stylesPayment.actualLogo} />,
        title: 'Improved UX And UI Designs',
        desc: 'Built great experience to enhance customer satisfaction and improve repeat visits.'
    },
    {
        logo: <BugReportIcon style={{ color: '#04c718' }} className={stylesPayment.actualLogo} />,
        title: 'Test Automation',
        desc: 'Control the execution of tests and compare your actual test results with predicted or expected results.'
    }

]

const fintechservice = () => {
    return (
        <>
            <Stack className={styles.myBG} direction="row" >
                <Box sx={{ position: 'relative', width: '50%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box sx={{ position: 'absolute', marginTop: '-60px' }}>
                        {/* <Typography data-aos="fade-right" style={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#1a237e', fontSize: '60px' }}>Next-Gen</Typography> */}
                        <Typography data-aos="fade-down" style={{ fontFamily: 'Alexandria', fontWeight: '400', color: '#1039a1', fontSize: '75px', marginTop: '-10px', lineHeight: '74px' }}>
                            Fintech<br></br> Startup
                        </Typography>
                        <Typography data-aos="fade-up" sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: '22px', color: '#535151', maxWidth: '400px', marginTop: '20px' }}>
                            We nurture ideas, validate, structure and create successful roadmaps for Fintech startups
                        </Typography>
                    </Box>
                </Box>
                <StyledBox sx={{ position: 'relative' }}>
                    <Box data-aos="zoom-out" sx={{ position: 'relative' }}>
                        <figure >
                            <img className={styles.floatingImg} style={{ width: '530px' }} src="/services/images/fintech.png" alt="abutImg"></img>
                        </figure>
                    </Box>
                </StyledBox>
            </Stack>

            <StyledBoxHeading >
                <Box  >
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: '64px', color: '#e8e8e8;' }}>PRODUCT IDEATION &</Typography>
                    </Box>
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: '5vw', marginTop: '-60px' }}>Innovation</Typography>
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
                            <div className={stylesPayment.car_footer} style={{ backgroundColor: '#2d6beb' }} >
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
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: '64px', color: '#e8e8e8' }}>ARCHITECTURE DESIGN &</Typography>
                    </Box>
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: '5vw', marginTop: '-60px' }}>Innovation</Typography>
                    </Box>
                </Box>
            </StyledBoxHeading2>


            <div style={{ height: '400px', border: '1px solid #dde3ee', borderRight: '0px', borderLeft: 'none', display: 'flex', marginRight: '40px', marginBottom: '40px' }}>
                <div data-aos="fade-right" className={styles.backOfficeBG} style={{ width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography sx={{ fontFamily: 'Alexandria', paddingLeft: '25px', fontWeight: 300, fontSize: '22px', color: 'white', maxWidth: '400px', borderLeft: '5px solid yellow' }}>
                        Schematic Design Phase. The primary purpose is to define and describe all important aspects of the project. </Typography>
                </div>
                <div style={{ width: '60%', backgroundColor: '#FBFBFB', display: 'flex', }}>
                    {architectureHeading.map((heading, i) => (<>
                        <div className={stylesPayment.processsorElement} style={{ width: '25%', padding: '20px', paddingTop: '40px', borderRight: '1px solid #dde3ee' }}>
                            <Box data-aos="fade-right" data-aos-delay={200 * i} >
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 400, color: '#144719', fontSize: '20px' }}>{heading}</Typography>
                                <p style={{ fontFamily: 'Alexandria', color: '#424242', fontWeight: 300, fontSize: '14px', lineHeight: '21px', }}>{architecturDesc[i]}</p>
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
                                fontFamily: 'Alexandria', fontWeight: 300, fontSize: '50px', color: '#d4d4d6', color: '#eff0f4',
                                textShadow: '0 13.36px 8.896px #c4b59d,0 -2px 1px #fff',
                                marginTop: '40px'
                            }}>Independent Testing</Typography>
                        </Box>
                        <Box data-aos="fade-right" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                            <Typography className={stylesPayment.walletHead} sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: '8vw', marginTop: '-40px', marginLeft: '-60px' }}>Services</Typography>
                        </Box>
                    </Box>
                </StyledBoxHeadingECommerce>
                <div data-aos="zoom-out" style={{ position: 'absolute', top: 50, right: 600 }}>
                    <div className={stylesPayment.drop}>
                        <div className={stylesPayment.content}>
                            <h2 style={{ color: '#2d6beb' }}>01</h2>
                            <h1 >Plan Testing Strategy</h1>
                            <a style={{ backgroundColor: '#2d6beb' }} >Read more</a>
                        </div>
                        <div className={stylesPayment.contentDesc}>
                            <p style={{ textAlign: 'center' }}>
                                Defines testing approach to achieve testing objectives. The Test Strategy is normally derived from the Business Requirements.
                            </p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-out" data-aos-delay="300" style={{ position: 'absolute', top: 120, right: 250 }}>
                    <div className={stylesPayment.drop} style={{ borderRadius: '61% 39% 50% 50% / 41% 52% 48% 59% ' }}>
                        <div className={stylesPayment.content}>
                            <h2 style={{ color: '#2d6beb' }}>02</h2>
                            <h1 >Test Script Preparation</h1>
                            <a style={{ backgroundColor: '#2d6beb' }}>Read more</a>
                        </div>
                        <div className={stylesPayment.contentDesc}>
                            <p style={{ textAlign: 'center' }}>
                                Testing a set of instructions on a system under test to verify that the system performs as expected.                            </p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-out" style={{ position: 'absolute', top: 460, right: 250 }}>
                    <div className={stylesPayment.drop} style={{ borderRadius: '56% 44% 71% 29% / 50% 54% 46% 50% ' }}>
                        <div className={stylesPayment.content}>
                            <h2 style={{ color: '#2d6beb' }}>03</h2>
                            <h1 >Test Case Documentation</h1>
                            <a style={{ backgroundColor: '#2d6beb' }}>Read more</a>
                        </div>
                        <div className={stylesPayment.contentDesc}>
                            <p style={{ textAlign: 'center' }}>
                                Test inputs, execution conditions, and expected results developed for a particular objectives studied and recorded with high accuracy.
                            </p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-out" style={{ position: 'absolute', top: 650, right: 600 }}>
                    <div className={stylesPayment.drop} style={{ borderRadius: '55% 45% 33% 67% / 35% 31% 69% 65% ' }}>
                        <div className={stylesPayment.content}>
                            <h2 style={{ color: '#2d6beb' }}>04</h2>
                            <h1 >Functional Testing</h1>
                            <a style={{ backgroundColor: '#2d6beb' }}>Read more</a>
                        </div>
                        <div className={stylesPayment.contentDesc}>
                            <p style={{ textAlign: 'center' }}>
                                Fool proof systematic checks of each and every component of your product to figure out whether it is working for you or not.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <StyledBoxHeading  >
                <Box  >
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: '80px', color: '#e8e8e8;' }}>PRODUCT SUPPORT &</Typography>
                    </Box>
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: '5vw', marginTop: '-70px' }}>Re-Engineering</Typography>
                    </Box>
                </Box>
            </StyledBoxHeading>

            <div style={{ margin: '100px 0px 100px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px' }}>
                {reEngineeringDetails.map(item => (<>
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

export default fintechservice