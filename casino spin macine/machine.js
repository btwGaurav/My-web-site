// 1. deposit some money 
// 2. Determine number of lines to bet on
// 3. collect the bet ammount
// 4. spin the slot machine
//5. check if the  user won
// 6. give the user their winnings
// 7. play again


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

let numberoflines = () => {
    let lines = prompt("Enter the no. of lines you wanna bet on Between (1-3)")
    let l = parseFloat(amount)
  console.log(despostiAmount)

  if(isNaN(despostiAmount) || despostiAmount <= 0 ){
    console.log("Invalid deposit amount")

}

despost()