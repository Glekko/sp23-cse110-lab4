function printCurrentTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

// Call the printCurrentTime function every second
setInterval(printCurrentTime, 1000);
