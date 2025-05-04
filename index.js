let roll1 = 0; // Store Player 1's roll
let roll2 = 0; // Store Player 2's roll
let playerTurn = 1; // Track whose turn it is (1 for Player 1, 2 for Player 2)

function rollDice1() {
  if (playerTurn === 1) {
    var roll = Math.floor(Math.random() * 6) + 1; // Generate random number between 1 and 6
    var randomImage = "dice" + roll + ".jpg"; // dice1.jpg - dice6.jpg
    var randomImageSource = "./images/" + randomImage; // Path to the image
    var image1 = document.querySelector(".img1"); // Select Player 1's dice image
    image1.setAttribute("src", randomImageSource); // Update the image source
    roll1 = roll; // Store Player 1's roll
    document.querySelector("h1").innerHTML = "Player 2's Turn!"; // Update heading
    playerTurn = 2; // Switch to Player 2's turn
  }
}

function rollDice2() {
  if (playerTurn === 2) {
    var roll = Math.floor(Math.random() * 6) + 1; // Generate random number between 1 and 6
    var randomImage = "dice" + roll + ".jpg"; // dice1.jpg - dice6.jpg
    var randomImageSource = "./images/" + randomImage; // Path to the image
    var image2 = document.querySelector(".img2"); // Select Player 2's dice image
    image2.setAttribute("src", randomImageSource); // Update the image source
    roll2 = roll; // Store Player 2's roll

    // Determine the winner
    if (roll1 > roll2) {
      document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (roll2 > roll1) {
      document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } else {
      document.querySelector("h1").innerHTML = "It's a Draw!";
    }

    // Reset the game for the next round
    playerTurn = 1;
  }
}

// Add event listeners to the buttons
document.querySelector(".btn1").addEventListener("click", rollDice1); // Player 1's button
document.querySelector(".btn2").addEventListener("click", rollDice2); // Player 2's button


