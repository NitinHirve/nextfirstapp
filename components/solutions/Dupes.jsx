import React from 'react'
import { Stack, Box, styled, Typography } from '@mui/material';
import styles from '../../styles/solutions/dupes.module.css'




const Dupes = () => {
    return (
        <>
            {/* <div className={styles.dupesBackground}>
               Hii
               my name is Nitin
            </div> */}
            <Stack direction="row" >
                <Box sx={{ position: 'relative', width: '40%', height: '595px' }}>
                    <Box data-aos="zoom-out" sx={{ position: 'relative', top: '95px' }}>
                        <img style={{ width: '650px' }} src="/solutions/Dupes/blobdupes.svg" ></img>
                        {/* <img style={{ width: '650px' }} src="/solutions/Dupes/dot-hori.svg" ></img> */}
                        <Box sx={{ marginTop: '-50px', position: 'absolute', top: 165, left: 140 }} >
                            <Box data-aos="fade-right">
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 200, fontSize: '50px', color: '#fff' }}>Dupes</Typography>
                            </Box>
                            <Box data-aos="fade-left">
                                <Typography sx={{ fontFamily: 'Alexandria', marginLeft: '20px', fontWeight: 300, color: '#fff', textAlign: 'center', fontSize: '5vw', marginTop: '-40px' }}>Preventer</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box style={{ width: '60%', height: '595px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box style={{ backgroundColor: '#fcfcfc', borderRadius: '10px', width: '95%', height: '80%', padding: '30px' }}>
                        <Typography data-aos="fade-left" data-aos-once="false" data-aos-delay="500" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: '18px' }}>
                            <span style={{ fontSize: '30px', color: '#1e8be1' }}>DupesPreventer</span>   is the perfect solution for the problem of duplicity. Designed to detect duplicates of standard objects
                            like accounts, contact, lead, lead to account, lead to contact, and vice versa arising from prospect entries,
                            web-to-lead or integrated systems. With the help of this Application any duplicate entry can be blocked or
                            reported based on yourrequirement.
                        </Typography>
                        <Typography data-aos="fade-left" data-aos-once="false" data-aos-delay="1000" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: '18px', marginTop: '20px' }}>
                            It can detect duplicates to Accounts, Contacts, Leads, along with, “Lead to Contact” and “Lead to Account” and VICEVERSA. It’s a two way
                            Duplicate checker which gives the application a distinctive characteristic.
                        </Typography>
                        <Typography data-aos="fade-left" data-aos-once="false" data-aos-delay="1500" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: '18px', marginTop: '20px' }}>
                            DupesPreventer allows to either block the duplicates completely or just allow the duplicates enter the system
                            and generate warnings for those. Duplicates to Accounts, Contacts and Leads can all be detected with this
                            product and it also allows cross object deduplication like lead to contact and lead to account.
                            This application supports for all standard fields as well as custom fields
                        </Typography>
                    </Box>

                </Box>
            </Stack>

            <Box data-aos="zoom-out" className={styles.configBox} style={{ height: '350px' }}>
                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#fff', textAlign: 'center', fontSize: '5vw', paddingTop: '50px' }}>CONFIGPAY</Typography>
                <Box sx={{ padding: "0px 160px 0 160px" }} >
                    <Typography data-aos="fade-up" data-aos-once="false" sx={{ textAlign: 'center', fontFamily: 'Alexandria', fontWeight: '300', color: '#fff', fontSize: '20px' }}>
                        ConfigPay, a SAP Hybris Commerce application is an intelligent payment integration tool. A readymade payment gateway
                        platform, the application is designed for easy and convenient integration with other SAP Hybris Commerce
                        platforms. Our payment system provides payment data localization, payment service provider (PSP)
                        integration, and data sync between SAP and Hybris Ecommerce.
                    </Typography>
                </Box>
            </Box>

            {/* COnfigPay */}
            <Box sx={{ padding: "50px" ,backgroundColor:'#fafafa'}}>
                <Box data-aos="flip-down" sx={{ height: '100px', display: 'flex', marginTop: "10px" }}>
                    <Box sx={{ width: "25%", height: '100%', backgroundColor: "#dcedc8" }}>
                        <Box className={styles.configSubHead}  >
                            Reduced Time
                        </Box>
                    </Box>
                    <Box sx={{ width: "75%", height: '100%', backgroundColor: "#388e3c", display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: "100%", borderTopLeftRadius: '15px', height: '100%', padding: '10px', display: 'flex', alignItems: 'center', backgroundColor: "#dcedc8", fontFamily: 'Alexandria', fontWeight: '400', color: '#434544', fontSize: '16px' }}>
                            An efficient payment integration application that is custom made and fit for all SAP Hybris
                            Commerce Platform. The tailor made solution can be integrated in a few steps without
                            consuming long hours. It reduces your time of coding from scratch and provides ready built-in ecommerce solution.
                        </Box>
                    </Box>
                </Box>

                <Box data-aos="flip-down" sx={{ height: '100px', display: 'flex', marginTop: "10px" }}>
                    <Box sx={{ width: "25%", height: '100%', backgroundColor: "#f5f7f6" }}>
                        <Box className={styles.configSubHead} sx={{ backgroundColor: "#004d40!important" }}   >
                            Cost Effective
                        </Box>
                    </Box>
                    <Box sx={{ width: "75%", height: '100%', backgroundColor: "#004d40", display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: "100%", borderTopLeftRadius: '15px', height: '100%', padding: '10px', display: 'flex', alignItems: 'center', backgroundColor: "#e0f2f1", fontFamily: 'Alexandria', fontWeight: '400', color: '#434544', fontSize: '16px' }}>
                            A payment gateway is a basic module while developing an ecommerce platform. As a part of the development process, coding everything from beginning is not only time consuming, but also a costly affair.
                        </Box>
                    </Box>
                </Box>

                <Box data-aos="flip-down" sx={{ height: '100px', display: 'flex', marginTop: "10px" }}>
                    <Box sx={{ width: "25%", height: '100%', backgroundColor: "#f5f7f6" }}>
                        <Box className={styles.configSubHead} sx={{ backgroundColor: "#702b4b!important" }}   >
                            Zero Coding
                        </Box>
                    </Box>
                    <Box sx={{ width: "75%", height: '100%', backgroundColor: "#702b4b", display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: "100%", borderTopLeftRadius: '15px', height: '100%', padding: '10px', display: 'flex', alignItems: 'center', backgroundColor: "#fae8f0", fontFamily: 'Alexandria', fontWeight: '400', color: '#434544', fontSize: '16px' }}>
                            ConfigPay can be appropriately configured with any SAP and Hybris ecommerce platform. Built with the latest technology, the application does not require any extra code. It eliminates all coding hassles.                            </Box>
                    </Box>
                </Box>

                <Box data-aos="flip-down" sx={{ height: '100px', display: 'flex', marginTop: "10px" }}>
                    <Box sx={{ width: "25%", height: '100%', backgroundColor: "#e0f7fa" }}>
                        <Box className={styles.configSubHead} sx={{ backgroundColor: "#00838f!important" }}   >
                            Configuration Based
                        </Box>
                    </Box>
                    <Box sx={{ width: "75%", height: '100%', backgroundColor: "#00838f", display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: "100%", borderTopLeftRadius: '15px', height: '100%', padding: '10px', display: 'flex', alignItems: 'center', backgroundColor: "#e0f7fa", fontFamily: 'Alexandria', fontWeight: '400', color: '#434544', fontSize: '16px' }}>
                            Configpay is an easy configuration based solution. For integrating PSP/Payment gateway, read the guided manner carefully and simply add configuration. No coding is required.                    </Box>
                    </Box>
                </Box>
            </Box>


            {/* REMITTANCE FRAMEWORK */}


            <Box data-aos="fade-down-left" className={styles.remitanceBox} style={{ height: '400px', width: '75%', marginLeft: '150px', marginTop: '250px', position: 'relative', padding: '30px',borderRadius:'10px' }}>
            <Box data-aos="zoom-out">
                <img data-aos="zoom-out" style={{ width: '950px', position: 'absolute', right: '-360px', top: '-270px', transform: 'skew(17deg)' }} src="/solutions/Dupes/blobremi.svg" ></img>
            </Box>
                <Box sx={{ marginTop: '-50px', position: 'absolute', top: 0, right: -70, transform: 'skew(17deg)' }} >
                    <Box data-aos="fade-right">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 200, fontSize: '50px', color: '#fff' }}>Remittance</Typography>
                    </Box>
                    <Box data-aos="fade-left">
                        <Typography sx={{ fontFamily: 'Alexandria', marginLeft: '20px', fontWeight: 300, color: '#fff', textAlign: 'center', fontSize: '5vw', marginTop: '-40px' }}>Framework</Typography>
                    </Box>
                </Box>
                <Typography data-aos="fade-left" data-aos-once="false" data-aos-delay="500" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: '20px', transform: 'skew(17deg)!important',paddingRight:'290px' }}>
                    Remittance Framework is a multi-threaded robust platform, that exposes API’s to create/modify alerts.
                </Typography>
                <Typography data-aos="fade-left" data-aos-once="false" data-aos-delay="500" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: '20px', transform: 'skew(17deg)!important',paddingRight:'300px', marginTop: '20px' }}>
                    The platform Notifx is a BNT developed application that supports real-time monitoring and notifications.
                </Typography>
                <Typography data-aos="fade-left" data-aos-once="false" data-aos-delay="1000" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: '20px', transform: 'skew(17deg)!important',paddingRight:'200px', marginTop: '20px' }}>
                    How the notifications are crucial? They can be consumed to create deals and configure emails/sms content.
                </Typography>
                <Typography data-aos="fade-left" data-aos-once="false" data-aos-delay="1000" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: '20px', transform: 'skew(17deg)!important', marginTop: '20px' }}>
                    The preserved data can be used for analytics. It supports frameworks- Quote Agent, Dyna Price and Com (TP Integrator).
                </Typography>
            </Box>




        </>
    )
}

export default Dupes