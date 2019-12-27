import React from "react";
import {
    Container,
    Typography,
    Hidden,
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Fab
} from "@material-ui/core";
import { Switch, Route, Redirect } from "react-router-dom";
import History from "./history";
import {
    Logo,
    BiologyPattern,
    HistoryImage,
    MathImage,
    ScienceImage
} from "../../../assets/images";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import styles from "./styles";
import Active from "./active";

class Home extends React.Component {
    render() {
        const { classes, isTeacher } = this.props;
        return (
            <Switch>
                <Route path="/home/active">
                    <Active isTeacher={isTeacher}/>
                </Route>
                <Route path="/home/history">
                    <History />
                </Route>
                <Route path="/home/statistics">Statistics page</Route>
                <Redirect to="/home/active" />
            </Switch>
        );
    }
}

export default Home;
