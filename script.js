const randomNumber = Math.floor(Math.random() * 10) + 1;
let gameStarted = false;

document.getElementById('startGame').addEventListener('click', function() {
    if (!gameStarted) {
        document.getElementById('gameBlock').classList.remove('hidden');
        this.textContent = 'ИГРА ИДЁТ...';
        gameStarted = true;
    }
});

function checkGuess() {
    const input = document.getElementById("guessInput").value;
    const result = document.getElementById("result");

    if (parseInt(input) === randomNumber) {
        result.textContent = "Правильно! 🎉 Пузиляпус доволен!";
        result.style.color = "#4ecca3";
    } else {
        result.textContent = "Неправильно. Пузиляпус хмурится... Попробуй ещё!";
        result.style.color = "#e94560";
    }
}