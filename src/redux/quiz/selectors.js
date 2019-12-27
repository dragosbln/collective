export const selectors = {
    getTeacherQuizList: state => state.quiz.teacherQuizzes,
    getActiveQuizList: state => state.quiz.activeQuizzes,
    getListLoader: state => state.quiz.listLoader,
    getButtonLoader: state => state.quiz.buttonLoader,
    getDialogLoader: state => state.quiz.dialogLoader,
    getBigLoader: state => state.quiz.bigLoader
};