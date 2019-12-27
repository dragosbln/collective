import React, { Component } from 'react';
import {
  Button, 
  Grid, 
  Hidden, 
  Typography
} from '@material-ui/core';
import {Logo, LandingImage} from '../../assets/images'

class Landing extends React.Component {

  handleClick = () =>{
    this.props.goTo('/login');
  }

  render(){
    const {classes} = this.props;

    return (
      <Grid container>
        <Hidden xsDown>
          <Grid item sm={6} className={classes.gridColumn}>   
            <Typography 
              variant="h3"
              align="center"
              className={classes.welcome}
            >
              Welcome to
            </Typography>
            <Typography align="center" variant="h1" className={classes.text}>
              LearnIQ
            </Typography>
            <Typography 
              variant="h4" 
              align="center" 
              className={classes.text}
            >
              Any succesful career starts with good education
            </Typography>     
            <Button 
              variant="contained" 
              size="large" 
              className={classes.button}
              onClick = {this.handleClick}
            >
              Get Started
            </Button>
          </Grid>
                        
          <Grid item sm={6} className={`${classes.gridColumn} ${classes.gridColumnImage}`}>   
            <img src={LandingImage} alt="" className={classes.image} />  
          </Grid>
        </Hidden> 

        <Hidden smUp>
            <Grid item xs={12} sm={false}  className={`${classes.gridColumn} ${classes.gridColumnImage}`}>
              <img src={Logo} alt="" className={classes.image} /> 
              <Button 
                variant="contained" 
                size="large" 
                className={classes.button}
                onClick = {this.handleClick}
              >
                Get Started
              </Button>
            </Grid>
        </Hidden>
      </Grid>
    );
  }
}

export default Landing;