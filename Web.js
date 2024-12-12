var countDownDate = new Date("Dec 31, 2024 00:00:00").getTime();

function addLeadingZero(num) {
    return num < 10 ? "0" + num : num;
}

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Stop the timer if the countdown has ended
    if (distance <= 0) {
        clearInterval(x);

        // Optionally, display "00" for all elements or show a message
        document.getElementById("Days").innerHTML = "00";
        document.getElementById("Hours").innerHTML = "00";
        document.getElementById("Minutes").innerHTML = "00";
        document.getElementById("Seconds").innerHTML = "00";

        // Optionally show a message (replace with any desired behavior)
        document.getElementById("message").innerHTML = "Countdown finished!";
        return;
    }

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Add leading zeros
    days = addLeadingZero(days);
    hours = addLeadingZero(hours);
    minutes = addLeadingZero(minutes);
    seconds = addLeadingZero(seconds);

    // Update the HTML elements
    document.getElementById("Days").innerHTML = days;
    document.getElementById("Hours").innerHTML = hours;
    document.getElementById("Minutes").innerHTML = minutes;
    document.getElementById("Seconds").innerHTML = seconds;
}, 1000);
