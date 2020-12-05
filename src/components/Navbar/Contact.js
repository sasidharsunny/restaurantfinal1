import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Image from "../images/contact.jpg";
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import { orange } from '@material-ui/core/colors';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 350,
        textAlign: "center",
        margin: theme.spacing(2),
        '&:hover':{
            boxShadow: '0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06)',
          },
    },
    main: {
        textAlign: "center",
        backgroundColor: "white",
    },

    formContainer: {
        marginTop: "50px",
        backgroundColor: "#eee",
       
        [theme.breakpoints.down('sm')]: {
            padding: "30px",
        },

        [theme.breakpoints.up('md')]: {
            padding: "70px",
        },
        [theme.breakpoints.up('lg')]: {
            padding: "100px",
        },
    },
    form:{
        padding: '30px',
        backgroundColor: "white",
    },
    div: {
        [theme.breakpoints.down('sm')]: {
            margin: "auto"
        },

        [theme.breakpoints.up('md')]: {
            display: 'flex',
            margin: "auto"
        },

        [theme.breakpoints.up('lg')]: {
            display: 'flex',
            margin: "auto",
            padding: "50px"
        },
    },
    container: {
        background: "white",
    }

}));

export default function Contact() {
    const classes = useStyles();
    return (

        <div >
            <div className={classes.main}>
                <h2 style={{ fontSize: "2.9rem", color: "orangered" }} >Get in Touch</h2>
                <p>We are committed to providing our customers with exceptional service while offering our employees the best training.</p>
                <Container >
                    <div className={classes.div}>
                        <Card className={classes.root} >
                            <CardContent>
                                <LocationOnIcon fontSize="large" style={{ color: orange[500] }} />
                                <br />
                                <Typography variant="h5" component="h5">
                                    Albenus
                                </Typography><br />
                                <Typography variant="body2" component="h4">
                                    Manjeera Trinity Corporate,<br /> Hyderabad- 500072,
                                    Telangana, India.
                                 </Typography>
                            </CardContent>
                        </Card>
                        <Card className={classes.root} >
                            <CardContent>
                                <CallIcon fontSize="large" style={{ color: orange[500] }} />
                                <Typography variant="h5" component="h5">
                                    Call Us
                               </Typography><br />
                                <Typography variant="body2" component="a">
                                    +91-9052000518,<br />
                                    +91-8886968651
                                 </Typography>
                            </CardContent>
                        </Card>
                        <Card className={classes.root} >
                            <CardContent>
                                <MailIcon fontSize="large" style={{ color: orange[500] }} /><br />
                                <Typography variant="h5" component="h5">
                                    Mail Us
                                 </Typography><br />
                                <Typography variant="body2" component="a">
                                    info@albenus.com,<br />
                                    contact@albenus.com
                                 </Typography>
                            </CardContent>
                        </Card>
                    </div></Container></div>
            <div className={classes.formContainer}>
                    <Grid container >
                        <Grid item xs={12} md={6} lg={6} sm={12} >
                            <div className={classes.form}>
                                <Container >
                                    <br /><br />
                                    <h5 style={{ color: orange[500] }}>CONNECT US</h5>
                                    <h3>MAKE ONLINE <br />RESERVATION !</h3>
                                    <TextField
                                        label="Name"
                                        fullWidth
                                    />

                                    <TextField
                                        label="Email"
                                        fullWidth
                                    />
                                    <TextField
                                        label="Phone"
                                        fullWidth
                                    />
                                    <FormControl
                                        fullWidth >
                                        <InputLabel htmlFor="age-native-simple">Select</InputLabel>
                                        <Select
                                            native
                                            inputProps={{
                                                name: 'age',
                                                id: 'age-native-simple',
                                            }}
                                            
                                        >
                                            <option aria-label="None" value="" />
                                            <option value={10}>Item1</option>
                                            <option value={20}>Item2</option>
                                            <option value={30}>Item3</option>
                                        </Select>
                                    </FormControl>

                                    <TextField
                                        label="Message"
                                        fullWidth />

                                    <Button
                                        variant="contained"
                                        type="submit"
                                        size="medium"
                                        color="primary"
                                        style={{
                                            marginTop: "20px",
                                            backgroundColor: orange[500],
                                        }}
                                    >Submit </Button><br />
                                </Container></div></Grid>
                        <Grid item xs={12} md={6} lg={6} sm={12} >
                         
                                <img src={Image} alt="contact_img" width="100%" height="73%" />
                                <div style={{ backgroundColor: "#ffd54f", textAlign: "center",}}>
                                    <h3>Lets Talk</h3>
                                    <h4>+91 1234567890 - IN</h4>
                                    <h4>+1 123-456-7890 - US</h4>
                                 <br/>
                                </div>
                           
                        </Grid>
                    </Grid></div>
        </div>

    );
}
