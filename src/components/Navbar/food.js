import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import image1 from '../images/restaurant.png';
import image2 from '../images/coffee.png';
import image3 from '../images/order.png';
import image4 from '../images/foodtruck.jpg';
import image5 from '../images/beverager.jpg';
import image6 from '../images/street.jpg';
import image7 from '../images/pizza.png';
import image8 from '../images/coffee.png';
import image9 from '../images/ice.png';
import image10 from '../images/street.jpg';
import image11 from '../images/streetfood.png';
import image12 from '../images/sweet.jpg';

import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    root : {
backgroundColor: "#ebe4d5",
marginTop: "100px",
    },
  image: {
    backgroundColor: "white", 
    padding: "30px",
    width: "150Px" ,
    height: '150px',
    display: 'block',
    borderRadius: '10px',
    
  },
  button:{
    backgroundColor:'tomato', 
    color:'white',
     margin:"auto",
     marginTop:"20px",
     marginBottom:"20px",
  },
}));

export default function Food() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Container maxWidth="lg"><br/><br/>
        <h2 style={{fontSize:"2.9rem"}}>Join Us To Grow Your Business</h2><br/>
      <Grid container spacing={2} >
        <Grid item xs={6} md={3} lg={2} sm={4}  >
          <div className={classes.image}>
            <img src={image1} alt="image" width="75px" height="75px"/>
            <h6>Restaurant</h6>
            </div>
        </Grid>
        <Grid item xs={6} md={3} lg={2} sm={4} >
        <div className={classes.image}>
          <img src={image2} alt="image" width="75px" height="75px"/>
          <h6>Coffee shops</h6></div>
        </Grid>
        <Grid item xs={6} md={3} lg={2} sm={4} >
        <div className={classes.image}><img src={image3} alt="image" width="75px" height="75px"/>
        <h6>Restaurant</h6></div>
        </Grid>
        <Grid item xs={6} md={3} lg={2} sm={4}  >
          <div className={classes.image}><img src={image4} alt="image" width="75px" height="75px"/>
          <h6>Restaurant</h6></div>
        </Grid>
        <Grid item xs={6} md={3} lg={2} sm={4} >
        <div className={classes.image}><img src={image5} alt="image" width="75px" height="75px"/>
        <h6>Restaurant</h6></div>
        </Grid>
        <Grid item xs={6} md={3} lg={2} sm={4}  >
        <div className={classes.image}><img src={image6} alt="image" width="75px" height="75px"/>
        <h6>Restaurant</h6></div>
        </Grid>
        <Grid item xs={6} md={3} lg={2} sm={4}  >
          <div className={classes.image}><img src={image7} alt="image" width="75px" height="75px"/>
          <h6>Restaurant</h6></div>
        </Grid>
        <Grid item xs={6} md={3} lg={2} sm={4} >
        <div className={classes.image}><img src={image8} alt="image" width="75px" height="75px"/>
        <h6>Restaurant</h6></div>
        </Grid>
        <Grid item xs={6} md={3} lg={2} sm={4}  >
        <div className={classes.image}><img src={image9} alt="image" width="75px" height="75px"/>
        <h6>Restaurant</h6></div>
        </Grid>
        <Grid item xs={6} md={3} lg={2} sm={4}  >
          <div className={classes.image}><img src={image10} alt="image" width="75px" height="75px"/>
          <h6>Restaurant</h6></div>
        </Grid>
        <Grid item xs={6} md={3} lg={2} sm={4}  >
        <div className={classes.image}><img src={image11} alt="image" width="75px" height="75px"/>
        <h6>Restaurant</h6></div>
        </Grid>
        <Grid item xs={6} md={3} lg={2} sm={4}  >
        <div className={classes.image}><img src={image12} alt="image" width="75px" height="75px"/>
        <h6>Restaurant</h6>
        </div>
        </Grid>
        <Button type="submit" variant="contained"  size="large"
        className={classes.button}
        component={ Link } to = "/free-Demo"
        >Add Your Restaurant Here</Button>
      </Grid>

      </Container></div>
    
  );
}
