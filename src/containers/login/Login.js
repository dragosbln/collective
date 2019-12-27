import React, { Component } from 'react';
import { connect } from 'react-redux';
import Joi from 'joi-browser';
import { userActions, userSelectors } from '../../redux';
import {
    Container,
    Typography,
    TextField,
    createStyles,
    Paper,
    FormGroup,
    FormControlLabel,
    FormControl,
    FormHelperText,
    Button,
    CircularProgress,
    Link,
    Grid
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import { LandingImage } from '../../assets/images';

class Login extends Component {
    state = {
        email: '',
        password: '',
        errors: {
            email: '',
            password: ''
        }
    }
    schema = {
        email: Joi.string().email({ minDomainAtoms: 2 }).error(() => ({ message: 'Please enter a valid email' })),
        password: Joi.string().required().min(6).error(() => ({ message: 'Password is required' })),
    }
    handleChange = key => e => {
        const { value } = e.target;
        const subSchema = this.schema[key];

        this.setState({ [key]: value });

        if (subSchema) {
            let { error } = subSchema.validate(value, { convert: false });

            this.setState(state => ({
                errors: {
                    ...state.errors,
                    [key]: error ? error.details[0].message : ''
                }
            }));
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        const isValid = this.validateForm();

        if (!isValid) return;
        this.props.login({ email, password });
    }
    validateForm = () => {
        const { email, password } = this.state;
        const { error } = Joi.object(this.schema).validate(
            { email, password }, { abortEarly: false }
        );
        let newErrors = {};

        if (error)
            // get the error messages from each error to be displayed
            for (let item of error.details)
                newErrors[item.path] = item.message;

        this.setState({
            errors: newErrors,
        });

        return !error;
    }
    render() {
        const { email, password, errors } = this.state;
        const { classes, loginFailMessage, buttonLoader, registerSuccessMessage } = this.props;

        return (
            <Container className={classes.container}>
                <Grid container justify="space-around" className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={4} className={classes.left}>
                        <Paper className={classes.paper} elevation={8}>
                            <Typography variant="h5" gutterBottom align="center" className={classes.white}>
                                {
                                    registerSuccessMessage === true ?
                                    'Your account has been successfully created. Log in!' :
                                    'Welcome back!'
                                }
                            </Typography>
                            <form onSubmit={this.handleSubmit} className={classes.form}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    error={!!errors.email}
                                    helperText={errors.email}
                                    value={email}
                                    onChange={this.handleChange('email')}
                                />
                                <TextField
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    error={!!errors.password}
                                    helperText={errors.password}
                                    value={password}
                                    onChange={this.handleChange('password')}
                                />
                                {
                                    loginFailMessage &&
                                    <FormHelperText error>{ loginFailMessage } </FormHelperText>
                                }
                                <Grid container justify="space-between" alignContent="center">
                                    <Button
                                        disabled={buttonLoader}
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        onClick={this.handleSubmit}
                                    >
                                        { buttonLoader && <CircularProgress size={20} color="inherit"/> }
                                        Login
                                    </Button>
                                    <Link href="\register" color="inherit" className={classes.link}>
                                        Create an account
                                    </Link>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={8} className={classes.right}>
                        <img src={LandingImage} alt="" className={classes.image}/>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default Login;
