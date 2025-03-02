
//writing my own version of promise 

//the promise object represents a value that comes back after work is completed

//lets initialize three states of the work
const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;
// the promise will be one of these three states

//lets create our promise object
//we gave it an executor function(the function that actually do the work)

function CustomPromise(executor) {

    //the first thing the promise needs is its current state
    //set the state to pending
    let state = PENDING;

    //declare the value that the promise is waiting for
    let value = null;

    //deal with the first problem
    //the (handling functions)callback functions (put them inside an array) to run when the work is completed
    let handlers = [];

    //more than one function to handle things when something goes wrong
    let catches = [];

    //ADD a function called resolve
    //that means the work is done and I have a result
    //this function will get called by the executor
    function resolve(result) {
        //if we are not pending then not going to resolve
        if (state !== PENDING) return;
        //the value will not changed once its been set

        //now becuase we are in pending state and you call resolve we assume that the work is  done
        state = FULFILLED;
        //and set our internal value to whatever result the executor function gave to me
        value = result;

        //the last thing
        //take all the handlers and run them , and gives all these handler functions the value that just came back
        handlers.forEach((h) => h(value));
    }

    //we can do something similar if we have an error
    function reject(err) {
        //never call it when the promise haas finished 
        if (state !== PENDING) return;

        state = REJECTED;
        value = err;

        //call each error handling functions and give it that err message
        catches.forEach((c) => c(err));
    }

    //.then takes whatever the callback function is and does one or two things
    this.then = function (callback) {
        // if we called then and the promise is already resolved 
        //that means we already know the value
        if (value === FULFILLED) {
            callback(value);
        } else {
            //if we are still waiting
            //then we simply add the callback to the array of callbacks(callback) that we are going to execute when its done
            handlers.push(callback);
        }

    }

    //the last hing in promise
    //run the executer function

    executor(resolve, reject);
}
//a promise represents a process thats already running
//so when we create a promise that actually starts the work
//the creation of promise runs the executor function that we give it


//lets create my actual executor function 
const doWork = (res, rej) => {
    setTimeout(() => { res("Hello World") }, 1000)
}

//when I create the promise it will represent some future value
let someText = new CustomPromise(doWork);

//lets add some handler
//  they will be put inside the array of handlers using .then

someText.then((val) => {
    console.log("1st log : " + val)
});
someText.then((val) => {
    console.log("2st log : " + val)
});

//we can add another handler after we know the promise is resolved

setTimeout(() => {
    someText.then((val) => {
        console.log("3rd log : " + val);
    });
}, 900); //????

//-----------------------------------------


