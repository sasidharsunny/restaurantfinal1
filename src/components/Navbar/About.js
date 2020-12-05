import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Image1 from '../images/about.jpg';
import Image2 from '../images/foodMobile.jpg';
import Image3 from '../images/chef.jpg';
import Image4 from '../images/bg7.jpg';
import Image5 from '../images/bg16.jpg';
import Button from '@material-ui/core/Button';
import './about.css'
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

export default function About() {
  const classes = useStyles();

  return (
    <div>

      <div class="divs" style={{ backgroundColor: "#b2ebf2" }}>
        <h1 style={{ textAlign: "center" }}>We explore in major cities</h1>
        <div class="container d-flex justify-content-center">
          <div class="row">
            <div class="col-md-4">
              <div class="card p-3 py-4 mt-5 mb-5">
                <div class="text-center"> <img src="https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Charminar_600-1280x720.jpg" width="100" height="100" class="rounded-circle" />
                  <h3 class="mt-2">Hyderabad</h3>  <small class="mt-4">This tasty stew is another favourite. Introduced in Hyderabad during the Nizam rule, this famous Hyderabadi street food dish has been localised by adding traditional spices thus evolving</small>
                  <div class="social-buttons mt-5"> <button class="neo-button"><i class="fa fa-facebook fa-1x"></i> </button> <button class="neo-button"><i class="fa fa-linkedin fa-1x"></i></button> <button class="neo-button"><i class="fa fa-google fa-1x"></i> </button> <button class="neo-button"><i class="fa fa-youtube fa-1x"></i> </button> </div>

                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card p-3 py-4 mt-5">
                <div class="text-center"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/MGR_Memorial_9_December_2007.jpg/220px-MGR_Memorial_9_December_2007.jpg" width="100" height="100" class="rounded-circle" />
                  <h3 class="mt-2">Chennai</h3>  <small class="mt-4">This tasty stew is another favourite. Introduced in Hyderabad during the Nizam rule, this famous Hyderabadi street food dish has been localised by adding traditional spices thus evolving</small>
                  <div class="social-buttons mt-5"> <button class="neo-button"><i class="fa fa-facebook fa-1x"></i> </button> <button class="neo-button"><i class="fa fa-linkedin fa-1x"></i></button> <button class="neo-button"><i class="fa fa-google fa-1x"></i> </button> <button class="neo-button"><i class="fa fa-youtube fa-1x"></i> </button> </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card p-3 py-4 mt-5">
                <div class="text-center"> <img src="https://lp-cms-production.imgix.net/2019-06/9483508eeee2b78a7356a15ed9c337a1-bengaluru-bangalore.jpg" width="100" height="100" class="rounded-circle" />
                  <h3 class="mt-2">Bangalore</h3>  <small class="mt-4">This tasty stew is another favourite. Introduced in Hyderabad during the Nizam rule, this famous Hyderabadi street food dish has been localised by adding traditional spices thus evolving</small>
                  <div class="social-buttons mt-5"> <button class="neo-button"><i class="fa fa-facebook fa-1x"></i> </button> <button class="neo-button"><i class="fa fa-linkedin fa-1x"></i></button> <button class="neo-button"><i class="fa fa-google fa-1x"></i> </button> <button class="neo-button"><i class="fa fa-youtube fa-1x"></i> </button> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div >
        <Grid container style={{ backgroundImage: `url(${Image5})`, width: "100%", height: "100%", color: "black" }} className={classes.grid1}>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <img src={Image1} alt="img1" width="90%" height="85%" />
          </Grid>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div >
              <h3>Free Food Ordering Solution</h3><br />
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur imperdiet tempus lacus, eu consequat justo finibus in.
              Donec quis gravida eros. Fusce sit amet vestibulum erat.
              varius eget nulla in, lacinia ornare risus. Lorem ipsum dolor sit amet,
              consectetur Donec quis gravida eros. Fusce sit amet vestibulum erat.
              eu consequat justo finibus in.Donec quis gravida eros. Fusce sit amet vestibulum erat. Ut tellus est,
           varius eget nulla in, lacinia ornare risus. Lorem ipsum dolor sit amet,</p>
              <br /><br />
              <Button variant="contained" style={{ backgroundColor: 'tomato', color: 'white' }}>Learn More</Button>

            </div>

          </Grid></Grid>
        <Grid container className={classes.root}>
          <Grid item xs={12} md={4} lg={4} sm={12}>
            <div style={{ padding: "30px", backgroundColor: '#b2dfdb' }}>
              <h4>Our Vision</h4><br />
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur imperdiet tempus lacus, eu consequat justo finibus in.
              Donec quis gravida eros. Fusce sit amet vestibulum erat. Ut tellus est,
              varius eget nulla in, lacinia ornare risus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes,
              Donec quis gravida eros. Fusce sit amet vestibulum erat. Ut tellus est,
              varius eget nulla in, lacinia ornare risus. Lorem ipsum dolor sit amet, consectetur
         adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes</p>
            </div>

          </Grid>
          <Grid item xs={12} md={4} lg={4} sm={12} >
            <img src={Image2} alt="img1" width="100%" height="100%" />
          </Grid>
          <Grid item xs={12} md={4} lg={4} sm={12}>

            <div style={{ padding: "30px", backgroundColor: '#ffecb3' }}>
              <h4>Our Mission</h4><br />
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur imperdiet tempus lacus, eu consequat justo finibus in.
              Donec quis gravida eros. Fusce sit amet vestibulum erat. Ut tellus est,
              varius eget nulla in, lacinia ornare risus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes   Donec quis gravida eros. Fusce sit amet vestibulum erat. Ut tellus est,
              varius eget nulla in, lacinia ornare risus. Lorem ipsum dolor sit amet, consectetur
         adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes,</p>
            </div>
          </Grid></Grid>
        <Grid container style={{ backgroundImage: `url(${Image4})`, width: "100%", height: "100%", color: "black" }} className={classes.grid3}>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div >
              <h3>Free Food Ordering Solution</h3><br />
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur imperdiet tempus lacus, eu consequat justo finibus in.
              Donec quis gravida eros. Fusce sit amet vestibulum erat.
              varius eget nulla in, lacinia ornare risus. Lorem ipsum dolor sit amet,
              consectetur Donec quis gravida eros. Fusce sit amet vestibulum erat.
              eu consequat justo finibus in.
              Donec quis gravida eros. Fusce sit amet vestibulum erat. Ut tellus est,
           varius eget nulla in, lacinia ornare risus. Lorem ipsum dolor sit amet,</p>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sm={12} style={{ padding: "40px" }}>
            <img src={Image3} alt="img1" width="100%" height="100%" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
