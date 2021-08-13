//greet after 3 secs
let greet = (name) => console.log(`Hello ${name}`);

//setTimeout(function, timeDelay, arg1, arg2, ...)
setTimeout(greet, 1000, "Aditya"); //if you have parameters to pass through a function, dont do it like greet(`Aditya`), Pass them seperately
console.log("This will show first");


//update time every 3 secs

let showtime = () => {
    let dateTime = new Date();
    let date1 = dateTime.toDateString();
    let date2 = dateTime.toDateString();
    let iso = dateTime.toISOString();
    let time = dateTime.toLocaleTimeString();

    console.log(`DATE1: ${date1}\nDATE2: ${date2}\nISO: ${iso}\nTIME: ${time}`);

    setTimeout(showtime, 1000);
}

showtime();