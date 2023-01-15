import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from '../styles/services.module.css'

const Services = ({section, title, desc}) => {

    return (
        <>
            <Box className={`${styles.box} ${styles[section]}`}>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%',float:(section==='section2' || section==='section4')?'left':'right' }}  >
                    <Box data-aos="zoom-out-up" sx={{width:"700px", paddingLeft:(section==='section2' || section==='section4')?'80px':''}} >
                        <Typography style={{ fontFamily: 'Alexandria', fontWeight: '500', color: '#fff', fontSize: '40px' }}>{title}</Typography>
                        <Typography style={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#fff', fontSize: '22px', borderLeft: '3px solid #1e8be1', paddingLeft: '20px',paddingRight: '20px' }}>{desc}</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Services