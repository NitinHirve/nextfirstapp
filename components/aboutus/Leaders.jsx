import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import styles from '../../styles/aboutus/aboutus.module.css'


const leadersDetail = [
  {
    name: 'Shekhar Khakurdikar',
    desgn: 'CTO & Co-Founder',
    profilePic: 'leader1'
  },
  {
    name: 'Sachin Gurav',
    desgn: 'CEO & Co-Founder',
    profilePic: 'leader2'
  },
  {
    name: 'Nilesh Varma',
    desgn: 'VP-Payment & Co-Founder',
    profilePic: 'leader3'
  },
  {
    name: 'Gitanjali Mudaliar',
    desgn: 'HR Manager',
    profilePic: 'leader4'
  },
  {
    name: 'Girish Shahpurkar',
    desgn: 'CFO',
    profilePic: 'leader1'
  },
  {
    name: 'Rajagopalan Nelliyodan',
    desgn: 'Operations Head',
    profilePic: 'leader2'
  },
  {
    name: 'Bhavik Vasa',
    desgn: 'Executive Director',
    profilePic: 'leader1'
  },
  {
    name: 'David True',
    desgn: 'Advisory Board',
    profilePic: 'leader2'
  },
  {
    name: 'Arcady Lapiro',
    desgn: 'Advisory Board',
    profilePic: 'leader3'
  }
]

const Leaders = () => {
  return (
    <>
      <Box sx={{ height: { xs: '100px', sm: '180px' }, marginTop: '50px', display: 'flex', justifyContent: 'center' }} >
        <Box  >
          <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
            <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, textAlign: 'center', fontSize: { xs: '32px', sm: '110px' }, letterSpacing: '20px', color: '#e8e8e8' }}>OUR</Typography>
          </Box>
          <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
            <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: { xs: '41px', sm: '55px' }, marginTop: { xs: '-33px', sm: '-80px' } }}>Professionals</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ width: '100vw', display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <Box sx={{ width: { xs: '75%', sm: '65%' } }}>
          <Grid container spacing={6} sx={{ height: '100%' }} >
            {leadersDetail.map((leader, index) => (<>
              <Grid

                item xs={12} sm={6} md={4}
              // data-aos={
              //   ((index == 0 || index == 3 || index == 6) && 'zoom-out-right') ||
              //   ((index == 1 || index == 4 || index == 7) && 'zoom-out') ||
              //   ((index == 2 || index == 5 || index == 8) && 'zoom-out-left')
              // }
              >
                <Box className={styles.leaders} sx={{ height: { xs: '340px', sm: '310px', backgroundImage: `url(/aboutus/images/leaders/${leader.profilePic}.jpg)` } }}></Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '35px' }}>
                  <p style={{ margin: 0, padding: 0, fontFamily: 'Alexandria', fontSize: '11px', color: '#6f6675' }}>{leader.desgn}</p>
                  <Typography sx={{ fontFamily: 'Alexandria', padding: 0, margin: '0!important' }}>{leader.name}</Typography>
                </Box>
              </Grid>
            </>))}
          </Grid>
        </Box>

      </Box>

      <Box sx={{ width: '100vw', height: '190px', marginTop: '150px', display: 'flex' }}>
        <Box sx={{ display:'flex',alignItems:'center', width: '60%', backgroundColor: '#7e16f5', clipPath: 'polygon(0% 0%, 55% 0%,80% 45%,80% 65%, 92% 100%, 0% 100%)' }}>
          <Typography sx={{marginLeft:'200px',lineHeight:'32px', fontFamily: 'Alexandria', color: 'white', fontSize: '30px' }}>Unlock Your Potential<br></br> &nbsp;&nbsp; and Conquer Together!</Typography>
        </Box>
      </Box>
      <Box sx={{ marginTop: '-191px', width: '100vw', height: '190px', display: 'flex', justifyContent: 'end' }}>
        <Box className={styles.joinUs} sx={{ display:'grid',placeContent:'center', width: '63%', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%,33% 100%,20% 62%,20% 39%)' }}>
           <Box sx={{cursor: 'pointer',fontFamily: 'Alexandria',display:'grid',placeContent:'center',color:'white',height:'40px',width:'158px',background:' linear-gradient(90deg, rgba(126,22,245,1) 0%, rgba(192,144,247,1) 71%)'}}>Join Us</Box>
         </Box>
      </Box>



      {/* <Box sx={{ height: '300px' }}></Box> */}
    </>

  )
}

export default Leaders