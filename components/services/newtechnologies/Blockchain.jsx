import React from 'react'
import { Stack, Box, styled, Typography, useMediaQuery } from '@mui/material';
import style from '../../../styles/services/newtechnologies.module.css'
import stylesPayment from '../../../styles/services/payments.module.css'
import Link from 'next/link'


import AnimationIcon from '@mui/icons-material/Animation';
import BusinessIcon from '@mui/icons-material/Business';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import BugReportIcon from '@mui/icons-material/BugReport';

const reEngineeringDetails = [

    {
        logo: <AnimationIcon style={{ color: '#04c718' }} className={stylesPayment.actualLogo} />,
        title: 'Crypto Wallet Development',
        desc: 'Intelligent software program that stores private and public keys and interacts enable users to send and receive and monitor digital currency.'
    },
    {
        logo: <BusinessIcon style={{ color: '#04c718' }} className={stylesPayment.actualLogo} />,
        title: 'Ethereum/cardano/eos Blockchain',
        desc: "Allows quicker and easier transactions and monitoring across the different blockchains."
    },
    {
        logo: <DragIndicatorIcon style={{ color: '#04c718' }} className={stylesPayment.actualLogo} />,
        title: 'Writing Smart Contracts',
        desc: 'Intelligent computer protocol intended to digitally facilitate, verify, or enforce the negotiation or performance of a contract.'
    },
    {
        logo: <BugReportIcon style={{ color: '#04c718' }} className={stylesPayment.actualLogo} />,
        title: 'Asset Registry And Kyc',
        desc: 'Centralized repository of KYC records with uniform KYC norms and inter-usability of the KYC records across the sectors.'
    }

]


const AIDetails = [

    {
        logo: <AnimationIcon style={{ color: '#04c718' }} className={stylesPayment.actualLogo} />,
        title: 'Digital Assistants',
        desc: 'With the recent evolution in technology, we at BNT aim to provide support in form of developing AI bots to banks and financial processes that stimulate enhanced customer interactions and experiences.'
    },
    {
        logo: <BusinessIcon style={{ color: '#04c718' }} className={stylesPayment.actualLogo} />,
        title: 'Portfolio Analytics',
        desc: "BNT’s expert professionals offer Artificial Intelligence Solutions that helps financial institutions in marking any default highlights for understanding credit history."
    },
    {
        logo: <DragIndicatorIcon style={{ color: '#04c718' }} className={stylesPayment.actualLogo} />,
        title: 'Fraud Detection',
        desc: 'Intelligent automation and robotic process automation can help detect frauds. An integral function, BNT’s AI can develop algorithms that improves analysis, avoids errors'
    },
    {
        logo: <BugReportIcon style={{ color: '#04c718' }} className={stylesPayment.actualLogo} />,
        title: 'Risk Management',
        desc: 'AI in finance is playing a splendid role by curbing frauds. Further, at BNT, we provide AI algorithms to our clients that enable them to understand how customers are functioning and where they can mitigate risk.'
    }

]



const BigDataDetails = [

    {
        logo: <AnimationIcon style={{ color: '#04c718' }} className={stylesPayment.actualLogo} />,
        title: 'Data Storage',
        desc: 'Handling huge data can be challenging. We at BNT handle, manage and store large amount of our client’s data. We also support in selecting the most effective data storage method depending on their needs.'
    },
    {
        logo: <BusinessIcon style={{ color: '#04c718' }} className={stylesPayment.actualLogo} />,
        title: 'Data Mining',
        desc: "Our experienced data scientist professionals enable latest algorithms and data mining solutions that help them add an extra edge to their stats."
    },
    {
        logo: <DragIndicatorIcon style={{ color: '#04c718' }} className={stylesPayment.actualLogo} />,
        title: 'Cloud Computing',
        desc: 'We are cloud experts offering cloud computing ability for our clients maintaining cost and solutions. We provide excellent solution to our clients which are scalable, flexible and secure.'
    },
    {
        logo: <BugReportIcon style={{ color: '#04c718' }} className={stylesPayment.actualLogo} />,
        title: 'Data Management',
        desc: 'Our experts help our clients in better data management. We support our clients with information on how to organize and maintain data, keeping the security intact at all times.'
    }

]


const APIDevelopmentDetails = [

    {
        logo: <AnimationIcon style={{ color: '#04c718' }} className={stylesPayment.actualLogo} />,
        title: 'Product Based API',
        desc: 'BNT’s expert team of developers can build product-centric API’s as per our client needs. Our efficient team develops API’s for enterprise applications, banks and financial institution'
    },
    {
        logo: <BusinessIcon style={{ color: '#04c718' }} className={stylesPayment.actualLogo} />,
        title: 'API Development And Integrate',
        desc: "At BNT, we develop API as a service for the web and mobile applications. We utilize HTTP/HTTPs, XML, XHTML, Java, SOAP, EDI, AJAX, or Rest API Development."
    },
    {
        logo: <DragIndicatorIcon style={{ color: '#04c718' }} className={stylesPayment.actualLogo} />,
        title: 'Custom API Integration',
        desc: 'Developing custom API, we provide documentation, deployment, integration, publishing and maintenance of API. '
    },
    {
        logo: <BugReportIcon style={{ color: '#04c718' }} className={stylesPayment.actualLogo} />,
        title: 'API Testing',
        desc: 'We strategize, design, develop and deploy API testing platforms to automate the API testing procedure. This is important for validation, functional, UI, runtime, and security testing.'
    }

]


const Blockchain = () => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));


    return (
        <>

            <Box className={style.newtechBg} sx={{ height: { sm: '500px', xs: 'auto' }, marginBottom: '50px' }}>
                <Box sx={{ height: '100%', maxWidth: { sm: '800px', xs: '100%' }, marginLeft: { sm: '80px', xs: '20px' }, paddingTop: { sm: '110px', xs: '40px' } }}>
                    {/* <Typography sx={{ fontFamily: 'Alexandria', padding: 0, margin: '0!important', color: 'white', fontSize: '40px', fontWeight: 600, lineHeight: { xs: '45px', sm: 1.5 } }}>
                        Let’s Grow Together And Join Us To<br></br> Spread The Power Of Technology!
                    </Typography> */}
                    <Box sx={{ height: { xs: '100px', sm: '180px' }, display: 'flex', justifyContent: 'left' }} >
                        <Box  >
                            <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, textAlign: 'center', fontSize: { xs: '32px', sm: '110px' }, letterSpacing: { xs: '9px' }, color: '#e8e8e8' }}>TRENDING</Typography>
                            </Box>
                            <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: { xs: '41px', sm: '60px' }, marginTop: { xs: '-33px', sm: '-80px' } }}>Technologies</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: { sm: '21px', xs: '18px' }, color: '#fff', padding: { sm: 0, xs: '10px' }, marginTop: '40px' }}>
                        <span style={{ color: '#1e8be1', fontSize: '26px' }}>We</span> are a family of tech folks always striving for the next best thing. We value collaboration, inclusion, and excellence. With the aim of simplifying complex problems, we constantly challenge ourselves to adapt and evolve.
                    </Typography>
                </Box>
            </Box>

            <Stack direction={{ sm: "row", xs: 'column', height: { sm: 'auto', xs: 'auto' } }} >
                <Box className={style.blockchainBG} sx={{ position: 'relative', width: { sm: '40%', xs: '100%' }, display: 'grid', placeItems: 'center', height: { sm: 'auto', xs: '200px' } }}>
                    <Typography sx={{ fontFamily: 'Alexandria', fontWeight: '500', color: '#fff', fontSize: { sm: '75px', xs: '40px' } }}>
                        Blockchain
                    </Typography>
                </Box>

                <Box sx={{ width: { sm: '60%', xs: '100%' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box padding={{ sm: '30px', xs: '15px' }} sx={{ backgroundColor: '#fcfcfc', borderRadius: '10px' }}>
                        <Typography data-aos="fade-left" data-aos-once="false" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: { sm: '18px', xs: '15px' } }}>
                            Embracing new technology solutions, BNT is a leading provider of
                            <span style={{ fontSize: '21px', color: '#1e8be1' }}> Cryptocurrency</span> and <span style={{ fontSize: '21px', color: '#1e8be1' }}> Blockchain</span>  solutions. We have experts who assure and guarantee potential process
                            solutions with the next gen technology for resolving serious inefficacies. Offering Blockchain for
                            financial services we provide proven capabilities in increasing security and credibility.
                        </Typography>
                        <Typography data-aos="fade-left" data-aos-once="false" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', marginTop: '20px', fontSize: { sm: '18px', xs: '15px' } }}>
                            Our team provides solutions to back office, in-store or bank problems with our Blockchain expertise.
                            We also work around offering resolutions in processes like clearing and settlement, also helping reduce fraudulency in financial landscapes.
                        </Typography>
                        <Typography data-aos="fade-left" data-aos-once="false" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', marginTop: '20px', fontSize: { sm: '18px', xs: '15px' } }}>
                            With our application of blockchain technology, our team also supports in curbing data breach or
                            flag unethical activities sensitive to payment service providers. We also have expertise in
                            resolving and providing a safe and secure transaction platform with our exceptional blockchain
                            ability.
                        </Typography>
                        <Typography data-aos="fade-left" data-aos-once="false" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', marginTop: '20px', fontSize: { sm: '18px', xs: '15px' } }}>
                            We develop compatible platforms with Web, iOS, and Android, along with, easy assimilation with banks and credit card providers.
                        </Typography>
                    </Box>

                </Box>
            </Stack>

            <Box sx={{ margin: { sm: '10px 0px 100px 0px', xs: '20px' }, marginTop: { sm: '50px', xs: '50px' }, display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, alignItems: 'center', justifyContent: 'center', gap: '30px' }}>
                {reEngineeringDetails.map(item => (<>
                    <Box data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0" data-aos-duration="800">
                        <Box className={stylesPayment.mobile_card} >
                            <Box className={stylesPayment.mobile__card_logo}>{item.logo}</Box>
                            <h3>{item.title}</h3>
                            <p>{item.desc}.</p>
                        </Box>
                    </Box>
                </>))}
            </Box>


            {/* AI below  */}

            <Stack direction={{ sm: "row", xs: 'column-reverse', height: { sm: 'auto', xs: 'auto' } }} >

                <Box sx={{ width: { sm: '60%', xs: '100%' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box padding={{ sm: '30px', xs: '15px' }} sx={{ backgroundColor: '#fcfcfc', borderRadius: '10px' }}>
                        <Typography data-aos="fade-left" data-aos-once="false" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: { sm: '18px', xs: '15px' } }}>
                            As financial firms have been early adopters of relational databases, and intelligent solutions, <span style={{ fontSize: '21px', color: '#1e8be1' }}> Artificial Intelligence</span> in banking
                            and payment industry facilitates digitization with analytics to combat challenging situations.
                        </Typography>
                        <Typography data-aos="fade-left" data-aos-once="false" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', marginTop: '20px', fontSize: { sm: '18px', xs: '15px' } }}>
                            Intelligent computing does determine and support Fintech companies in solving crucial data and significantly human
                            problems. AI in banking automates manual process, develops a better understanding of data and patterns, understands
                            irregular patterns detecting frauds, and improving compliance.
                        </Typography>
                        <Typography data-aos="fade-left" data-aos-once="false" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', marginTop: '20px', fontSize: { sm: '18px', xs: '15px' } }}>
                            With physical payment operations becoming absolute post pandemic, Artificial Intelligence is emerging as an evolving
                            solution for digital payments. Machine Learning in payment enables fintech players and customers with online
                            purchases through contactless payment using RFID technology and virtual cards.
                        </Typography>
                        <Typography data-aos="fade-left" data-aos-once="false" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', marginTop: '20px', fontSize: { sm: '18px', xs: '15px' } }}>
                            Imbibing latest technologies, we at BNT facilitate Fintech companies and startups in solving problems and increasing
                            efficiency. Our Artificial Intelligence algorithms improves performances, assuring increased profits and reduced cost. Our algorithms also increase the speed and efficiency of payment process.
                        </Typography>
                    </Box>

                </Box>
                <Box className={style.AItechBG} sx={{ position: 'relative', width: { sm: '40%', xs: '100%' }, display: 'grid', placeItems: 'center', height: { sm: 'auto', xs: '200px' } }}>
                    <Typography sx={{ fontFamily: 'Alexandria', fontWeight: '500', color: '#fff', fontSize: { sm: '75px', xs: '40px' }, textAlign: 'center', lineHeight: '70px' }}>
                        Artificial <br></br>Intelligence
                    </Typography>
                </Box>
            </Stack>

            <Box sx={{ margin: { sm: '10px 0px 100px 0px', xs: '20px' }, marginTop: { sm: '50px', xs: '50px' }, display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, alignItems: 'center', justifyContent: 'center', gap: '30px' }}>
                {AIDetails.map(item => (<>
                    <Box data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0" data-aos-duration="800">
                        <Box className={stylesPayment.mobile_card} >
                            <Box className={stylesPayment.mobile__card_logo}>{item.logo}</Box>
                            <h3>{item.title}</h3>
                            <p>{item.desc}.</p>
                        </Box>
                    </Box>
                </>))}
            </Box>


            {/* Big data below  */}


            <Stack direction={{ sm: "row", xs: 'column', height: { sm: 'auto', xs: 'auto' } }} >
                <Box className={style.bigDataBg} sx={{ position: 'relative', width: { sm: '40%', xs: '100%' }, display: 'grid', placeItems: 'center', height: { sm: 'auto', xs: '200px' } }}>
                    <Typography sx={{ fontFamily: 'Alexandria', fontWeight: '500', color: '#fff', fontSize: { sm: '75px', xs: '40px' }, textAlign: 'center', lineHeight: '70px' }}>
                        Big <br></br>Data
                    </Typography>
                </Box>

                <Box sx={{ width: { sm: '60%', xs: '100%' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box padding={{ sm: '30px', xs: '15px' }} sx={{ backgroundColor: '#fcfcfc', borderRadius: '10px' }}>
                        <Typography data-aos="fade-left" data-aos-once="false" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: { sm: '18px', xs: '15px' } }}>
                            Experiencing the paradigm shift with new age technology, Companies are now able to dig profoundly into customer
                            management utilizing <span style={{ fontSize: '21px', color: '#1e8be1' }}> Big Data</span> . Driving convenience across industries, big data is seen making positive impacts
                            in the payment industry.
                        </Typography>
                        <Typography data-aos="fade-left" data-aos-once="false" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', marginTop: '20px', fontSize: { sm: '18px', xs: '15px' } }}>
                            Analytics provides key relevant information extracted from the data that offers more deeper insights to build healthy relations and satisfying customer relations.
                        </Typography>
                        <Typography data-aos="fade-left" data-aos-once="false" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', marginTop: '20px', fontSize: { sm: '18px', xs: '15px' } }}>
                            As data is imperative, we at BNT utilize advanced technologies to provide optimum data-based solutions that help in Organizational success.
                            We enable Organizations with advanced transactional data inputs and data integration systems supporting cross-department growth.
                        </Typography>
                        <Typography data-aos="fade-left" data-aos-once="false" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', marginTop: '20px', fontSize: { sm: '18px', xs: '15px' } }}>
                            BNT’s big data algorithms embedded support larger adaptations of lending and payments in new systems.
                            We provide data designing, data modelling, data warehousing specifically strategized as per our customer needs.
                            We also provide data storage and management, tracking and reporting of key inputs generated through our expert data analysts, their tools and techniques.
                        </Typography>
                    </Box>

                </Box>
            </Stack>

            <Box sx={{ margin: { sm: '10px 0px 100px 0px', xs: '20px' }, marginTop: { sm: '50px', xs: '50px' }, display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, alignItems: 'center', justifyContent: 'center', gap: '30px' }}>
                {BigDataDetails.map(item => (<>
                    <Box data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0" data-aos-duration="800">
                        <Box className={stylesPayment.mobile_card} >
                            <Box className={stylesPayment.mobile__card_logo}>{item.logo}</Box>
                            <h3>{item.title}</h3>
                            <p>{item.desc}.</p>
                        </Box>
                    </Box>
                </>))}
            </Box>

            {/* API development */}


            <Stack direction={{ sm: "row", xs: 'column-reverse', height: { sm: 'auto', xs: 'auto' } }} >

                <Box sx={{ width: { sm: '60%', xs: '100%' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box padding={{ sm: '30px', xs: '15px' }} sx={{ backgroundColor: '#fcfcfc', borderRadius: '10px' }}>
                        <Typography data-aos="fade-left" data-aos-once="false" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: { sm: '18px', xs: '15px' } }}>
                            <span style={{ fontSize: '21px', color: '#1e8be1' }}> API development </span> is integral to financial institutions. API fosters innovation by building new products on the core platforms. It leads to integration of new services and facilities without changing the core.
                        </Typography>
                        <Typography data-aos="fade-left" data-aos-once="false" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', marginTop: '20px', fontSize: { sm: '18px', xs: '15px' } }}>
                            Experienced and specialized in API development, we at BNT develop API’s that are reliable and easy to integrate.
                            Following agile methodology, our API’s are built with suitability of streamlining processes, ease of doing
                            business and automating task which makes work simpler and effective.
                        </Typography>
                        <Typography data-aos="fade-left" data-aos-once="false" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', marginTop: '20px', fontSize: { sm: '18px', xs: '15px' } }}>
                            Keeping innovation at the front seat, we at BNT transform your financial journey with our
                            relentless, custom and latest slant of API development. Our experienced professionals use
                            latest technological wiles empowering Organizations with revolutionary API’s for building
                            cutting-edge products and services.
                        </Typography>
                        <Typography data-aos="fade-left" data-aos-once="false" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', marginTop: '20px', fontSize: { sm: '18px', xs: '15px' } }}>
                            As Organizations looking to harness added benefits with API, BNT assures: a substantial model, augmented
                            customer experiences and secure and fastened API approach as per your business need.
                        </Typography>
                    </Box>

                </Box>
                <Box className={style.APIdevBG} sx={{ position: 'relative', width: { sm: '40%', xs: '100%' }, display: 'grid', placeItems: 'center', height: { sm: 'auto', xs: '200px' } }}>
                    <Typography sx={{ fontFamily: 'Alexandria', fontWeight: '500', color: '#fff', fontSize: { sm: '70px', xs: '40px' }, textAlign: 'center', lineHeight: '70px' }}>
                        API <br></br>Development
                    </Typography>
                </Box>
            </Stack>

            <Box sx={{ margin: { sm: '10px 0px 100px 0px', xs: '20px' }, marginTop: { sm: '50px', xs: '50px' }, display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, alignItems: 'center', justifyContent: 'center', gap: '30px' }}>
                {APIDevelopmentDetails.map(item => (<>
                    <Box data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0" data-aos-duration="800">
                        <Box className={stylesPayment.mobile_card} >
                            <Box className={stylesPayment.mobile__card_logo}>{item.logo}</Box>
                            <h3>{item.title}</h3>
                            <p>{item.desc}.</p>
                        </Box>
                    </Box>
                </>))}
            </Box>

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



        </>
    )
}

export default Blockchain