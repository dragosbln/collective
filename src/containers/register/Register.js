import React, { Component } from 'react';
import {
    Grid, 
    Hidden, 
} from '@material-ui/core';
import RegisterForm from './registerForm';
import {LandingImage} from '../../assets/images';

class Register extends Component {
    state = {  }
    render() { 
        const {classes} = this.props;

        return ( 
            <Grid container>
                <Grid item xs={12} sm={12} md={6} className={classes.gridColumn}>
                    <RegisterForm />
                </Grid>
                <Hidden smDown>
                    <Grid item md={6} className={classes.gridColumn}>
                        <img src={LandingImage} alt="" className={classes.image} />
                    </Grid>
                </Hidden>
            </Grid>
        );
    }
}
 
export default Register;