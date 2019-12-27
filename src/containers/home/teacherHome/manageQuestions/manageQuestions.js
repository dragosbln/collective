import React, { Component } from 'react';
import {
    Typography
} from '@material-ui/core';

class ManageQuestions extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Typography
                variant="h4"
                align="center"
                color="primary"
            >
                Questions manager goes here
            </Typography>
        );
    }
}

export default ManageQuestions;