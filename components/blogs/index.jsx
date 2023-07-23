import React from 'react';
import { Box, Stack, styled, Typography, Grid } from '@mui/material';
import styles from '../../styles/blogs/blogs.module.css'
import BlogCard from './BlogCard'


const cardDetails = [
    {
        heading: 'Top Payment Trends 2023',
        desc: 'The digital payment industry is witnessing rapid growth. In 2021, it was estimated that the worldwide digital payments market generated around $88.1 billion in revenue. However, it is projected to grow to approximately $180.2 billion by the end of 2026',
        image: 'topPayments23'
    },
    {
        heading: 'Story of Usha Waghmare',
        desc: 'This Mother’s Day we thought of bringing to you an aspiring story of a woman and a mother who has had challenges and yet kept going to become someone for herself and her children.',
        image: 'mothersdayBlog-min'
    },
    {
        heading: '5 Areas AI is affecting',
        desc: 'The evolution of technology has made our life much easier and fast.',
        image: 'aiBlog-min'
    },
    {
        heading: 'How Fintech Is Rattling',
        desc: 'For a time being, consumers have accepted the lack of technology found at traditional banks. But with fintech on the ridge, banks are toiling to keep up and offer customers the innovation they crave.',
        image: 'fintechBankingBlog-min'
    },
    {
        heading: 'Womens Day',
        desc: 'More Power and Strength to the Courageous Women- Happy Women’s Day.Being a woman there are many roles and responsibilities to fulfill.',
        image: 'womensDayBlog-min'
    },
    {
        heading: '5 reasons why e-Wallets are safe for your customers',
        desc: 'The traditional methods of payment have witnessed a huge transformation.',
        image: 'ewalletBlog-min'
    },
    {
        heading: 'Top Payment Trends 2021',
        desc: 'The traditional methods of payment have witnessed a huge transformation.',
        image: 'topPaymentsBlog-min'
    },
    {
        heading: 'Blockchain Revolution or Evolution?',
        desc: 'Blockchain technology seems to be a complicated concept associated with cryptocurrency Bitcoin.',
        image: 'blockchainBlog-min'
    },
    {
        heading: 'Fostering Innovation and Competition',
        desc: 'With recent digital transformations, even banks are moving towards digitizing and innovation.',
        image: 'openBanksBlog-min'
    },
    {
        heading: 'How AI is transforming the Fintech industry',
        desc: 'When we talk about finance, the first thing that pops into our head is ‘information’. More so, it relates to essential and subtle information.',
        image: 'fintechBlog-min'
    },
    {
        heading: 'Does the evolving payment system still require a human touch?',
        desc: 'As times have transcended the core payment process to online, digital transformation has amalgamated payment systems to be digitally flexible.',
        image: 'humanTouchBlog-min'
    },
    {
        heading: 'The New Social Payment Phenomena',
        desc: 'As social distancing is the new wave, A global study suggests that, “79% of respondents are now tapping into contactless payments”.',
        image: 'contactlessPyamentBlog-min'
    }
]



const Blogs = () => {
    return (
        <>
            <Box className={styles.myBG} sx={{ height: '400px', }}>
                <Box >
                    <Typography data-aos="fade-down" style={{ fontFamily: 'Alexandria', fontWeight: '600', color: '#fff', fontSize: '100px', textAlign: 'center' }}>
                        Blogs
                    </Typography>
                    <Typography data-aos="fade-up" sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: '22px', color: '#fff', maxWidth: '900px', textAlign: 'center' }}>
                        Fuelled with technology, expertise, and experiences. Our team offers an effective combination of broad fintech service expertise
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ width: '100vw', display: 'flex', justifyContent: 'center', margin: '100px 0px' }}>
                <Grid container spacing={4} sx={{ width: {sm:'90vw',xs:'100vw'} }}>
                    {cardDetails.map(cardDetail => (<>
                        <Grid item xs={12} sm={6} md={4}>
                            <BlogCard title={cardDetail.heading} cardImage={cardDetail.image} desc={cardDetail.desc} />
                        </Grid>
                    </>))}
                </Grid>
            </Box>
        </>
    )
}

export default Blogs