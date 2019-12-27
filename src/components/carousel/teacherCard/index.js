import React, { useState } from 'react';
import { Autocomplete } from '@material-ui/lab';
import EditIcon from '@material-ui/icons/Edit';
import {
    Card,
    CardContent,
    Grid,
    Paper,
    Select,
    InputLabel,
    FormControl,
    TextField,
    MenuItem,
    CircularProgress,
    CardMedia
} from '@material-ui/core';
import styles from "./styles";
import { withStyles } from '@material-ui/styles';
import Text from "../../text";
import Button from "../../button";
import { Redirect } from 'react-router-dom';
import { ScienceImage } from '../../../assets/images';
import { BiologyImage } from '../../../assets/images';
import { SportImage } from '../../../assets/images';

const TeacherCard = props => {
    const { classes, quiz, onPressActivate, loading, groupList } = props;
    const [groupName, setGroupName] = useState('');

    const handleActivateNow = () => {
        onPressActivate(quiz.id, groupName);
    };
    const handleEditNow = () => (
        <Redirect to="/" />
    );
    const handleChange = event => {
        setGroupName(event.target.value);
    };

    return (
        <Card className={classes.base}>
            <CardMedia className={classes.cardMedia} image={SportImage}>
                <CardContent className={classes.cardContent}>
                    <Paper className={classes.imageBg} />
                    <Grid className={classes.upComponents}>
                        <EditIcon onClick={handleEditNow} />
                    </Grid>
                    <Grid className={classes.descriptionContainer}>
                        <Text style={classes.titleTxt}>{quiz.title}</Text>
                        <Text style={classes.categoryTxt}>{quiz.category}</Text>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="groupLabel">Class</InputLabel>
                            <Select
                                className={classes.select}
                                labelId="groupLabel"
                                value={groupName}
                                onChange={handleChange}
                            >
                                {groupList.map(groupItem => (
                                    <MenuItem key={groupItem.name} value={groupItem.name}>{groupItem.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid className={classes.buttonContainer}>
                        <Button style={classes.button} variant="contained" disabled={loading} onClick={handleActivateNow}>
                            {loading && <CircularProgress size={20} className={classes.baseTxt} component="p" />}
                            Activate Quiz
                    </Button>
                    </Grid>
                </CardContent>
            </CardMedia>
        </Card>
    );
};

export default withStyles(styles)(TeacherCard);