/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve, reject) => {
        resolve(setTimeout(() => {
            console.log("resolved")
        }, n))
    })
}

console.log("before promise")
wait(2000);
console.log("after promise")