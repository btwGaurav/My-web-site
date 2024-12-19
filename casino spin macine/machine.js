// 1. deposit some money 
// 2. Determine number of lines to bet on
// 3. collect the bet ammount
// 4. spin the slot machine
//5. check if the  user won
// 6. give the user their winnings
// 7. play again
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

let deposit = () => {
  while (true) {
    let amount = prompt("Enter your Deposit Amount");
    let depositAmount = parseFloat(amount);
    console.log(depositAmount);

    if (isNaN(depositAmount) || depositAmount <= 0) {
      console.log("Invalid deposit amount");
    } else {
      return depositAmount;
    }
  }
};

let numberoflines = () => {
  while (true) {
    let lines = prompt("Enter the no. of lines you wanna bet on (1-3)");
    let numberOfLines = parseFloat(lines);
    console.log(numberOfLines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines");
    } else {
      return numberOfLines;
    }
  }
};

const getbet = (balance, totallines) => {
  while (true) {
    let bet = prompt("Enter the Amount you wanna bet on.");
    let betAmount = parseFloat(bet);
    console.log(betAmount);

    if (isNaN(betAmount) || betAmount <= 0 || betAmount > balance / totallines) {
      console.log("Invalid bet amount");
    } else {
      return betAmount;
    }
  }
};

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [[], [], []];
  for (let i = 0; i < COLS; i++) {
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }

  return reels;
};
const transpose = (reels) => {
  const rows = [];
  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }
  return rows;
};

const printRows = (rows) => {
  for (const row of rows){
    let rowstring = "";
    for (const [i, symbol] of row.entries()) {

    rowstring += symbol
    if (i != row.length - 1) {
      rowstring += " | ";
    }
    
    }
    console.log(rowstring)
  }

}

const getWinnings = (rows , bet ,lines) =>{
  let winnings = 0;
  for (let row = 0 ; row < lines; row++){
    const symbols = rows[row];
    let allSame = true ;


    for(const symbol of symbols[0]){
      if (symbol != symbols[0]) {
        allSame = false;
      break;
      }
      
    }
    if (allSame){
      winnings += bet * SYMBOL_VALUES[symbols[0]]
    }
  }
  return winnings
}


// Update the current balance in the HTML
const updateBalance = (balance) => {
  const balanceElement = document.querySelector(".currentbalance");
  balanceElement.textContent = `Balance: $${balance}`;
};

// Update the winnings in the HTML
const updateWinnings = (winnings) => {
  const winningsElement = document.querySelector(".winnings");
  winningsElement.textContent = `You won: $${winnings}`;
};

// Update the boxes with the current spin result
const updateBoxes = (rows) => {
  const boxes = document.querySelectorAll(".box");
  let boxIndex = 0;
  rows.forEach((row) => {
    row.forEach((symbol) => {
      boxes[boxIndex].textContent = symbol;
      boxIndex++;
    });
  });
};

// Main game logic
const game = () => {
  let balance = deposit();

  while (true) {
    updateBalance(balance);

    let totallines = numberoflines();
    let bet = getbet(balance, totallines);
    balance -= bet * totallines;

    const reels = spin();
    const rows = transpose(reels);
    updateBoxes(rows); // Update spin results in the boxes

    const winnings = getWinnings(rows, bet, totallines);
    balance += winnings;
    updateWinnings(winnings); // Update winnings in the HTML
    updateBalance(balance); // Update balance in the HTML

    if (balance <= 0) {
      alert("You ran out of money.");
      break;
    }

  }
};

