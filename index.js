var readlineSync = require('readline-sync');
var score = 0;

var questions = [
    {
        question: "What's my favourite football club?  ",
        answer: "Chelsea",
    },
    {
        question: "My Favourite Super Hero?  ",
        answer: "Batman",
    },
    {
        question: "Where do I live?  ",
        answer: "Indore",
    }
];

var highScores = [
    {
        name: "Manvendra",
        score: 3,
    },
    {
        name: "Siddharth",
        score: 2,
    },
];