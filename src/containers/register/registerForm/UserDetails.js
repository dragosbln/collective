import React, { Component } from 'react';
import {
    Button,
    Paper,
    TextField,
    Typography,
} from '@material-ui/core';


class UserDetails extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    handleClick = () =>{
        this.props.goTo('/login');
    }

    render() { 
        const {values, classes, handleChange} = this.props;
        const {firstName, lastName, email, password, passwordConfirm} = values;
        
        return (
            <Paper className={classes.paper}>
                <Typography
                    variant="h5"
                    className={classes.title}
                >
                    Create an account
                </Typography>
                <div className={classes.fields}>
                    <TextField
                        label="First name"
                        value = {firstName}
                        onChange={handleChange('firstName')}
                        fullWidth = {true}
                    />
                    <br/>
                    <TextField
                        label="Last name"
                        value = {lastName}
                        onChange={handleChange('lastName')}
                        fullWidth = {true}
                    />
                    <br/>
                    <TextField
                        label="Email"
                        value = {email}
                        onChange={handleChange('email')}
                        fullWidth = {true}
                    />
                    <br/>
                    <TextField
                        label="Password"
                        value = {password}
                        onChange={handleChange('password')}
                        fullWidth = {true}
                        type="password"
                    />
                    <br/>
                    <TextField
                        label="Confirm password"
                        value = {passwordConfirm}
                        onChange={handleChange('passwordConfirm')}
                        fullWidth = {true}
                        type="password"
                    />  
                </div>
                <div className={classes.container}>
                    <Button
                        variant="contained" 
                        size="medium" 
                        className={classes.button}
                        onClick = {this.continue}
                    >
                        Continue
                    </Button>
                    <Typography
                        onClick={this.handleClick}
                        variant="overline"
                        className={classes.link}
                    >
                        I'm already a member
                    </Typography>
                </div>
            </Paper>
        );
    }
}
export default UserDetails;