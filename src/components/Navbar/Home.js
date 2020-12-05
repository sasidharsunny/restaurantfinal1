import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image4 from '../images/home7.jpeg';
import { makeStyles } from '@material-ui/core/styles';
import HomeGrid from './HomeGrid';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import DateFnsUtils from '@date-io/date-fns';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from "@material-ui/core/FormHelperText";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import NativeSelect from "@material-ui/core/NativeSelect";
import Mycard from './carosel';
import Food from './food';
import Mobile from './grid';
import Icon from '@material-ui/core/Icon';
import Slide from "@material-ui/core/Slide";


const transitionDuration = 1000;
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${Image4})`,
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
        marginBottom: "10px",
        textAlign: "center",
        paddingTop: '120px',
        margin: "auto", 
        color: "white", 
    },

    container: {
        textAlign: "center",
        display: 'flex',
        width: '100%',
        margin: 'auto',
        padding: "1% 15% 1% 15%"
        
    },
    div:{
        marginTop: "70px",
        textAlign: "center",
        paddingBottom: "50px",
      },
     form: {
        '& > *': {
          margin: theme.spacing(2),
          marginTop: "50px",
          width: '25ch',
        },
      },
      btn:{
      backgroundColor:'tomato',
       color:'white',
      },
     
    }));

export default function Home() {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-01-18T21:11:54'));
    const [selectedTime, setSelectedTime] = React.useState(new Date('2020-01-18T21:11:54'));
    const [state, setState] = React.useState({
      res: "",
    });
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    const handleTimeChange = (Time) => {
      setSelectedTime(Time);
    };
    const handleChange = (event) => {
      const name = event.target.name;
      setState({
        ...state,
        [name]: event.target.value
      });
    };
  

    return (<>
        <div className={classes.root}>
        <Slide in={true} timeout={transitionDuration} 
      direction="right">
<h1 style={{fontSize:"3.9rem"}}>Search your Food Here</h1>       

      </Slide>
                <p> consectetur adipiscing elit. Nunc in cursus ante.<br />
                Quisque ac gravida ante.</p>
               <div className={classes.container}>
                <TextField id="outlined-basic" label="Search for Restaurant" fullWidth variant="outlined" 
            style={{backgroundColor: 'white'}} />
              <Button type="submit" variant="contained"  size="large" className={classes.btn} >Go</Button>
              </div>
              <div className={classes.div}>
   
   <Button variant="contained" size="large" 
  className={classes.btn} 
   onClick={handleClickOpen}
   endIcon={<Icon>send</Icon>} >Book Your Table</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">BOOK YOUR TABLE HERE</DialogTitle>
          <DialogContent>

<form className={classes.form} noValidate autoComplete="off">
<FormControl variant="outlined" className={classes.formControl}>
  <InputLabel shrink htmlFor="age-native-label-placeholder">
    Restaurant
  </InputLabel>
  <NativeSelect
    value={state.age}
    onChange={handleChange}
    inputProps={{
      name: "Restaurant",
      id: "res-native-label-placeholder"
    }}
  >
    <option aria-label="None" value="" />
    <option value={"delhi"}>Delhi</option>
    <option value={"bhopal"}>Bhopal</option>
    <option value={"pune"}>Pune</option>
    <option value={"dehradun"}>Dehradun</option>
  </NativeSelect>
  <FormHelperText>Select Restaurant</FormHelperText>
</FormControl>        
<TextField id="outlined-basic" label="Total Person" type="number" />
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker
      disableToolbar
      variant="inline"
      format="MM/dd/yyyy"
      margin="normal"
      id="date-picker-inline"
      label="Expected Date"
      value={selectedDate}
      onChange={handleDateChange}
      KeyboardButtonProps={{
        'aria-label': 'change date',
     }}
    />
    <KeyboardTimePicker
      margin="normal"
      id="time-picker"
      label="Expectet Time"
      value={selectedTime}
      onChange={handleTimeChange}
      KeyboardButtonProps={{
        'aria-label': 'Change Time',
      }}
    />
  </MuiPickersUtilsProvider>
</form> </DialogContent>
          <DialogActions>
          <Button onClick={handleClose}  variant="contained" color="primary">
              Check Avalibility
          </Button>
            <Button  onClick={handleClose} variant="contained" color="primary">
              Cancel
          </Button>
           
          </DialogActions>
        </Dialog>

   
 </div>
        </div>
        <Mycard/>
        <Food/>
        <Mobile/>
        <HomeGrid/>
        
        </>
    )
}
