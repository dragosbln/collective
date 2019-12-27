import React from "react";
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Grid,
    Paper,
    CircularProgress
} from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import { BiologyPattern } from "../../../assets/images";
import Text from "../../text";
import Button from "../../button";
import { ChemistryImage } from "../../../assets/images";

const CustomCard = props => {
    const { classes, title, professor, time, description, onPressPlay, onOpen = () => { }, id, loading } = props;
    const handlePlayNow = () => {
        onPressPlay(id);
    };

    return (
        <Card className={classes.base} onClick={onOpen}>
            <CardContent className={classes.cardContent}>
                <CardMedia className={classes.imageBg} image={ChemistryImage} />
                <Grid className={classes.descriptionContainer}>
                    <Text style={`${classes.baseTxt} ${classes.titleTxt}`}>{title}</Text>
                    <Text style={classes.professorTxt}>{professor}</Text>
                    <Text style={classes.timeTxt}>{time}</Text>
                    {
                        description &&
                        <Text style={`${classes.baseTxt} ${classes.descriptionTxt}`}>
                            {description}
                        </Text>
                    }
                </Grid>
                <Grid className={classes.buttonContainer}>
                    <Button variant="contained" disabled={loading} onClick={handlePlayNow}>
                        {loading && <CircularProgress size={20} className={classes.baseTxt} component="p" />}
                        Play now
                    </Button>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default withStyles(styles)(CustomCard);
