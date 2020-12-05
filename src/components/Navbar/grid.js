import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Image3 from '../images/finalapp.png';
import Image2 from '../images/finalgoogle.png';
import Image4 from '../images/onlineFood1.jpg';
import Image5 from '../images/onlineFood2.jpg';
import Image6 from '../images/onlineFood3.jpg';

const useStyles = makeStyles((theme) => ({  
      root:{
          marginTop: "60px",
          marginBottom: "60px",
      },    
      item:{
        padding: "30px",
    },
  }));
export default function Mobile() {
    const classes = useStyles();
    return (
      <div className={classes.root}>   
             <Grid container>
        <Grid item xs={12} md={6} lg={6} sm={12} className={classes.item}>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={Image4}
                alt="First slide"
                width="400px"
                height="400px"
              />
              
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={Image5}
                alt="First slide"
                width="400px"
                height="400px"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={Image6}
                alt="First slide"
                width="400px"
                height="400px"
              />
            </Carousel.Item>
          </Carousel></Grid>
        <Grid item xs={12} md={6} lg={6} sm={12} className={classes.item}>
          <div >
            <h2 style={{fontSize:"2.9rem"}}>The Best Food Ordering App</h2><br />
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur imperdiet tempus lacus, eu consequat justo finibus in.
            Donec quis gravida eros. Fusce sit amet vestibulum erat.
             varius eget nulla in, lacinia ornare risus. Lorem ipsum dolor sit amet,
              consectetur Donec quis gravida eros. Fusce sit amet vestibulum erat.
              eu consequat justo finibus in.Donec quis gravida eros. Fusce sit amet vestibulum erat. Ut tellus est,
             varius eget nulla in, lacinia ornare risus. Lorem ipsum dolor sit </p>
         </div>
          <br /><br></br>
          <Grid container>
            <Grid item xs={6} md={6} lg={6} sm={6}>
              <a href="https://play.google.com/store/" />
              <img src={Image2} alt="img2" width="80%" height="80%" />
            </Grid>

            <Grid item xs={6} md={6} lg={6} sm={6}>
              <a href="https://www.apple.com/in/app-store/" />
              <img src={Image3} alt="img3" width="80%" height="80%" />
            </Grid>
          </Grid>
        </Grid></Grid>
        </div>
)
}