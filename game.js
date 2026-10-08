let score = 0;

function answer(choice) {
    if (choice=="Hello"){
        score = score + 10;
        document.getElementById("result").innerText = 'CORRECT!!!!';
    } else {
        document.getElementById("result").innerText = "Wrong! Try again.";
    }
    document.getElementById("score").innerText = "Score: " + score;
}