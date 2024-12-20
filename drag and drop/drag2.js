let lists = document.getElementsByClassName("text")
let right = document.querySelector(".right")
let left = document.querySelector(".left")
let right2 = document.querySelector(".right2")

for(let list of lists){

 list.setAttribute("draggable", true);


list.addEventListener("dragstart" , function(e){
    let selected = e.target;

    right.addEventListener("dragover" , function(e){
        e.preventDefault();


    })
    right.addEventListener("drop" , function(e){
        right.appendChild(selected)
    })
    left.addEventListener("dragover" , function(e){
        e.preventDefault();

    })
    left.addEventListener("drop" , function(e){
        left.appendChild(selected)
    })
right2.addEventListener("dragover", function(e){
    e.preventDefault();
})
right2.addEventListener("drop" , function(e){
    right2.appendChild(selected);
})

})}