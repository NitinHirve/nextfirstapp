import * as React from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";
import PropTypes from 'prop-types';
import { useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../styles/bntnavbar.module.css';
import {
    AppBar, Divider, Drawer, Box, IconButton, useScrollTrigger, List, ListItem, ListItemButton,
    ListItemText, Toolbar, Typography, Button, Slide, Stack
} from '@mui/material';


const drawerWidth = 240;
const navItems = ['Home', 'About Us', 'Services', 'Solutions', 'Blogs', 'Career', 'Build With Us'];
const navItemsNav = ['/', '/about', '/services', '/solutions', '/blogs', '/career', '/buildwithus'];

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

function Navbar(props) {

    const router = useRouter();


    useEffect(()=>{
        function changeCss () {
            // var bodyElement = document.querySelector("body");
            var navElement = document.querySelector(".navScroll");
            this.scrollY > 160 ? navElement.classList.add(styles.navOnScroll) :navElement.classList.remove(styles.navOnScroll)
            console.log("Scroll Y : ", this.scrollY)
          }
          
          addEventListener("scroll", changeCss , false);
    },[])


    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                BNTSOFT
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
        <Box sx={{ display: 'flex', }} >
            <HideOnScroll {...props} >
                <AppBar elevation={0} className={'navScroll'}    component="nav"  sx={{backgroundColor:'transparent'}}>
                    <Toolbar sx={{minHeight:'55px!important'}}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } ,color:'text.primary',marginLeft:'50px',padding:0,cursor:'pointer'}}
                        >
                        {/* <p className="bntLogo" style={{fontFamily: 'Alexandria',fontWeight:'bold'}}> BNT-SOFT</p> */}
                           
                            <img src="https://bnt-soft.com/wp-content/uploads/2020/05/logoheader.png" alt="BnT Soft" style={{height: "35px"}} />

                        </Box>
                        <Box sx={{flexGrow: 1,justifyContent:'space-between', display: { xs: 'none', sm: 'flex' } }}>
                            {navItems.map((item,i) => {

                
                                return (
                                    <Link href={navItemsNav[i]}>
                                        <button key={item} className={`raise ${router.asPath == navItemsNav[i] ? styles.navActive : styles.navList}`}  >
                                            {item} 
                                        </button>
                                    </Link>
                                   
                            )})}
                        </Box>
                        <Box sx={{flexGrow: 1,}}></Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>

        </Box>

        <style jsx>
          {`
.raise:hover {
  color: blue!important;
  box-shadow: 0 0.5em 0.5em -0.4em #64b5f6;
  transform: translateY(-0.25em);
  cursor:pointer;
}
.raise {
  color: black;
  transition: 0.25s;
  border:none;
  background: none;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 7px 5px 7px 5px;
}
.bntLogo{
    font-size: 20px;
  background: -webkit-linear-gradient( #2196f3, #380036);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


                `}
        </style>
        </>
    );
}

export default Navbar;