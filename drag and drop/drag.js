const lists = document.querySelectorAll(".text");
let rightbox = document.querySelector(".right");
let leftbox = document.querySelector(".left");
for(let list of lists){

    // Make each list item draggable
    list.setAttribute("draggable", true);


    list.addEventListener("dragstart",function(e){

        let selected = e.target;
        rightbox.addEventListener("dragover" , function(e){
            e.preventDefault();
        })
        rightbox.addEventListener("drop" , function(e){
            rightbox.appendChild(selected);
            selected = null;
        })
        leftbox.addEventListener("dragover" , function(e){
            e.preventDefault();
        })
        leftbox.addEventListener("drop" , function(e){
            leftbox.appendChild(selected);
            selected = null;
        })
    })



}
