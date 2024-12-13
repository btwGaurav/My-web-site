const updateTime = () => {
    // Get the current date and time
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const date = now.getDate();

    // Helper function to add leading zero
    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    // Update HTML elements
    document.querySelector(".hours1").innerHTML = formatTime(hours);
    document.querySelector(".Minutes1").innerHTML = formatTime(minutes);
    document.querySelector(".seconds1").innerHTML = formatTime(seconds);
    document.querySelector(".dates1").innerHTML = date; // Date doesn't need leading zero
};

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display the time immediately
updateTime();
