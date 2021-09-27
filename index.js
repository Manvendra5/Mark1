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
    },
    {
    question: "Where do I work?  ",
    answer: "Infosys",
  },
  {
    question: "My favourite movie?  ",
    answer: "Interstellar",
  },
];

var highScores = [
    {
        name: "Manvendra",
        score: 5,
    },
    {
        name: "Siddharth",
        score: 4,
    },
];

//Play funtion: This function will start the quiz
function play(questions) {
    var userName = readlineSync.question("What's your name? ");
    console.log("Welcome " + userName + " to this quiz on Manvendra");
    console.log("------------------------------------------------------");

    for (var i = 0; i < questions.length; i += 1) {
        var currentQuestion = questions[i];
        var userAnswer = readlineSync.question(currentQuestion["question"]);

        if (userAnswer.toUpperCase() === currentQuestion.answer.toUpperCase()) {
            score = score + 1;
            console.log("You are correct!");
            console.log("Your Current Score is ", score);
        }
        else {
            console.log("You are wrong!");
            console.log("Your Current Score is ", score);
        }
    }

    console.log("------------------------------------------------------");

    console.log(`
Your Final Score is ${score}
Top Standings:
`
    );
    for (var i = 0; i < highScores.length; i += 1) {
        var scorer = highScores[i];
        console.log(scorer.name + " : " + scorer.score);
    }

    console.log("If you think your name should be in that list, ping me I will update the High Scores.");

    console.log(`
Thanks for playing. 
Refresh the page to play again.
For suggestions to improve this quiz, ping me!`);
};

play(questions);