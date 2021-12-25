//day and month array
let day = ["Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday", "Sunday"];
let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// this is for time clock
let currHour = document.getElementById('hours');
let currMin = document.getElementById('min');
let currSec = document.getElementById('sec');
let currWord = document.getElementById('word');

const currentTime = () => {
    let d = new Date();

    //    for date year month
    document.getElementById('day').innerHTML = day[d.getDay() - 1] + ',';
    document.getElementById('month').innerHTML = month[d.getMonth()];
    document.getElementById('date').innerHTML = d.getDate() + ',';
    document.getElementById('year').innerHTML = d.getFullYear();


    //    for current time
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    // AM and PM condition
    if (hour < 12) { currWord.innerHTML = 'AM' }
    else { currWord.innerHTML = 'PM' }

    // if time is less than 10 then we add zero (0) initial for better formating
    if (hour < 10) {
        hour = '0' + `${hour}`;
    }
    if (min < 10) {
        min = '0' + `${min}`;
    }
    if (sec < 10) {
        sec = '0' + `${sec}`;
    }
    currHour.innerHTML = hour + ':';
    currMin.innerHTML = min + ':';
    currSec.innerHTML = sec;
}
//update the javascript every milisecond
setInterval(currentTime, 1);

