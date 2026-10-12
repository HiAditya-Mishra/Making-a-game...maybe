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
    let currentQ = selectedQuestions[questionNumber];

    document.getElementById("question").innerText = currentQ.question;
    document.getElementById("questionNumber").innerText = 
        "Question " + (questionNumber + 1) + " / " + selectedQuestions.length;

    let optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.innerHTML = "";
    currentQ.answers.forEach(function(ans) {
        let btn = document.createElement("button");
        btn.innerText = ans;
        // When clicked, pass the answer text into our answer function
        btn.onclick = function() {
            answer(ans);
        };
        optionsContainer.appendChild(btn);
    });

    document.getElementById("result").innerText = "";
}

function answer(choice) {
    let currentQ = selectedQuestions[questionNumber];
    let allButtons = document.querySelectorAll("#optionsContainer button");

    allButtons.forEach(function(button) {
        button.disabled = true;
    });

    if (choice == currentQ.correct) {
        score = score + 10;
        document.getElementById("result").innerText = "CORRECT!!!!";
    } else {
        document.getElementById("result").innerText = "Wrong!";
    }

    document.getElementById("score").innerText = "SCORE: " + score;

    questionNumber = questionNumber + 1;
    if (questionNumber < selectedQuestions.length) {
        setTimeout(showQuestion, 1000);
    } else {
        setTimeout(function() {
            document.getElementById("question").innerText = "You finished the game!";
            document.getElementById("questionNumber").innerText = "";
            document.getElementById("result").innerText = "Final Score: " + score;
            document.getElementById("optionsContainer").innerHTML = "";
        }, 1000);
    }
}