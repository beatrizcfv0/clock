// Target the hours, minutes, seconds and am, pm
const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");

// Get the real hour
function updateClock () {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    // Put a 0 in front if the number is 0-10
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // Change the text inside the hour, minutes and seconds
    hourElement.innerText = h;
    minuteElement.innerText = m;
    secondElement.innerText = s;
    ampmElement.innerText = ampm;

    // Call the function every second
    setTimeout(() => {
      updateClock()  
    }, 1000);
}

updateClock()