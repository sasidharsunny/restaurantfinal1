import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  carousel: {
    backgroundColor: "#263238", 
    paddingTop: '40px', 
    paddingBottom: '30px',
    marginTop: "100px",
  },
  card1:
  {
      overflow: 'hidden',
      borderRadius: '4px',  
  '&:hover':{
    transform: 'scale(1.05)',
    boxShadow: '0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06)',
  },
  },
}));

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 2000 },

    items: 5
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 720 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 720, min: 0 },
    items: 1
  },
 
};

export default function Mycard() {
 const classes = useStyles();
  
    return (

      <div>
        <div className={classes.carousel}>
          <h2 style={{ textAlign: "center", color: "white",fontSize:"2.9rem" }}>Find Best Deal Here</h2><br />
          <Carousel responsive={responsive} >

            <div className={classes.card1}>
              <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym" alt="Avatar" height="200px" width="300px" />
              <div class="container">
              </div>
            </div>
            <div className={classes.card1}>
              <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ft6ftbffbbyp7q0p8ip9" alt="Avatar" height="200px" width="300px" />
              <div class="container">
              </div>
            </div>
            <div className={classes.card1}>
              <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/tvi1m2nrtmq7btiqvni1" alt="Avatar" height="200px" width="300px" />
              <div class="container">
              </div>
            </div>
            <div className={classes.card1}>
              <img src=" https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/gubwz8cbugdx3prtieuj   " alt="Avatar" height="200px" width="300px" />
              <div class="container">
              </div>
            </div>
            <div className={classes.card1}>
              <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/uo76uyxvdpj4gusq09kk" alt="Avatar" height="200px" width="300px" />
              <div class="container">
              </div>
            </div>
            <div className={classes.card1}>
              <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zza0htd4fux6flem5tik" alt="Avatar" height="200px" width="300px" />
              <div class="container">
              </div>
            </div>
          </Carousel>;
 </div>
</div>
    )
  }

