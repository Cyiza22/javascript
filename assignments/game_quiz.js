const quizQuestions = [
    {
        question: "What is the capital of France?",
        choices: ["A) Madrid", "B) Berlin", "C) Paris", "D) Rome"],
        correctAnswer: "C"
    },
    {
        question: "Which language is used for web development?",
        choices: ["A) Python", "B) JavaScript", "C) C++", "D) Java"],
        correctAnswer: "B"
    },
    {
        question: "What is 2 + 2?",
        choices: ["A) 3", "B) 4", "C) 5", "D) 6"],
        correctAnswer: "B"
    }
];
let score = 0;
let totalNumberQuestion = quizQuestions.length;
function displayRandom(){
    if(quizQuestions.length === 0){
        console.log("there are no questions")
    }else{
        RandomNumber= Math.floor(Math.random()* totalNumberQuestion);
        RandomQuestion = quizQuestions[RandomNumber];
        console.log(`the random question is ${RandomQuestion.question} and choice of answers are ${RandomQuestion.choices}`);
        quizQuestions.splice(RandomNumber, 1);
        
    }
}
function scoring(question, answer) {
    if (!question) return;

    if (question.correctAnswer === answer.toUpperCase()) {
        console.log("Yay!! You got the right answer 🎉");
        score += 1;
    } else {
        console.log("You got the answer wrong ❌");
    }

    console.log(`Your current score: ${score}`);
    return score;
}
function quiz() {
    const prompt = require('prompt-sync')(); // Ensuring user input works

    let score = 0; // Reset score at the start

    // Shuffle the quizQuestions array to ensure unique questions each time
    let shuffledQuestions = quizQuestions.slice().sort(() => Math.random() - 0.5);

    for (let i = 0; i < shuffledQuestions.length; i++) {
        let questionObj = shuffledQuestions[i]; // Get the current question
        console.log(`Question ${i + 1}: ${questionObj.question}`);
        console.log(questionObj.choices.join(" ")); // Show choices

        let answer = prompt("Your answer: ").toUpperCase(); // Convert input to uppercase

        if (answer === questionObj.correctAnswer) {
            console.log("Correct! 🎉");
            score += 1;
        } else {
            console.log(`Wrong! The correct answer was: ${questionObj.correctAnswer}`);
        }
        console.log(); // Blank line for readability
    }

    console.log(`Quiz Over! Your final score is: ${score}/${quizQuestions.length}`);
}

displayRandom();
scoring("Which language is used for web development?", "b");
quiz()
