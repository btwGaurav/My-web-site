let menu = document.querySelector(".home");
let menubox = document.querySelector(".slide");
let body = document.body;
let isOpen = false;
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

document.getElementById("switch-css").addEventListener("click", function() {
    const link = document.getElementById("theme-stylesheet");
    const currentHref = link.getAttribute("href");

    // Switch to a different stylesheet
    if (currentHref === "index2.css") {
        link.setAttribute("href", "index.css");
    } else {
        link.setAttribute("href", "index2.css");
    }
});





const toggle = (e) => {
    e.stopPropagation(); // Prevent body click event from firing
    if (isOpen) {
        menubox.style.display = "none";
        menu.style.color = "white";
        menu.style.border = "2px solid white";
    } else {
        menubox.style.display = "flex";
        menu.style.color = "black";
        menu.style.border = "2px solid black";
    }
    isOpen = !isOpen;
};

const closeMenu = () => {
    if (isOpen) {
        menubox.style.display = "none";
        menu.style.color = "white";
        menu.style.border = "2px solid white";
        isOpen = false;
    }
};

const updateTime = () => {
    // Get the current date and time
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const date = now.getDate();
    const month = now.getMonth();
    const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Convert to 12-hour format and determine AM/PM
    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 0 to 12 for 12 AM

    // Helper function to add leading zero
    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    // Update HTML elements
    document.querySelector(".hours").innerHTML = 
    `${formatTime(hours)}<span>${period}</span> Hours`;
  
    document.querySelector(".minutes").innerHTML = formatTime(minutes) + " Min";
    document.querySelector(".seconds").innerHTML = `<span class="yo">${formatTime(seconds)}</span> Sec`;
    document.querySelector(".date").innerHTML = date + "<br>" + Months[month];
};

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display the time immediately
updateTime();

menu.addEventListener("click", toggle);
body.addEventListener("click", closeMenu);