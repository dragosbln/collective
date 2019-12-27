import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CreateQuiz from './createQuiz';
import ManageQuestions from './manageQuestions';
import MyQuizzes from './myQuizzes'

class Home extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/home/my-quizzes">
                    <MyQuizzes />
                </Route>
                <Route path="/home/create-quiz">
                    <CreateQuiz />
                </Route>
                <Route path="/home/manage-questions">
                    <ManageQuestions />
                </Route>
                <Redirect to="/home/create-quiz" />
            </Switch>
        );
    }
}

export default Home;
