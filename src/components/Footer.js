import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
Grid:{
color: "white",
backgroundColor: "#212121",
marginTop: "20px",
padding: "50px",
},

  text: {
    padding: theme.spacing(2, 2, 0)
  },

  appBar: {
   
    top: "auto",
    bottom: 0,
    alignItems: 'center',
  }
  
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>

      <Grid container className={classes.Grid}> 
        <Grid  item xs={12} md={3} lg={3} sm={6}>
          <h6>QUICK LINKS</h6>
          
          <ul>
            <li>Pricing</li>
            <li>Restaurant Directory</li>
            <li>Contact</li>
            <li>Business Opportunity</li>
            <li>Partner Login</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={3} lg={3} sm={6}>
          <h6>SOLUTION</h6>
          
          <ul>
            <li>Template Store</li>
            <li>Table Booking</li>
            <li>Restaurant Marketing</li>
            <li>Mobile Application</li>
            <li>Complete Food Ordering Solution</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={3} lg={3} sm={6}>
          <h6>DEMO</h6>
          
          <ul>
            <li>Online Food Ordering</li>
            <li>Restaurant Admin</li>
            <li>Customer App for Android</li>
            <li>Partner App for Android</li>
            <li>Partner App for IOS</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={3} lg={3} sm={6}>
          <h6>KNOWLEDGE</h6>
          
          <ul>
            <li>Restaurant Marketing Course</li>
            <li>Tutorials</li>
            <li>FAQ</li>
            <li>Features</li>
            <li>Blog</li>
          </ul>
        </Grid>
      </Grid>
      <AppBar position="static" style={{backgroundColor: 'black'}} className={classes.appBar}>
        <Toolbar >
        <Typography variant="p">
        Copyright © 2020 Albenus All Rights Reserved
          </Typography></Toolbar>
      </AppBar>
    </React.Fragment>
  );
}