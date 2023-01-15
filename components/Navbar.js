import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <nav style={{ width: '100vw', height: '80px', display: 'grid', placeItems: 'center' }}>
                <ul style={{ listStyle: "none", borderRadius: '20px', width: '500px', height: '40px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'purple' }}>
                    <Link href="/home">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/products">Products</Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar