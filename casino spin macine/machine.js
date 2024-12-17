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
   A :2,
   B :4,
   C :6,
   D :8,
}

const SYMBOLE_VALUES = {
   A :5,
   B :4,
   C :3,
   D :2,
}











let despost = () =>{while(true){

 let amount = prompt("Enter your Deposit Amount")
    let despostiAmount = parseFloat(amount)
  console.log(despostiAmount)

  if(isNaN(despostiAmount) || despostiAmount <= 0 ){
    console.log("Invalid deposit amount")
   
  }
  else{
  return despostiAmount
  }
}
}

let numberoflines = () => {while(true){
    let lines = prompt("Enter the no. of lines you wanna bet on Between (1-3)")
    let numberoflines = parseFloat(lines)
  console.log(lines)

  if(isNaN(numberoflines) || numberoflines <= 0  || numberoflines > 3){
    console.log("Invalid Numbers of linet")
  }else{
      return numberoflines
      }

}}


const getbet = (balance , totallines) =>{while(true){
    let bet = prompt("Enter the Amount you wanna bet on.")
    let betamount = parseFloat(bet)
  console.log(betamount)

  if(isNaN(betamount) || betamount <= 0  || betamount > balance / totallines) {
    console.log("Invalid bet amount" )
  }else{
      return betamount
      }

}}

const spin = () =>{
  const symboles = [];
  for (const [symbol , count] of Object.entries(SYMBOLS_COUNT)){
   console.log(symbol , count)

  }
}

let balance = despost();
let totallines = numberoflines();
let bet = getbet(balance, totallines);

spin(); // Keep only spin here, if needed.




despost();
numberoflines();
getbet(balance,totallines);
