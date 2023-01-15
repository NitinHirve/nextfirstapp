import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Head from 'next/head'


const Home = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Bnt payment services" />
                <meta name="keywords" content="payments, fintek, Itservices,forex exchange" />
                <meta name="author" content="Nitin Hirve" />
                <title>Home page</title>
            </Head>
            <Navbar />
            <h1><span className="homeSpan">This is my Home page</span></h1>
            <Image width="400" height="250" src="/images/laptop.jpg" alt="abutImg"></Image>
            <Image width="400" height="250" src="https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></Image>
        </>
    )
}

export default Home