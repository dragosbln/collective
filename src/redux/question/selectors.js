export const selectors = {
    getQuestionList: state => state.question.questions,
    getListLoader: state => state.question.listLoader,
    getButtonLoader: state => state.question.buttonLoader,
    getDialogLoader: state => state.question.dialogLoader,
    getBigLoader: state => state.question.bigLoader,
    getTeacherCategoryList: state => state.question.teacherCategories,
};
