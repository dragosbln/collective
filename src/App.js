import * as React from "react";
import { Switch, Route, Redirect, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import theme, { globalStyles } from "./config/theme";
import {
  Typography,
  Container,
  withStyles,
  CssBaseline,
  CircularProgress,
} from "@material-ui/core";
import { ThemeProvider, createStyles } from "@material-ui/core/styles";
import { Home, Login, Register, Landing, Game } from "./containers";
import WithAuthentication from "./components/withAuthentication";
import NavBar from "./components/navBar";
import { BigLoader } from "./components";
import {
  securedRoutes,
  unsecuredRoutes,
  teacherRoutes
} from "./constants/routes";
import { quizzes } from "./utils/mockData";
import { userSelectors, userActions } from "./redux";
import { teacherQuizzes } from "./utils/mockData";

const styles = createStyles({
    main:{
        height:'100%',
    },
    // create our own style classes for this component here:
    container: {
        // this is just an example, it shouldn't stay this way
        backgroundColor: theme.palette.secondary.main,
        paddingTop: 64, // maybe extract this(appBar height) in a constant if it's used in other components
        height: "100%"
    },
    appBar: {
        height: 64
    },
    ...globalStyles
});

class App extends React.Component {
    componentDidMount() {
        this.props.getCurrentUser();
    }

    render() {
        const { classes, currentUser, bigLoader } = this.props;
        const isTeacher = currentUser.position === "teacher";

        return (
            <React.Fragment>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {
                        !bigLoader &&
                        <React.Fragment>
                            <WithAuthentication reverse>
                                <NavBar routes={unsecuredRoutes} />
                            </WithAuthentication>
                            <WithAuthentication>
                                <NavBar
                                    routes={isTeacher ? teacherRoutes : securedRoutes}
                                    quizTitle={quizzes[0].title}
                                />
                            </WithAuthentication>
                        </React.Fragment>
                    }
                    <Container className={classes.container} maxWidth={false}>
                        {
                            bigLoader
                            ? <BigLoader/>
                            : <React.Fragment>
                                <WithAuthentication>
                                    <Switch>
                                        <Route path="/home">
                                            <Home isTeacher={isTeacher} teacherQuizList={teacherQuizzes} />
                                        </Route>
                                        <Route path="/game">
                                            <Game isTeacher={isTeacher} />
                                        </Route>
                                        <Redirect to="/home" />
                                    </Switch>
                                </WithAuthentication>
                                <WithAuthentication reverse>
                                    <Switch>
                                        <Route exact path="/">
                                            <Landing />
                                        </Route>
                                        <Route path="/register">
                                            <Register />
                                        </Route>
                                        <Route path="/login">
                                            <Login />
                                        </Route>
                                        <Redirect to="/" />
                                    </Switch>
                                </WithAuthentication>
                            </React.Fragment>
                        }
                    </Container>
                </ThemeProvider>
            </React.Fragment>
        );
    }
}

export default withRouter(
  withStyles(styles)(
    connect(
      state => ({
        currentUser: userSelectors.getCurrentUser(state),
        bigLoader: userSelectors.getBigLoader(state),
      }),
      dispatch => ({
        getCurrentUser(){
          dispatch(userActions.getCurrentUser());
        }
      })
    )(App)
  )
);
