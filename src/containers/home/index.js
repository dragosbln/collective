import React from 'react';
import StudentHome from './studentHome'
import TeacherHome from './teacherHome'

const home = props => (
    <React.Fragment>
        {props.isTeacher ? <TeacherHome /> : <StudentHome />}
    </React.Fragment>
)

export default home;