const dayy = document.getElementById("day");
const hourss = document.getElementById("hours");
const mins = document.getElementById("minutes");
const secs = document.getElementById("seconds");

function CountDown() {
    const countDate = new Date("July 29, 2021 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const gapDate = countDate - nowDate;
    // console.log(countDate);
    // console.log(nowDate);
    // console.log(gapDate);

    // How the time is work?
    const second = 1000;
    const minutes = second * 60;
    const hour = minutes * 60;
    const day = hour * 24;

    // calculate the date

    const textDay = Math.floor(gapDate / day);
    // console.log(textDay);
    dayy.innerHTML = textDay;
    
    const textHour = Math.floor((gapDate % day) / hour);
    // console.log(textHour);
    hourss.innerHTML = textHour;

    const textMinutes = Math.floor((gapDate % hour) / minutes);
    // console.log(textMinutes);
    mins.innerHTML = textMinutes;

    const textSeconds = Math.floor((gapDate % minutes) / second);
    // console.log(textSeconds);
    secs.innerHTML = textSeconds;


}

setInterval(CountDown,1000)