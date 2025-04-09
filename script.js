const randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const input = document.getElementById("guessInput").value;
  const result = document.getElementById("result");

  if (parseInt(input) === randomNumber) {
    result.textContent = "Правильно! 🎉";
    result.style.color = "green";
  } else {
    result.textContent = "Неправильно. Попробуй ещё!";
    result.style.color = "red";
  }
}
