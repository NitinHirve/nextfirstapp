import React from 'react'
import SwiperPhotos from './SwiperPhotos'
import { Box, Typography, useMediaQuery } from '@mui/material'
import Link from 'next/link'
import style from '../.././styles/aboutus/lifeatbnt.module.css';



const LifeAtBNT = () => {

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));


    return (
        <>
            <Box className={style.myBG} sx={{ height: { sm: '500px', xs: 'auto' } }}>
                <Box sx={{ height: '100%', maxWidth: { sm: '800px', xs: '100%' }, marginLeft: { sm: '80px', xs: '20px' }, paddingTop: { sm: '110px', xs: '40px' } }}>
                    <Box sx={{ height: { xs: '100px', sm: '180px' }, display: 'flex', justifyContent: 'left' }} >
                        <Box  >
                            <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, textAlign: 'center', fontSize: { xs: '32px', sm: '110px' }, letterSpacing: { xs: '9px' }, color: '#e8e8e8' }}>OUR</Typography>
                            </Box>
                            <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: { xs: '41px', sm: '55px' }, marginTop: { xs: '-33px', sm: '-80px' } }}>Culture</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: { sm: '21px', xs: '18px' }, color: '#fff', padding: { sm: 0, xs: '10px' }, marginTop: '40px' }}>
                        <span style={{ color: '#1e8be1', fontSize: '26px' }}>Our </span> 
                         passionate tech folks are always striving to deliver the best. With the aim of simplifying the complex, we constantly challenge ourselves to adapt and evolve. We believe challenges drive innovative solutions and collaboration leads to excellence.
                    </Typography>
                </Box>
            </Box>


            <Box sx={{ height: {xs:'100px',sm:'180px'}, display: 'flex',justifyContent: 'center',margin:'40px 0 40px 0'}} >
                <Box  >
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300,textAlign:'center', fontSize: { xs: '32px', sm: '110px' }, letterSpacing:{xs:'9px'} , color: '#e8e8e8' }}>OUR</Typography>
                    </Box>
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: { xs: '41px', sm: '57px' }, marginTop: { xs: '-33px', sm: '-80px' } }}>People</Typography>
                    </Box>
                </Box>
            </Box>

            {/* <Box sx={{ height: '200px' }}></Box> */}
            <Box>
                <Box sx={{ width: '100%', height: { sm: '250px', xs: 'auto' }, display: 'flex', flexWrap: 'wrap' }}>
                    <Box className={style.photoGridImgBack} sx={{ width: { sm: '25%', xs: '50%' }, height: { sm: '100%', xs: '170px' } }}>
                        <img style={{ width: '100%', height: '100%' }} src="/aboutus/lifeatBnt/images/boysBNTmin.webp" ></img>
                    </Box>
                    <Box sx={{ width: { sm: '25%', xs: '50%' }, height: { sm: '100%', xs: '170px' }, backgroundColor: '#1e8be1', padding: { sm: '40px', xs: '10px' } }}>
                        <Typography sx={{ fontFamily: 'Alexandria', fontSize: { sm: '15px', xs: '12px' }, color: '#fff', fontWeight: 400 }}>
                            We envision revolutionizing the payment solutions industry by delivering customized solutions that meet the unique needs of businesses worldwide.
                        </Typography>
                    </Box>
                    <Box className={style.photoGridImgBack} sx={{ width: { sm: '50%', xs: '100%' }, height: { sm: '100%', xs: '170px' }, backgroundImage: 'url(/aboutus/lifeatBnt/images/pawanaback4Min.webp)' }}></Box>
                </Box>
                <Box sx={{ width: '100%', height: { sm: '250px', xs: 'auto' }, display: 'flex', flexWrap: 'wrap' }}>
                    <Box sx={{ width: { sm: '25%', xs: '50%' }, height: { sm: '100%', xs: '170px' }, backgroundColor: '#f7f7f7',  padding: { sm: '40px', xs: '10px' }}}>
                        <Typography sx={{ fontFamily: 'Alexandria', fontSize: { sm: '17px', xs: '13px' }, color: 'black', fontWeight: 400 }}>
                            We believe in fostering strong partnerships with our clients as technology and product agnostics.
                        </Typography>
                    </Box>
                    <Box className={style.photoGridImgBack} sx={{ width: { sm: '25%', xs: '50%' },height: { sm: '100%', xs: '170px' }, backgroundImage: 'url(/aboutus/lifeatBnt/images/girlsBNTmin.webp)' }}></Box>
                    <Box sx={{ width: { sm: '25%', xs: '50%' }, backgroundColor: '#f7f7f7', padding: '40px',height: { sm: '100%', xs: '170px' },padding: { sm: '40px', xs: '10px' } }}>
                        <Typography sx={{ fontFamily: 'Alexandria', fontSize: { sm: '17px', xs: '13px' }, color: 'black', fontWeight: 400 }}>
                            We believe in fostering strong partnerships with our clients as technology
                        </Typography>
                    </Box>
                    <Box className={style.photoGridImgBack} sx={{ width: { sm: '25%', xs: '50%' },height: { sm: '100%', xs: '170px' }, backgroundImage: 'url(/aboutus/lifeatBnt/images/pawanaBornfire2Min.webp)' }}></Box>

                </Box>
                <Box sx={{ width: '100%', height: { sm: '250px', xs: '300px' }, display: 'flex', flexWrap: 'wrap' }}>
                    <Box className={style.photoGridImgBack} sx={{ width: { sm: '50%', xs: '100%' }, height: { sm: '100%', xs: '170px' }, backgroundImage: 'url(/aboutus/lifeatBnt/images/groupBNT.webp)' }}></Box>
                    <Box className={style.photoGridImgBack} sx={{ width: { sm: '25%', xs: '50%' },height: { sm: '100%', xs: '170px' }, backgroundImage: 'url(/aboutus/lifeatBnt/images/lastBmin.webp)' }}></Box>

                    <Box sx={{ width: { sm: '25%', xs: '50%' },height: { sm: '100%', xs: '170px' }, backgroundColor: '#1e8be1', padding: { sm: '40px', xs: '10px' } }}>
                        <Typography sx={{ fontFamily: 'Alexandria', fontSize: { sm: '17px', xs: '14px' }, color: '#fff', fontWeight: 400 }}>
                            We envision revolutionizing the payment solutions industry by delivering customized solutions.
                        </Typography>
                    </Box>
                </Box>
            </Box>



            <Box sx={{ height: { xs: '55px', sm: '130px' }, marginTop: '50px', display: 'flex', justifyContent: 'center' }} >
                <Box  >
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, textAlign: 'center', fontSize: { xs: '32px', sm: '74px' }, letterSpacing: { xs: '9px' }, color: '#1e8be1' }}>Life at BNT</Typography>
                    </Box>
                    {/* <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: { xs: '41px', sm: '55px' }, marginTop: { xs: '-33px', sm: '-80px' } }}>BNT</Typography>
                    </Box> */}
                </Box>
            </Box>
            <SwiperPhotos />

            <Box sx={{ height: '190px' }}>
        <Box sx={{ width: '100vw', height: '100%', marginTop: '150px', display: 'flex' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '60%', backgroundColor: '#7e16f5', clipPath: 'polygon(0% 0%, 55% 0%,80% 45%,80% 65%, 92% 100%, 0% 100%)' }}>
            {!isMobile && <Typography sx={{ marginLeft: { sm: '200px', xs: '20px' }, lineHeight: '32px', fontFamily: 'Alexandria', color: 'white', fontSize: { sm: '30px', xs: '19px' } }}>Unlock Your Potential<br></br> &nbsp;&nbsp; and Conquer Together!</Typography>}
            {isMobile && <Typography sx={{ marginLeft: { sm: '200px', xs: '20px' }, lineHeight: '32px', fontFamily: 'Alexandria', color: 'white', fontSize: { sm: '30px', xs: '19px' } }}>Unlock Your <br></br> Potential and <br></br> Conquer <br></br> Together!</Typography> }
          </Box>
        </Box>
        <Box sx={{ marginTop: '-191px', width: '100vw', height: '100%', display: 'flex', justifyContent: 'end' }}>
          <Box className={style.joinUs} sx={{ display: 'grid', placeContent: 'center', width: '63%', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%,33% 100%,20% 62%,20% 39%)' }}>
            <Link href={'/career'}>
              <Box sx={{ cursor: 'pointer', fontFamily: 'Alexandria', display: 'grid', placeContent: 'center', color: 'white', height: { sm: '40px', xs: '33px' }, width: { sm: '158px', xs: '100px' }, background: ' linear-gradient(90deg, rgba(126,22,245,1) 0%, rgba(192,144,247,1) 71%)', marginLeft: { sm: 0, xs: '53px' } }}>
                Join Us
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>

        </>
    )
}

export default LifeAtBNT