import React from "react";
import Slider from "react-slick";
import { Grid, withStyles } from "@material-ui/core";
import { Redirect } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomCard from "./card";
import TeacherCard from "./teacherCard";
import styles from "./styles";


const Carousel = props => {
    const { classes, isTeacher ,quizzes, onOpenItem = () => { }, joinGame, loading, activateGame, groupList } = props;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                }
            },
        ],
    };

    return (
        <Slider className={classes.base} {...settings}>
            {quizzes.map(quiz => (
                <Grid className={classes.cardContainer} key={quiz.id}>
                    {isTeacher
                    ?
                        <TeacherCard
                            quiz={quiz}
                            // onOpen={onOpenItem(quiz.id)}
                            containerClass={classes.cardContainer}
                            loading={loading}
                            onPressActivate={activateGame}
                            key={quiz.id}
                            groupList={groupList}
                        />
                    :
                        <CustomCard
                            {...quiz}
                            onOpen={onOpenItem(quiz.id)}
                            containerClass={classes.cardContainer}
                            loading={loading}
                            onPressPlay={joinGame}
                            key={quiz.id}
                        />
                    }

                </Grid>
            ))}
        </Slider>
    );
};

export default withStyles(styles)(Carousel);
