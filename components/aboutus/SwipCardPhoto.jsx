import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const SwipCardPhoto = ({ imageIndex }) => {
  return (
    <Card sx={{ maxWidth: {sm:300,xs:'100vw'}, borderRadius: 0 }} elevation={0}>
      <CardActionArea elevation={0}>
        <CardMedia

          sx={{
            webkitTransition: '0.4s ease',
            transition: '0.4s ease',
            borderRadius:'10px'
          }}
          onMouseOver={(e) => {
            e.target.style.cssText = `-webkit-transform: scale(1.10);
  transform: scale(1.10);`}}
          onMouseOut={(e) => {
            e.target.style.cssText = `-webkit-transform: scale(1);
  transform: scale(1);`}}
          component="img"
          height="160"
          image={`/aboutus/lifeatBnt/images/swiperImages/img${imageIndex}.jpg`}
          alt=" "
        />
      </CardActionArea>
    </Card>
  );
}

export default SwipCardPhoto;