import React, { Component } from 'react';
import { Menu } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import {
    AppBar,
    SwipeableDrawer,
    Hidden,
    IconButton,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    Button,
} from '@material-ui/core';
import WithAuthentication from '../withAuthentication';

class NavBar extends Component {
    state = {
        open: false
    }

    handleChange = (event, path) => {
        this.props.goTo(path);
    };

    handleChangeMobile = (event, path) => {
        this.setState({
            open: !this.state.open
        }, () => this.props.goTo(path));
    };

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    renderTab = route => (
        <Tab
            label={route.label}
            key={route.path}
            value={route.path}
            className={this.props.classes.tab}
        />
    )

    render() {

        const { classes, routes, location, logout, quizTitle } = this.props;
        const { open } = this.state;

        return (
            <AppBar position="fixed" className={classes.root}>
                <Toolbar>
                    <Hidden smDown>
                        <div className={classes.imageContainer}>
                            <Typography>Logo</Typography>
                        </div>
                        <div className={classes.quizTitleContainer}>
                            <Typography className={classes.quizTitle}>{quizTitle}</Typography>
                        </div>
                        <Tabs
                            value={location.pathname === '/' || location.pathname.includes('game') ? false : location.pathname}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={this.handleChange}
                        >
                            { routes.filter(el => el.showOnNavbar).map(this.renderTab) }
                        </Tabs>
                        <WithAuthentication>
                            <Button color="secondary" onClick={logout}>Logout</Button>
                        </WithAuthentication>
                    </Hidden>

                    <Hidden mdUp>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.handleToggle}>
                            <Menu />
                        </IconButton>

                        <SwipeableDrawer
                            open={open}
                            onClose={this.handleToggle}
                            onOpen={this.handleToggle}
                            className={classes.drawer}
                        >
                            <Tabs
                                value={location.pathname === '/' || location.pathname.includes('game') ? false : location.pathname}
                                indicatorColor="primary"
                                textColor="primary"
                                onChange={this.handleChangeMobile}
                                variant="scrollable"
                                orientation="vertical"
                                className={classes.tabContainer}
                            >
                                {routes.filter(el => el.showOnNavbar).map(this.renderTab)}
                            </Tabs>
                            <WithAuthentication>
                                <Button color="secondary" onClick={logout}>Logout</Button>
                            </WithAuthentication>
                        </SwipeableDrawer>
                    </Hidden>
                </Toolbar>
            </AppBar>
        );
    }
}

export default NavBar;
