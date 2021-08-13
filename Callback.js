//give a random value between a limit value & add it with a varialble
let getRandom = (limit) =>{
    let random = Math.floor(Math.random() * limit) + 1;
    return random;
}

let addition = (n, limit, callback) => {
    let m = callback(limit);
    console.log(`\nThe addition of ${n} & ${m} is: ${n+m}`);
}

addition(7, 5, getRandom); //the syntax for callback while passing a function is also: function(arg1, arg2, callback_function) & NOT function(arg1, arg2, callback_function())

//student database
let greet = (name, callback) => {
    let num = callback(60);
    console.log(`Hello ${name}, Your Roll No is: ${num}`);
}

let getRoll = (limit) => Math.floor(Math.random() * limit) + 1;

setTimeout(greet, 3000, "Aditya", getRoll);