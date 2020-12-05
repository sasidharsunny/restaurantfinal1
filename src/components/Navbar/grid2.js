import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import DoneIcon from '@material-ui/icons/Done';
import Container from '@material-ui/core/Container';
import Image4 from '../images/restuarent-app.png';
const useStyles = makeStyles((theme) => ({
  grid2:{
    padding: "30px"
      },
  heading: {
    fontFamily: "cursive",
    color: "orangered",
    textAlign:"center"
  },
 
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  
 
  form:{
    marginTop:"20px",
   backgroundColor:"#263238",
   paddingRight: '10px',
  },
  input:{
    backgroundColor: "white",
  },
}))
export default function Grid2() {
  const classes = useStyles();
  return (
    <div>
      <div  style={{backgroundImage: `url(${"https://businessinedmonton.com/wp-content/uploads/2018/07/iStock-685668626WEB.jpg"})`}}  >
      <Container>
      <h1 style={{textAlign:"center"}}>Only Food Ordering Solution with Guaranteed Returns</h1>
      <Grid container className={classes.grid2}>
        <Grid item xs={12} lg={8} md={8} sm={12} >
        <img src={Image4} alt="img1" width="70%" height="65%" />
         
          <div>
            <h2 className={classes.heading}>Our Clients</h2>
            <Grid container>
              <Grid item xs={6} lg={4} md={4} sm={6}>
                <img src="https://www.foodchow.com/Images/clients/logo-6.png" alt="img1" width="100px" height="100px" />
              </Grid>
              <Grid item xs={6} lg={4} md={4} sm={6}>
                <img src="https://www.foodchow.com/Images/clients/logo-11.png" alt="img1" width="100px" height="100px" />
              </Grid>
              <Grid item xs={6} lg={4} md={4} sm={6}>
                <img src="https://www.foodchow.com/Images/clients/logo-2.png" alt="img1" width="100px" height="100px" />
              </Grid>
              <Grid item xs={6} lg={4} md={4} sm={6}>
                <img src="https://www.foodchow.com/Images/clients/logo-1.png" alt="img1" width="100px" height="100px" />
              </Grid>
              <Grid item xs={6} lg={4} md={4} sm={6}>
                <img src="https://www.foodchow.com/Images/clients/logo-12.png" alt="img1" width="100px" height="100px" />
              </Grid>
              <Grid item xs={6} lg={4} md={4} sm={6}>
                <img src="https://www.foodchow.com/Images/clients/logo-3.png" alt="img1" width="100px" height="100px" />
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} lg={4} md={4} sm={12}>
                <div  className={classes.form}>
              <Container>
                  <form className={classes.root} noValidate autoComplete="off">
                    <br/>
                    <h3 style={{ color: "white",textAlign: "center" }}> Get a free Demo</h3>
                    <TextField id="outlined-basic" placeholder="Firstname" variant="outlined" fullWidth className={classes.input}/>
                    <TextField id="outlined-basic" placeholder="Restaurant name" variant="outlined" fullWidth className={classes.input}/>
                    <TextField id="outlined-basic" placeholder="Country" variant="outlined" fullWidth className={classes.input}/>
                    <TextField id="outlined-basic" placeholder="State/Region" variant="outlined" fullWidth className={classes.input}/>
                    <TextField id="outlined-basic" placeholder="City" variant="outlined" fullWidth className={classes.input}/>
                    <TextField id="outlined-basic" placeholder="Area/Suburb" variant="outlined" fullWidth className={classes.input}/>
                    <TextField id="outlined-basic" placeholder="Full Restaurant Address" variant="outlined" fullWidth className={classes.input}/>
                    <TextField id="outlined-basic" placeholder="Phone Number with Country code" variant="outlined" fullWidth className={classes.input}/>
                    <TextField id="outlined-basic" placeholder="Email" variant="outlined" fullWidth className={classes.input}/>
                    <TextField id="outlined-basic" placeholder="Promocode" variant="outlined" fullWidth className={classes.input}/>
                    <Button variant="contained" color="secondary" size='large' fullWidth >
                      Try Albenus for free</Button>
                  </form>
                </Container></div>
            </Grid>
          </Grid> </Container> 
          </div>
    </div>
  )
}