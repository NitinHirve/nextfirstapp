import React from 'react'
import BlogDetails from '../../components/blogs/BlogDetails'
import { useRouter } from 'next/router';

const Blogdetails = () => {

    const router = useRouter()
    const cardDetail = router.query
    console.log("Card Details : ", cardDetail)

    return (
        <>
            <BlogDetails blogDetail={cardDetail} />
        </>
    )
}

export default Blogdetails