import { Box, Typography } from '@mui/material'
import React from 'react'
import style from '../../styles/home/services.module.css'
import Services from './Services'

const desc = [
    'Modernizing digital-payments experiences orchestrated with seamless integrations for improved payment experiences',
    'Disrupting the retail-payment systems; harnessing technology and domain expertise to drive innovation',
    'Developing and Delivering sustained digital transformations with a contemporary outlook even for the traditional financial solutions',
    'Building agile and next-gen payment solutions- leveraged by technology and experienced resources. All in the payment domain from ideation to growth',

]

const HomeServices = () => {
    return (
        <>
            <Services section={'section1'} title ={'Payments'} desc={desc[0]} />
            <Services section={'section2'} title ={'Retail'} desc={desc[2]} />
            <Services section={'section3'} title ={'Financial Institution '} desc={desc[3]} />
            <Services section={'section4'} title ={'Fintech Start-Ups'} desc={desc[1]} />


        </>
    )
}

export default HomeServices