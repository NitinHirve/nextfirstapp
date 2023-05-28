import React from 'react'
import { Slide, useScrollTrigger } from '@mui/material';
import PropTypes from 'prop-types';
import Link from 'next/link'
import styles from '../styles/bntnavbar.module.css';
import { useRouter } from "next/router";



function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    HideOnScroll.propTypes = {
        children: PropTypes.element.isRequired,
    };

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Navbar2 = (props) => {

    const router = useRouter();


    const { window } = props;
    return (
        <>
            <HideOnScroll {...props} >

                <nav className={styles.navbar}>
                    <a href="#" className={styles.navbarlogo}>
                        <img src="https://bnt-soft.com/wp-content/uploads/2020/05/logoheader.png" alt="BnT Soft" style={{ height: "35px" }} />

                    </a>
                    <ul className={styles.navbarlinks} style={{ width: '59vw', marginLeft: '165px', display: 'flex', justifyContent: 'space-between' }}>
                        <li className={ `${styles.navbardropdown} `}>
                            <Link className={`${router.asPath == '/'? styles.navActive : ''}`} href={'/'}>Home</Link>

                        </li>
                        <li className={styles.navbardropdown}>
                            <Link className={`${router.asPath.includes('/aboutus')? styles.navActive : ''}`} href=''>About Us</Link>
                            <div className={styles.dropdown}>
                                <Link href={'/aboutus/aboutus'}>About BNT</Link>
                                <Link href={'/aboutus/lifeatBNT'}>Life at BNT</Link>
                            </div>
                        </li>
                        <li className={styles.navbardropdown}>
                            <a className={`${router.asPath.includes('/services')? styles.navActive : ''}`} href="#">Services</a>
                            <div className={styles.dropdown}>
                                <Link href={'/services/payments'}>Payments</Link>
                                <Link href={'/services/retail'}>Retail</Link>
                                <Link href={'/services/fintech'}>Fintech Startup</Link>
                                <Link href={'/services/subservices'}>Custom</Link>
                                <Link href={'/services/newtechnologies'}>New Technologies</Link>
                            </div>
                        </li>
                        <li className={styles.navbardropdown}>
                            <Link className={`${router.asPath == '/solutions'? styles.navActive : ''}`}  href={'/solutions'}>Solutions</Link>
                        </li>
                        <li className={styles.navbardropdown}>
                            <Link className={`${router.asPath == '/blogs'? styles.navActive : ''}`} href={'/blogs'}>Blogs</Link>
                        </li>
                        <li className={styles.navbardropdown}>
                            <Link className={`${router.asPath == '/career'? styles.navActive : ''}`}  href={'/career'}>Career</Link>
                        </li>
                        <li className={styles.navbardropdown}>
                            <Link className={`${router.asPath == '/buildwithus'? styles.navActive : ''}`} href={'/buildwithus'}>Build With Us</Link>
                        </li>
                    </ul>
                </nav>
            </HideOnScroll>
            {/* <header className="header">
                <div className="header-inner">
                    <h1>Food House</h1>
                    <form>
                        <input type="search" placeholder="Enter Your Location" />
                        <div className="overlay"></div>
                    </form>
                </div>
            </header> */}

            <style jsx>
                {`

`}
            </style>
        </>
    )
}

export default Navbar2