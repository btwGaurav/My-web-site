const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOL_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

// Prompt for deposit amount
const deposit = () => {
  while (true) {
    const amount = window.prompt("Enter your deposit amount:");
    const depositAmount = parseFloat(amount);

    if (isNaN(depositAmount) || depositAmount <= 0) {
      alert("Invalid deposit amount. Please try again.");
    } else {
      return depositAmount;
    }
  }
};

// Prompt for number of lines to bet on
const numberOfLines = () => {
  while (true) {
    const lines = window.prompt("Enter the number of lines to bet on (1-3):");
    const numberOfLines = parseInt(lines);

    if (isNaN(numberOfLines) || numberOfLines < 1 || numberOfLines > 3) {
      alert("Invalid number of lines. Please enter a number between 1 and 3.");
    } else {
      return numberOfLines;
    }
  }
};

// Prompt for bet amount
const getBet = (balance, totalLines) => {
  while (true) {
    const bet = window.prompt(`Enter your bet amount (Max: ${balance / totalLines}):`);
    const betAmount = parseFloat(bet);

    if (isNaN(betAmount) || betAmount <= 0 || betAmount > balance / totalLines) {
      alert("Invalid bet amount. Please try again.");
    } else {
      return betAmount;
    }
  }
};

// Generate random slot machine spin
const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [];
  for (let i = 0; i < COLS; i++) {
    const reelSymbols = [...symbols];
    const reel = [];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      reel.push(reelSymbols[randomIndex]);
      reelSymbols.splice(randomIndex, 1);
    }
    reels.push(reel);
  }

  return reels;
};

// Transpose reels to rows
const transpose = (reels) => {
  const rows = [];
  for (let i = 0; i < ROWS; i++) {
    const row = reels.map((reel) => reel[i]);
    rows.push(row);
  }
  return rows;
};

// Print rows in the console
const printRows = (rows) => {
  rows.forEach((row) => {
    console.log(row.join(" | "));
  });
};

// Calculate winnings
const getWinnings = (rows, bet, lines) => {
  let winnings = 0;
  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    if (symbols.every((symbol) => symbol === symbols[0])) {
      winnings += bet * SYMBOL_VALUES[symbols[0]];
    }
  }
  return winnings;
};

// Update HTML elements
const updateBalance = (balance) => {
  const balanceElement = document.querySelector(".currentbalance");
  if (balanceElement) balanceElement.textContent = `Balance: $${balance}`;
};

const updateWinnings = (winnings) => {
  const winningsElement = document.querySelector(".winnings");
  if (winningsElement) winningsElement.textContent = `You won: $${winnings}`;
};

const updateBoxes = (rows) => {
  const boxes = document.querySelectorAll(".box");
  let boxIndex = 0;
  rows.forEach((row) => {
    row.forEach((symbol) => {
      if (boxes[boxIndex]) boxes[boxIndex].textContent = symbol;
      boxIndex++;
    });
  });
};

// Main game logic
const game = () => {
  let balance = deposit();

  while (true) {
    updateBalance(balance);

    const totalLines = numberOfLines();
    const bet = getBet(balance, totalLines);
    balance -= bet * totalLines;

    const reels = spin();
    const rows = transpose(reels);
    printRows(rows);
    updateBoxes(rows);

    const winnings = getWinnings(rows, bet, totalLines);
    balance += winnings;

    updateWinnings(winnings);
    updateBalance(balance);

    if (balance <= 0) {
      alert("You ran out of money!");
      break;
    }

    const playAgain = window.confirm("Do you want to play again?");
    if (!playAgain) break;
  }
};

game();
