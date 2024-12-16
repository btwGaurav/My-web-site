let boxes= document.querySelectorAll(".hi");
let reset = document.querySelector(".reset");

let turnO = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    
 box.addEventListener("click", () =>
{
    console.log("Button was clicked");
   
    if (turnO === true) {
        box.innerText = "X"
        turnO = false ;
     

        
    }
    else {
        box.innerText= "O";
        turnO = true;      
        
    }

   box.disabled = true ;
  
   checkwinner();
    
})
    
});


const checkwinner =  () => {
    for (let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                alert("Winner" , pos1Val )}

                

            }
    }
}
alert
