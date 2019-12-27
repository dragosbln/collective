import { AvatarMan1, AvatarMan2, AvatarWoman1, AvatarWoman2, AvatarWoman3 } from '../assets/images/avatars';

export const teacher ={
    id: 1,
    position: 'teacher',
}

export const quizzes = [
    {
        id: 1,
        title: 'Fun quiz',
        professor: 'Bufny',
        time: '45 minutes',
        description: "It's bufny. U know it's gonna be fun. Like, actual fun, mate. For real now, actually actual fun!!. Like, actual fun, mate. For real now, actually actual fun!!"
    },
]

export const teacherQuizzes = [
    {
        id: 1,
        title: 'Teacher quiz',
        values: "",
        time: '20/09/2019',
        groups: [
            {
                name: 'VI B'
            },
            {
                name: 'VII B'
            }
        ],
        category: 'geografie'
    },
]

export const currentUser = {
    id: 1,
    firstName: "First",
    lastName: "Name",
    image: null,
    email: "email@email.com",
    position: 'teacher',
    password: "asdfghjkl",
}

export const question = {
	"text" : "qestiion text",
	"type" : "mutiple answers",
	"answers": [
		{ 
			"text" : "answer1",
			"isCorrect": "false"
		},
		{ 
			"text" : "answer2",
			"isCorrect": "false"
		},
		{ 
			"text" : "answer3",
			"isCorrect": "false"
		},
		{ 
			"text" : "answer4",
			"isCorrect": "true"
		}
	]
}

export const leaderboardPlayers = [
    {
        "rank" : 1,
        "firstName" : "Ana",
        "correctAnswer": true,
        "points" : 500,
        "rankDifference" : 2
    },
    {
        "rank" : 2,
        "firstName" : "Irina",
        "correctAnswer": true,
        "points" : 450,
        "rankDifference" : 2
    },
    {
        "rank" : 3,
        "firstName" : "Alex",
        "correctAnswer": false,
        "points" : 400,
        "rankDifference" : -3
    },
    {
        "rank" : 4,
        "firstName" : "Geo",
        "correctAnswer": false,
        "points" : 350,
        "rankDifference" : 0
    },
]



export const players = [
    {
        "id":'1', 
        "username":'player1',
        "avatar": AvatarMan1
    },
    {
        "id":'2', 
        "username":'player2',
        "avatar": AvatarMan2
    },
    {
        "id":'3', 
        "username":'player3',
        "avatar": AvatarWoman1
    },
    {
        "id":'4', 
        "username":'player4',
        "avatar": AvatarWoman2
    },
    {
        "id":'5', 
        "username":'player5',
        "avatar": AvatarWoman3
    },     
]

export const categories = [
    {
        id: 1,
        name: 'science'
    },
    {
        id: 2,
        name: 'math'
    },
    {
        id: 3,
        name: 'biology'
    }
]