import * as React from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";
import PropTypes from 'prop-types';
import { useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../styles/bntnavbar.module.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {
    AppBar, Divider, Drawer, Box, IconButton, useScrollTrigger, List, ListItem, ListItemButton,
    ListItemText, Toolbar, Typography, Button, Slide, Stack
} from '@mui/material';


const drawerWidth = 240;
const navItems = ['Home', 'About Us', 'Services', 'Solutions', 'Blogs', 'Career', 'Build With Us'];
const navItemsNav = ['/', '/aboutus', '/services', '/solutions', '/blogs', '/career', '/buildwithus'];

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


    useEffect(() => {

        var navElement = document.querySelector(".navScroll");
        navElement.classList.add(styles.navOnScroll);
        function changeCss() {
            // var bodyElement = document.querySelector("body");
            var navElement = document.querySelector(".navScroll");
            // if(router.asPath =='/'){
            // (  this.scrollY > 160) ? navElement.classList.add(styles.navOnScroll) :navElement.classList.remove(styles.navOnScroll)
            // }
            // console.log("Scroll Y : ", this.scrollY)
        }

        addEventListener("scroll", changeCss, false);
    }, [])


    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [curNavItem, setCurrentItem] = React.useState('')

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
                {navItems.map((item,i) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                        <Link href={item === 'Services' ? '' : navItemsNav[i]}>
                                            
                        <ListItemText primary={item} />
                                         
                                        </Link>
                            
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event,item) => {
        setAnchorEl(event.currentTarget);
        setCurrentItem(item)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box sx={{ display: 'flex', }} >
                <HideOnScroll {...props} >
                    <AppBar elevation={0} className={'navScroll'} component="nav" sx={{ backgroundColor: 'transparent' }}>
                        <Toolbar sx={{ minHeight: '55px!important',position:"relative" }}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' },position:'absolute',right:0 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Box
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1, color: 'text.primary', marginLeft: { xs: 'none', sm: '50px' }, padding: 0, cursor: 'pointer' }}
                            >
                                {/* <p className="bntLogo" style={{fontFamily: 'Alexandria',fontWeight:'bold'}}> BNT-SOFT</p> */}

                                <img src="https://bnt-soft.com/wp-content/uploads/2020/05/logoheader.png" alt="BnT Soft" style={{ height: "35px" }} />

                            </Box>
                            <Box sx={{ flexGrow: 1, justifyContent: 'space-between', display: { xs: 'none', sm: 'flex' } }}>
                                {navItems.map((item, i) => {


                                    return (
                                        <Link href={item === 'Services' || item=== 'About Us' ? '' : navItemsNav[i]}>
                                            <button
                                                key={item}
                                                className={`raise ${router.asPath == navItemsNav[i] ? styles.navActive : styles.navList}`}
                                                onMouseEnter={item === 'Services' || item=== 'About Us' ? (e)=>{setAnchorEl(null);handleClick(e,item)} : ''}
                                                id="basic-button"
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                            >
                                                {item}
                                            </button>
                                        </Link>
                                    )
                                })

                                }
                            </Box>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                            {curNavItem ==='Services' && <>
                            <MenuItem onClick={handleClose}>
                                    <Link href={'/services/payments'}>
                                        Payments
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link href={'/services/retail'}>
                                            Retail
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link href={'/services/fintech'}>
                                            Fintech Startup
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link href={'/services/subservices'}>
                                            Sub services
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link href={'/services/newtechnologies'}>
                                             New Technologies
                                        </Link>
                                    </MenuItem>
                            </>}
                            {curNavItem ==='About Us' && <>
                            <MenuItem onClick={handleClose}>
                                    <Link href={'/aboutus/aboutus'}>
                                        About BNT
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link href={'/aboutus/lifeatBNT'}>
                                        Life at BNT
                                    </Link>
                                </MenuItem>
                            </>}
                               
                            </Menu>
                            <Box sx={{ flexGrow: 1, }}></Box>
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