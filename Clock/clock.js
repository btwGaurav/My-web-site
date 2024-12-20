const updateTime = () => {
    // Get the current date and time
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const date = now.getDate();
    const month = now.getMonth();
    const day = now.getDay();
    const days =[ "sunday" , "monday" , "tuesday" , "Wednesday" , "Thursday" , "Fiday" , "Saturday"]
    const Months =[ "January" , "Febuary" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "Octuber" , "November" , "December"] 
    
    console.log(month)

    // Helper function to add leading zero
    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    // Update HTML elements
    document.querySelector(".hours1").innerHTML = formatTime(hours);
    document.querySelector(".Minutes1").innerHTML = formatTime(minutes);
    document.querySelector(".seconds1").innerHTML = formatTime(seconds);
    document.querySelector(".dates1").innerHTML = date; // Date doesn't need leading zero
    document.querySelector(".day").innerHTML = days[day]
    document.querySelector(".month").innerHTML = Months[month]

};

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display the time immediately
updateTime();
