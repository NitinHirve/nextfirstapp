import React from 'react'
import SwiperPhotos from './SwiperPhotos'
import { Box, Typography } from '@mui/material'
import style from '../.././styles/aboutus/lifeatbnt.module.css';


const LifeAtBNT = () => {
    return (
        <>
            <Box className={style.myBG} sx={{ height: { sm: '500px', xs: 'auto' } }}>
                <Box sx={{ height: '100%', maxWidth: { sm: '800px', xs: '100%' }, marginLeft: { sm: '80px', xs: '20px' }, paddingTop: { sm: '110px', xs: '40px' } }}>
                    {/* <Typography sx={{ fontFamily: 'Alexandria', padding: 0, margin: '0!important', color: 'white', fontSize: '40px', fontWeight: 600, lineHeight: { xs: '45px', sm: 1.5 } }}>
                        Let’s Grow Together And Join Us To<br></br> Spread The Power Of Technology!
                    </Typography> */}
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
                        <span style={{ color: '#1e8be1', fontSize: '26px' }}>We</span> are a family of tech folks always striving for the next best thing. We value collaboration, inclusion, and excellence. With the aim of simplifying complex problems, we constantly challenge ourselves to adapt and evolve.
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
                        <img style={{ width: '100%', height: '100%' }} src="/aboutus/lifeatBnt/images/img1.jpg" ></img>
                    </Box>
                    <Box sx={{ width: { sm: '25%', xs: '50%' }, height: { sm: '100%', xs: '170px' }, backgroundColor: '#1e8be1', padding: { sm: '40px', xs: '10px' } }}>
                        <Typography sx={{ fontFamily: 'Alexandria', fontSize: { sm: '15px', xs: '12px' }, color: '#fff', fontWeight: 400 }}>
                            "We envision revolutionizing the payment solutions industry by delivering customized solutions that meet the unique needs of businesses worldwide."
                        </Typography>
                    </Box>
                    <Box className={style.photoGridImgBack} sx={{ width: { sm: '50%', xs: '100%' }, height: { sm: '100%', xs: '170px' }, backgroundImage: 'url(/aboutus/lifeatBnt/images/img3.jpg)' }}></Box>
                </Box>
                <Box sx={{ width: '100%', height: { sm: '250px', xs: 'auto' }, display: 'flex', flexWrap: 'wrap' }}>
                    <Box sx={{ width: { sm: '25%', xs: '50%' }, height: { sm: '100%', xs: '170px' }, backgroundColor: '#f7f7f7',  padding: { sm: '40px', xs: '10px' }}}>
                        <Typography sx={{ fontFamily: 'Alexandria', fontSize: { sm: '17px', xs: '13px' }, color: 'black', fontWeight: 400 }}>
                            "We believe in fostering strong partnerships with our clients as technology and product agnostics."
                        </Typography>
                    </Box>
                    <Box className={style.photoGridImgBack} sx={{ width: { sm: '25%', xs: '50%' },height: { sm: '100%', xs: '170px' }, backgroundImage: 'url(/aboutus/lifeatBnt/images/img5.jpg)' }}></Box>
                    <Box sx={{ width: { sm: '25%', xs: '50%' }, backgroundColor: '#f7f7f7', padding: '40px',height: { sm: '100%', xs: '170px' },padding: { sm: '40px', xs: '10px' } }}>
                        <Typography sx={{ fontFamily: 'Alexandria', fontSize: { sm: '17px', xs: '13px' }, color: 'black', fontWeight: 400 }}>
                            "We believe in fostering strong partnerships with our clients as technology"
                        </Typography>
                    </Box>
                    <Box className={style.photoGridImgBack} sx={{ width: { sm: '25%', xs: '50%' },height: { sm: '100%', xs: '170px' }, backgroundImage: 'url(/aboutus/lifeatBnt/images/img7.jpg)' }}></Box>

                </Box>
                <Box sx={{ width: '100%', height: { sm: '250px', xs: '300px' }, display: 'flex', flexWrap: 'wrap' }}>
                    <Box className={style.photoGridImgBack} sx={{ width: { sm: '50%', xs: '100%' }, height: { sm: '100%', xs: '170px' }, backgroundImage: 'url(/aboutus/lifeatBnt/images/img8.jpg)' }}></Box>
                    <Box className={style.photoGridImgBack} sx={{ width: { sm: '25%', xs: '50%' },height: { sm: '100%', xs: '170px' }, backgroundImage: 'url(/aboutus/lifeatBnt/images/img9.jpg)' }}></Box>

                    <Box sx={{ width: { sm: '25%', xs: '50%' },height: { sm: '100%', xs: '170px' }, backgroundColor: '#1e8be1', padding: { sm: '40px', xs: '10px' } }}>
                        <Typography sx={{ fontFamily: 'Alexandria', fontSize: { sm: '17px', xs: '14px' }, color: '#fff', fontWeight: 400 }}>
                            "We envision revolutionizing the payment solutions industry by delivering customized solutions."
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
            {/* <Box sx={{ height: '200px' }}></Box> */}

        </>
    )
}

export default LifeAtBNT