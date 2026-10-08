let score = 0;
let questionNumber = 0;

let questions = [
    {
        question: 'What does "Hallo" mean?',
        answers: ["Hello", "Goodbye", "Thanks"],
        correct: "Hello"
    },

    {
        question: 'What does "Danke" mean?',
        answers: ["Please", "Thanks", "Good morning"],
        correct: "Thanks"
    },

    {
        question: 'What does "Tschüss" mean?',
        answers: ["Hello", "Goodbye", "Thank you"],
        correct: "Goodbye"
    },

    {
        question: 'Ich ____ Cola.',
        answers: ["trinken", "trinke", "trinkst"],
        correct: "trinke"
    }
];

function showQuestion() {

    document.getElementById("question").innerText =
        questions[questionNumber].question;

    let buttons = document.querySelectorAll("button");

    buttons[0].innerText = questions[questionNumber].answers[0];
    buttons[1].innerText = questions[questionNumber].answers[1];
    buttons[2].innerText = questions[questionNumber].answers[2];

    buttons.forEach(function(button) {
        button.disabled = false;
    });

    document.getElementById("result").innerText = "";
}

function answer(choice) {

    let buttons = document.querySelectorAll("button");

    buttons.forEach(function(button) {
        button.disabled = true;
    });

    if (choice == questions[questionNumber].correct) {

        score = score + 10;

        document.getElementById("result").innerText = "CORRECT!!!!";

    } else {

        document.getElementById("result").innerText = "Wrong!";

    }

    document.getElementById("score").innerText = "SCORE: " + score;

    questionNumber = questionNumber + 1;

    if (questionNumber < questions.length) {

        setTimeout(showQuestion, 1000);

    } else {

        setTimeout(function() {

            document.getElementById("question").innerText =
                "You finished the game!";

            document.getElementById("result").innerText =
                "Final Score: " + score;

            buttons.forEach(function(button) {
                button.style.display = "none";
            });

        }, 1000);
    }
}

showQuestion();