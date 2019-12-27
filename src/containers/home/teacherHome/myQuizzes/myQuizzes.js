import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Carousel from "../../../../components/carousel";

class MyQuizzes extends Component {
  componentDidMount(){
    this.props.getGroupList();
  }

  render() {
    const { classes, activateGame, teacherQuizList, buttonLoader, groupList } = this.props;

    return (
      <Grid container className={classes.base} spacing={3}>
        <Grid item className={classes.carouselContainer}>
          <Carousel
            isTeacher={true}
            loading={buttonLoader}
            quizzes={teacherQuizList}
            activateGame={activateGame}
            groupList={groupList}
          />
        </Grid>
      </Grid>
    );
  }
}

export default MyQuizzes;
