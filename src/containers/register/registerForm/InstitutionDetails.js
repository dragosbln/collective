import React, { Component } from 'react';
import {Autocomplete} from '@material-ui/lab';
import DateFnsUtils from '@date-io/date-fns';
import {
    Button,
    CircularProgress,
    Paper,
    TextField,
    Radio,
    RadioGroup,
    FormControl,
    FormLabel,
    FormControlLabel,
} from '@material-ui/core';
import { 
    MuiPickersUtilsProvider,
    KeyboardDatePicker ,
} from '@material-ui/pickers';

class InstitutionDetails extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() { 
        const {values, classes, institutionList, groupList, handleDateChange, handleAutocompleteChange, handleChange,handleRegister,buttonLoader} = this.props;
        const {birthDate, position, institution, group } = values;

        const propsInstitution = {
            options: institutionList,
            getOptionLabel: option => option.name,
        };

        const propsGroup = {
            options: groupList,
            getOptionLabel: option => option.name,
        };

        return ( 
            <Paper className={classes.paper} >
                <div className={classes.fields}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            label="Date of birth"
                            format="dd/MM/yyyy"
                            value={birthDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                            'aria-label': 'change date',
                            }}
                            fullWidth={true}
                        />
                    </MuiPickersUtilsProvider>
                    <Autocomplete
                        {...propsInstitution}
                        autoSelect
                        onChange={handleAutocompleteChange('institution')}
                        renderInput={params => (
                        <TextField {...params} label="Institution" margin="normal" fullWidth />
                        )}
                        value={institution}
                    />
                    <br/>
                    <FormControl component="fieldset" >
                        <FormLabel component="legend" className={classes.legend}>Position</FormLabel>
                        <RadioGroup aria-label="position" value={position} onChange={handleChange('position')}>
                            <FormControlLabel value="teacher" control={<Radio />} label="Teacher" />
                            <FormControlLabel value="student" control={<Radio />} label="Student" />
                        </RadioGroup>
                    </FormControl>
                    {
                        position === 'student' &&
                        <Autocomplete 
                            {...propsGroup}
                            autoSelect
                            onChange={handleAutocompleteChange('group')}
                            renderInput={params => (
                                <TextField {...params} label="Class" margin="normal" fullWidth />
                            )}
                            value={group}
                            color="secondary"
                        />
                    }
                </div>
                <div className={classes.container}>
                    <Button
                        variant="contained" 
                        size="medium" 
                        className={classes.button}
                        onClick={this.back}
                        
                    >
                        RETURN
                    </Button>
                    <Button
                        disabled={buttonLoader}
                        variant="contained" 
                        size="medium" 
                        className={classes.button}
                        onClick={handleRegister}
                        
                    >
                        {buttonLoader && <CircularProgress size={20} color="inherit"/> }
                        REGISTER
                    </Button>
                </div>
            </Paper>
        );
    }
}
 
export default InstitutionDetails;
