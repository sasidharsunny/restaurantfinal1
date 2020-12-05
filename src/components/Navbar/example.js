import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid1: {
    marginTop: "20px",
    padding: "50px",
  },
  root: {
    marginTop: "20px",
  },
  grid3: {
    marginTop: "20px",
    padding: "30px",
  },

}));


export default function Example() {
  const classes = useStyles();

  return (
  <div>
      <div>
        <Grid container className={classes.grid1}>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div style={{ paddingTop: '60px' }} >
              <h1 style={{ fontFamily: "cursive", color: "tomato" }}>Enjoy Our Delicious Food</h1><br />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur imperdiet tempus lacus, eu consequat justo finibus in. </p>
              <div>
                <img alt="" src="https://wallpapercave.com/wp/wp1874159.jpg" height="400px" width="580px" />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} zlg={6} sm={12}>
            <Carousel autoPlay>
              <div>
                <img alt="" src="https://st.depositphotos.com/1900347/4146/i/950/depositphotos_41466555-stock-photo-image-of-slice-of-pizza.jpg" />
              </div>
              <div>
                <img alt="" src="https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image2-min-1024x569.png" />
              </div>
              <div>
                <img alt="" src="https://www.shanazrafiq.com/wp-content/uploads/2016/05/DSC_0075-001.jpg" />
              </div>
              <div>
                <img alt="" src="https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image3-min-1024x569.png" />
              </div>
            </Carousel>
          </Grid>
        </Grid>
      </div>
      <div>
      </div>
    </div>
  )
}








