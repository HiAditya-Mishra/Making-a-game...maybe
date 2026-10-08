let score = 0;
let questionNumber = 0;
let selectedQuestions = [];

let questions = {
    greetings: [
        {
            question: 'What does "Hallo" mean?',
            answers: ["Hello", "Goodbye", "Thanks"],
            correct: "Hello"
        },
        {
            question: 'What does "Danke" mean?',
            answers: ["Please", "Thanks", "Sorry"],
            correct: "Thanks"
        },
        {
            question: 'What does "Tschuess" mean?',
            answers: ["Hello", "Goodbye", "Thank you"],
            correct: "Goodbye"
        },
        {
            question: 'What does "Guten Morgen" mean?',
            answers: ["Good night", "Good morning", "Good evening"],
            correct: "Good morning"
        },
        {
            question: 'What does "Guten Abend" mean?',
            answers: ["Good evening", "Good morning", "Goodbye"],
            correct: "Good evening"
        }
    ],

    numbers: [
        {
            question: 'What does "eins" mean?',
            answers: ["One", "Two", "Three"],
            correct: "One"
        },
        {
            question: 'What does "zwei" mean?',
            answers: ["Three", "Two", "Five"],
            correct: "Two"
        },
        {
            question: 'What does "drei" mean?',
            answers: ["Four", "Three", "Six"],
            correct: "Three"
        },
        {
            question: 'What does "fünf" mean?',
            answers: ["Five", "Four", "Seven"],
            correct: "Five"
        },
        {
            question: 'What does "zehn" mean?',
            answers: ["Eight", "Ten", "Nine"],
            correct: "Ten"
        }
    ],

    food: [
        {
            question: 'What does "Apfel" mean?',
            answers: ["Apple", "Bread", "Milk"],
            correct: "Apple"
        },
        {
            question: 'What does "Brot" mean?',
            answers: ["Cheese", "Bread", "Water"],
            correct: "Bread"
        },
        {
            question: 'What does "Milch" mean?',
            answers: ["Juice", "Milk", "Coffee"],
            correct: "Milk"
        },
        {
            question: 'What does "Käse" mean?',
            answers: ["Cheese", "Apple", "Egg"],
            correct: "Cheese"
        },
        {
            question: 'What does "Wasser" mean?',
            answers: ["Water", "Milk", "Tea"],
            correct: "Water"
        }
    ],

    verbs: [
        {
            question: 'Ich ____ Cola.',
            answers: ["trinken", "trinke", "trinkst"],
            correct: "trinke"
        },
        {
            question: 'Ich ____ Deutsch.',
            answers: ["lerne", "lernst", "lernen"],
            correct: "lerne"
        },
        {
            question: 'Ich ____ Musik.',
            answers: ["höre", "hörst", "hören"],
            correct: "höre"
        },
        {
            question: 'Du ____ Fußball.',
            answers: ["spiele", "spielt", "spielst"],
            correct: "spielst"
        },
        {
            question: 'Wir ____ Deutsch.',
            answers: ["sprechen", "spricht", "sprichst"],
            correct: "sprechen"
        }
    ]
};


function startGame(category) {

    score = 0;
    questionNumber = 0;

    if (category == "mixed") {

        selectedQuestions = [];

        selectedQuestions = selectedQuestions.concat(questions.greetings);
        selectedQuestions = selectedQuestions.concat(questions.numbers);
        selectedQuestions = selectedQuestions.concat(questions.food);
        selectedQuestions = selectedQuestions.concat(questions.verbs);

    } else {

        selectedQuestions = questions[category];

    }

    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";

    document.getElementById("score").innerText = "SCORE: 0";

    showQuestion();
}


function showQuestion() {

    document.getElementById("question").innerText =
        selectedQuestions[questionNumber].question;

    document.getElementById("questionNumber").innerText =
        "Question " + (questionNumber + 1) + " / " + selectedQuestions.length;

    let buttons = document.querySelectorAll("#gameScreen button");

    buttons[0].innerText = selectedQuestions[questionNumber].answers[0];
    buttons[1].innerText = selectedQuestions[questionNumber].answers[1];
    buttons[2].innerText = selectedQuestions[questionNumber].answers[2];

    buttons.forEach(function(button) {
        button.disabled = false;
        button.style.display = "inline-block";
    });

    document.getElementById("result").innerText = "";
}


function answer(choice) {

    let buttons = document.querySelectorAll("#gameScreen button");

    buttons.forEach(function(button) {
        button.disabled = true;
    });

    if (choice == selectedQuestions[questionNumber].correct) {

        score = score + 10;

        document.getElementById("result").innerText = "CORRECT!!!!";

    } else {

        document.getElementById("result").innerText = "Wrong!";

    }

    document.getElementById("score").innerText =
        "SCORE: " + score;

    questionNumber = questionNumber + 1;

    if (questionNumber < selectedQuestions.length) {

        setTimeout(showQuestion, 1000);

    } else {

        setTimeout(function() {

            document.getElementById("question").innerText =
                "You finished the game!";

            document.getElementById("questionNumber").innerText = "";

            document.getElementById("result").innerText =
                "Final Score: " + score;

            buttons.forEach(function(button) {
                button.style.display = "none";
            });

        }, 1000);
    }
}