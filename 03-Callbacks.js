function greet(name){
    console.log(`Hello ${name}`);
}


// here greetFn is callback(synchronous)
// here withGreetHoc is HOF
function withGreetHof(greetFn){
    const name = "Anshul";
    greetFn(name);
}

withGreetHof(greet);

