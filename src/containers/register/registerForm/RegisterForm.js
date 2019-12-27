import React, { Component } from 'react';
import UserDetails from './UserDetails';
import InstitutionDetails from './InstitutionDetails';
import * as moment from 'moment'

class RegisterForm extends Component {
    state = { 
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        birthDate: null,
        institution: null,
        position: '',
        group: null,
        password: '',
        passwordConfirm : '',
    }

    componentDidMount(){
        this.props.getInstitutionList();
        this.props.getGroupList();
    }

    handleRegister = e =>{
        e.preventDefault();
        const {firstName, lastName, email, password, position} = this.state;
        const birthDate = moment(this.state.birthDate).format('DD/MM/YYYY');
        const data = {firstName, lastName, email, password, position, birthDate};
        this.props.addUser(data);
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1,
        });
    };


    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1,
        });
    };


    handleChange = input => event => {
        this.setState({
            [input]: event.target.value,
        });
    };

    handleDateChange = (dateIO) => {
        this.setState({
            birthDate: dateIO
        });
    }

    handleAutocompleteChange = input =>(event, value) => {
        this.setState({
            [input] : value,
        })
    }
     
    render() { 
        const {classes, institutionList, groupList, goTo, buttonLoader} = this.props;
        const {step, firstName, lastName, email, password, passwordConfirm, birthDate, institution, position, group} = this.state;
        const userDetails = {firstName, lastName, email, password, passwordConfirm};
        const institutionDetails = {birthDate, position, institution, group};
        
        switch (step) {
            case 1:
                return (
                    <UserDetails
                        nextStep={this.nextStep}
                        values={userDetails}
                        classes={classes}
                        handleChange={this.handleChange}
                        goTo={goTo}
                    />
                );
            case 2:
                return (
                    <InstitutionDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={institutionDetails}
                        classes={classes}
                        institutionList={institutionList}
                        groupList={groupList}
                        handleDateChange={this.handleDateChange}
                        handleAutocompleteChange={this.handleAutocompleteChange}
                        handleChange={this.handleChange}
                        goTo={goTo}
                        handleRegister={this.handleRegister}
                        buttonLoader={buttonLoader}
                    />
                );
        }
         
    }
}
 
export default RegisterForm;