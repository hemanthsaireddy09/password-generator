// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let attemptedNumbers = [];

// Function to handle guesses
function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = Number(guessInput.value);
    const result = document.getElementById('result');
    const attemptsDisplay = document.getElementById('attempts');
    const attemptedNumbersDisplay = document.getElementById('attemptedNumbers');

    // Check for empty input or out-of-range numbers
    if (!guessInput.value || guess < 1 || guess > 100) {
        result.textContent = 'Please enter a number between 1 and 100.';
        result.style.color = 'red';
        return;
    }

    // Increment attempt count and store the guess
    attempts++;
    if (!attemptedNumbers.includes(guess)) {
        attemptedNumbers.push(guess);
    }

    // Display attempted numbers and attempts count
    attemptedNumbersDisplay.textContent = `Attempted Numbers: ${attemptedNumbers.join(', ')}`;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;

    // Check if guess is correct, too high, or too low
    if (guess === randomNumber) {
        result.textContent = 'Congratulations! You guessed it right!';
        result.style.color = 'green';
        setTimeout(resetGame, 30000); // Auto-reset after 30 seconds if correct guess
    } else if (guess > randomNumber) {
        result.textContent = 'Too high! Try again.';
        result.style.color = 'red';
    } else {
        result.textContent = 'Too low! Try again.';
        result.style.color = 'red';
    }

    // Clear input field
    guessInput.value = '';
}

// Function to reset the game
function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptedNumbers = [];
    
    // Reset display elements
    document.getElementById('guessInput').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('attempts').textContent = '';
    document.getElementById('attemptedNumbers').textContent = '';
}

// Adding event listeners for "Enter" key and manual reset button
document.getElementById('guessInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkGuess();
    }
});
document.getElementById('resetButton').addEventListener('click', resetGame);
