import * as React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';


const UsCard = ({ title, cardImage, desc }) => {
    return (
        <>
            <Card sx={{ borderRadius: 0}} elevation={0}>
                <CardActionArea elevation={0}>
                    <CardMedia
                        sx={{
                            webkitTransition: '0.4s ease',
                            transition: '0.4s ease'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.cssText = `-webkit-transform: scale(1.10);transform: scale(1.10);`
                        }}
                        onMouseOut={(e) => {
                            e.target.style.cssText = `-webkit-transform: scale(1);transform: scale(1);`
                        }}
                        component="img"
                        height="200"
                        image={`/blogs/images/blogs/${cardImage}.jpg`}
                        alt="green iguana"
                    />
                    <CardContent  elevation={0}>
                        <Typography gutterBottom variant="h6" component="div" sx={{ fontFamily: 'Alexandria', fontWeight: '500' }}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: 'black', fontSize: '16px' }}>
                            {desc}
                        </Typography>
                        <Box sx={{ height: '60px', backgroundColor: '#dee6ff',marginTop:'30px' }}>
                            <Typography sx={{ display: 'grid', placeItems: 'center' }}><p>Read More</p></Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>

        </>

    );
}

export default UsCard;