console.log("Hello World");

// Main game function
function playGame() {
  // Step 4: Score variables (moved inside playGame)
  let humanScore = 0;
  let computerScore = 0;

  // Step 2: Computer choice function
  function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 0.33) {
      return "rock";
    } else if (randomNumber < 0.66) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  // Step 3: Human choice function
  function getHumanChoice() {
    const choice = prompt("Enter your choice: rock, paper, or scissors");
    return choice.toLowerCase();
  }

  // Step 5: Play round function (modified)
  function playRound(humanChoice, computerChoice) {
    // Make human choice case-insensitive
    humanChoice = humanChoice.toLowerCase();

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    // Check for tie
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
      return "tie";
    }

    // Check all winning conditions for human
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
      return "human";
    } else {
      // If not tie and human didn't win, computer wins
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
      return "computer";
    }
  }

  // Play 5 rounds
  console.log("Starting Rock Paper Scissors Game! Best of 5 rounds.");

  for (let round = 1; round <= 5; round++) {
    console.log(`\n--- Round ${round} ---`);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    console.log(
      `Score after round ${round}: You ${humanScore} - ${computerScore} Computer`
    );
  }

  // Determine final winner
  console.log("\n--- Final Result ---");
  console.log(`Final Score: You ${humanScore} - ${computerScore} Computer`);

  if (humanScore > computerScore) {
    console.log("🎉 You win the game! 🎉");
  } else if (computerScore > humanScore) {
    console.log("💻 Computer wins the game! 💻");
  } else {
    console.log("🤝 It's a tie game! 🤝");
  }
}

// Start the game
playGame();
