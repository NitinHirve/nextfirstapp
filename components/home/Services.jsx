import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from '../../styles/home/services.module.css'

const Services = ({section, title, desc}) => {

    return (
        <>
            <Box className={`${styles.box} ${styles[section]}`}>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%',float:{sm:(section==='section2' || section==='section4')?'left':'right', xs:'left'} }}  >
                    <Box data-aos="zoom-out-up" sx={{width:{sm:'700px',xs:'auto'}, paddingLeft:{sm:(section==='section2' || section==='section4')?'80px':'', xs:'40px'}}} >
                        <Typography fontSize= {{sm:'40px',xs:'35px'}} style={{ fontFamily: 'Alexandria', fontWeight: '500', color:(section==='section3' || section==='section4')?'#fff':'#424242', ...(section==='section1' &&  {color:{xs:'#424242',sm:'white'}})}}>{title}</Typography>
                        <Typography fontSize= {{sm:'22px',xs:'18px'}} style={{ fontFamily: 'Alexandria', fontWeight: '300', color:(section==='section3' || section==='section4')?'#fff':'#212121'  , borderLeft: '3px solid #1e8be1', paddingLeft: '20px',paddingRight: '20px' }}>{desc}</Typography>
                    </Box>
                </Box>
            </Box>                                                              
        </>
    )
}

export default Services