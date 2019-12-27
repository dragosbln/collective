export const securedRoutes = [
    {
        path: '/home/active',
        label: 'Active',
        showOnNavbar: true
    },
    {
        path: '/home/history',
        label: 'History',
        showOnNavbar: true
    },
    {
        path: '/home/statistics',
        label: 'Statistics',
        showOnNavbar: true
    },
    {
        path: '/game',
        label: '',
        showOnNavbar: false
    }
];

export const teacherRoutes = [
    {
        path: '/home/my-quizzes',
        label: 'My Quizzes',
        showOnNavbar: true
    },
    {
        path: '/home/create-quiz',
        label: 'Create a Quiz',
        showOnNavbar: true
    },
    {
        path: '/home/manage-questions',
        label: 'Manage Questions',
        showOnNavbar: true
    },
    {
        path: '/game',
        label: '',
        showOnNavbar: false
    }
];

export const unsecuredRoutes = [
    {
        path: '/contact',
        label: 'Contact',
        showOnNavbar: true
    }, {
        path: '/login',
        label: 'Login',
        showOnNavbar: true
    }, {
        path: '/register',
        label: 'Sign UP',
        showOnNavbar: true
    }
];