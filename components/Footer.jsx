import React from 'react'
import styles from '../styles/footer.module.css';
import { Stack, Box, Typography, List, ListItem } from '@mui/material';


const Footer = () => {
    return (
        <>
            <Box sx={{
                minHeight: '400px',
                background: 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url(/home/images/footerImageMin.webp)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                color: 'white',
                display: 'flex',
                alignItems:'center',
            }}>
                <Box sx={{width:'100%',color:'#cccccc'}} >
                    <Stack
                        className={styles.bb} 
                        direction={{ xs: 'column', sm: 'row' }}
                        sx={{width:'100%',justifyContent:{xs:'center',sm:'space-evenly'}}}
                        alignItems='top'
                    >
                        <Box sx={{ maxWidth:{xs:'100%',sm:'300px' },padding:{xs:'20px',sm:'0' },color:'#fff'}}>
                            <Typography >
                                We at <span style={{color:'#bbdefb',fontSize:'20px'}}>BNT- “Bits and Thoughts”</span> have been providing services for more than a decade now.
                                Accelerated with innovative goals, we envision our services with excellent quality.
                                We are committed to high quality performance along with integrity & client satisfaction.
                                Our constant growth and happy loyal clientele is a testament to our constant growth and
                                proven market leadership.
                            </Typography>
                        </Box>
                        <Box sx={{display:'flex',justifyContent:{xs:'center',sm:'space-evenly'}}} > 
                            <List>
                                <ListItem sx={{fontSize:'22px',color:'#fff'}}>Services</ListItem>
                                <ListItem>Payments</ListItem>
                                <ListItem>Retail</ListItem>
                                <ListItem>Fintech Startup</ListItem>
                                <ListItem>Salesforce</ListItem>
                                <ListItem>Certifications</ListItem>
                            </List>
                        </Box>
                        <Box sx={{display:'flex',justifyContent:{xs:'center',sm:'space-evenly'}}}>
                            <List>
                                <ListItem sx={{fontSize:'22px',color:'#fff'}}>Solutions</ListItem>
                                <ListItem >Dupes Preventer</ListItem>
                                <ListItem >Configpay</ListItem>
                                <ListItem>Remittance Framework</ListItem>
                                <ListItem></ListItem>
                                <ListItem></ListItem>
                            </List>
                        </Box>
                        <Box sx={{display:'flex',justifyContent:{xs:'center',sm:'space-evenly'}}}>
                            <List>
                                <ListItem sx={{fontSize:'22px',color:'#fff'}}>New Technologies</ListItem>
                                <ListItem>BlockChain</ListItem>
                                <ListItem>Big Data</ListItem>
                                <ListItem>API Development</ListItem>
                            </List>
                        </Box>

                    </Stack>
                </Box>
            </Box>

            <style jsx>
          {`

           

          `}
        </style>
        </>
    )
}

export default Footer