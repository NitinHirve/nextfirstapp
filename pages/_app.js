import '../styles/roots.css';
import '../styles/globals.css';
import '../styles/styles.css';

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Head from 'next/head';
import dynamic from 'next/dynamic'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { createTheme, colors, ThemeProvider, Stack, Box } from '@mui/material';
import { useEffect } from 'react';

const theme = createTheme({
  palette: {
    secondary: {
      main: colors.orange[500]
    }
  }
});

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    Aos.init({ duration: 1300 });

  }, [])

  return <>
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="description" content="Bnt payment services" />
        <meta name="keywords" content="payments, fintek, Itservices,forex exchange" />
        <meta name="author" content="Nitin Hirve" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Index page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Noto+Sans+Lao+Looped:wght@500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Alexandria:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@500&family=Noto+Sans+Lao+Looped:wght@500&display=swap" rel="stylesheet" />
        <link href='https://fonts.googleapis.com/css?family=Raleway:200,400,800' rel='stylesheet' type='text/css'></link>
        <link href='https://www.marcoguglie.it/Codepen/AnimatedHeaderBg/demo-1/css/demo.css' rel='stylesheet' type='text/css'></link>
        <script defer type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script defer nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Head>

      <Navbar />
      <Component {...pageProps} />
      <Footer />

    </ThemeProvider>
  </>

}

export default MyApp
