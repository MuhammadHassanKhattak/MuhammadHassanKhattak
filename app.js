let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satuday"]
addZero = (i) => {
    if (i < 10) {
        i = "0" + i
    }
    return i;
}
let d;
let time;
let date;
setInterval(() => {
    d = new Date();

    time = `${addZero(d.getHours())} : ${addZero(d.getMinutes())} : ${addZero(d.getSeconds())}`
    date = `${days[d.getDay()]} , ${addZero(d.getDate())} , ${months[d.getMonth()]} , ${d.getFullYear()}`
    document.getElementById('time').innerText = time + " on " + date;
});

