import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img1 from './../../../assets/images/1.jpg'
import img2 from './../../../assets/images/2.jpg'
import img3 from './../../../assets/images/3.png'
import img4 from './../../../assets/images/4.webp'

export  const Mycards:React.FC<{img:string}>=(props) =>{
//  var myarray={img1,img2,img3,img4}
//  const Myarray:React.FC<{img:string}>=(props)=>{
//   return<><img src={props.img} /></>
//  }
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 140 }}
     image={props.img}
        title="Tablets"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          GCC- Protein
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
