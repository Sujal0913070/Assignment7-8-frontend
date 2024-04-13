document.addEventListener("DOMContentLoaded", function () {
    const diceImages = [
      "dice1.png",
      "dice2.png",
      "dice3.png",
      "dice4.png",
      "dice5.png",
      "dice6.png",
    ];
  
    const dice1 = document.getElementById("dice1");
    const dice2 = document.getElementById("dice2");
    const rollBtn = document.getElementById("rollBtn");
    const scoreDisplay = document.getElementById("score");
  
    let player1Score = 0;
    let player2Score = 0;
  
    rollBtn.addEventListener("click", rollDice);
  
    function rollDice() {
      const dice1Value = Math.floor(Math.random() * 6) + 1;
      const dice2Value = Math.floor(Math.random() * 6) + 1;
  
      dice1.src = diceImages[dice1Value - 1];
      dice2.src = diceImages[dice2Value - 1];
  
      const difference = Math.abs(dice1Value - dice2Value);
  
      if (dice1Value > dice2Value) {
        player1Score += difference;
      } else if (dice1Value < dice2Value) {
        player2Score += difference;
      }
  
      scoreDisplay.textContent = `Player 1 Score: ${player1Score} | Player 2 Score: ${player2Score}`;
  
      checkWinner();
    }
  
    function checkWinner() {
      const winningScore = 20; // Change this to the specific number
  
      if (player1Score >= winningScore) {
        alert("Player 1 Wins!");
        resetGame();
      } else if (player2Score >= winningScore) {
        alert("Player 2 Wins!");
        resetGame();
      }
    }
  
    function resetGame() {
      player1Score = 0;
      player2Score = 0;
      scoreDisplay.textContent = `Player 1 Score: ${player1Score} | Player 2 Score: ${player2Score}`;
    }
  });
  