import React from 'react'
import styles from '../styles/footer.module.css';
import { Stack, Box, Typography, List, ListItem } from '@mui/material';
import Link from 'next/link';


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
                                <ListItem sx={{fontSize:'20px!important',color:'#fff'}}>Services</ListItem>
                                <Link href={'/services/payments'}><ListItem>Payments</ListItem></Link>
                                <Link href={'/services/retail'}><ListItem>Retail</ListItem></Link>
                                <Link href={'/services/fintech'}><ListItem>Fintech Startup</ListItem></Link>
                                <Link href={'/services/subservices#targetDivSalesforce'}><ListItem>Salesforce</ListItem></Link>
                                <Link href={'/services/subservices#targetDivCerifications  '}><ListItem>Certifications</ListItem></Link>
                            </List>
                        </Box>
                        <Box sx={{display:'flex',justifyContent:{xs:'center',sm:'space-evenly'}}}>
                            <List>
                                <ListItem sx={{fontSize:'20px!important',color:'#fff'}}>Solutions</ListItem>
                                <Link href={'/solutions#targetDivDupesPreventer'}><ListItem>Dupes Preventer</ListItem></Link>
                                <Link href={'/solutions#targetDivConfigPay'}><ListItem>Configpay</ListItem></Link>
                                <Link href={'/solutions#targetDivRemittanceFramework'}><ListItem>Remittance Framework</ListItem></Link>
                                <ListItem sx={{fontSize:'20px!important',color:'#fff'}}>New Technologies</ListItem>
                                <Link href={'/services/newtechnologies#targetDivBlockchain'}><ListItem>BlockChain</ListItem></Link>
                                <Link href={'/services/newtechnologies#targetDivAI'}><ListItem>Artificial Intelligence</ListItem></Link>
                                <Link href={'/services/newtechnologies#targetDivBigData'}><ListItem>Big Data</ListItem></Link>
                                <Link href={'/services/newtechnologies#targetDivAPIDevelopment'}><ListItem>API Development</ListItem></Link>
                            </List>
                        </Box>
                        <Box sx={{display:'flex',justifyContent:{xs:'center',sm:'space-evenly'}}}>
                            <List>
                                <ListItem sx={{fontSize:'20px!important',color:'#fff'}}>New Technologies</ListItem>
                                <Link href={'/services/newtechnologies#targetDivBlockchain'}><ListItem>BlockChain</ListItem></Link>
                                <Link href={'/services/newtechnologies#targetDivAI'}><ListItem>Artificial Intelligence</ListItem></Link>
                                <Link href={'/services/newtechnologies#targetDivBigData'}><ListItem>Big Data</ListItem></Link>
                                <Link href={'/services/newtechnologies#targetDivAPIDevelopment'}><ListItem>API Development</ListItem></Link>
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