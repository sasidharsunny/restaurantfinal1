import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ListSubheader from '@material-ui/core/ListSubheader';
import Image1 from '../images/hyd.jpg';
import Image2 from '../images/bang.jpg';
import Image3 from '../images/mumbai.jpg';
import Image4 from '../images/grid4.jpg';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import 'bootstrap/dist/css/bootstrap.min.css';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',


  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
 
}));
const HomeGrid = (props) => {

  function getCols(screenWidth) {
    if (isWidthUp('lg', screenWidth)) {
      return 4;
    }

    if (isWidthUp('md', screenWidth)) {
      return 3;
    }
    if (isWidthUp('sm', screenWidth)) {
      return 2;
    }

    return 1;
  }

  const cols = getCols(props.width); 

  const classes = useStyles();
  return (<>
        <h2 style={{fontSize:"2.9rem", color: "orangered"}}>.........Find Us In Your City </h2>
  <br/>
    <div className={classes.root}>
      <GridList cellHeight={250} className={classes.gridList} cols={cols} spacing={5}>
          <GridListTile   >
            <img src={Image1} alt="img1" />
            <GridListTileBar
              title="Hydrabad"
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label="image">
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile >
            <img src={Image2} alt="img1" />
            <GridListTileBar
              title="Bangalore"
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label="image">
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile >
            <img src={Image3} alt="img1" />
            <GridListTileBar
              title="Mumbai"
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label="image">
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile >
            <img src={Image4} alt="img1" />
            <GridListTileBar
              title="Delhi"
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label="image">
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>        
      </GridList>
    </div></>
  );
}
export default withWidth()(HomeGrid)
