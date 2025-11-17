// First Promise
// const promiseOne = new Promise(function (resolve, reject) {

//     // Do async task
//     // Connect to DB's
//     // call to DB's, cryptography, network
//     setTimeout(function () {
//         console.log("Async task -1 completed");
//         resolve(); // without this output will be :  'Async task completed' , means promise wasn't fully consumed
//     }, 1000)

// })

// // related to 'reject' 
// // .then gives a callback function, which automatically receives an argument which holds the data that was returned in it's promise  
// promiseOne.then(function () {
//     console.log("Promise 1 consumed")
// })


// // Second Promise
// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async task 2 completed")
//         resolve();
//     }, 1000)
// }).then(function () {
//     console.log("Promise 2 consumed")
// })


// // Third Promise
// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         // Since resolve is connected to '.then()' any argument passed to the resolve function can be accessed by '.then()'
//         resolve({ username: "Samarth", email: "samarthad@gmail.com" })
//     }, 1000)
// })

// promiseThree.then(function (user) {
//     console.log(user) // gives output : { username: 'Samarth', email: 'samarthad@gmail.com' }
// })




// // Fourth Promise : learning reject and chaining of '.then()'

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // toggle this from false->true and true->false, to understand better
//         let error = true;
//         if (!error) {
//             resolve({ username: "Samarth", password: "619" })
//         }
//         else {
//             reject("Error: Something Went wrong")
//         }

//     }, 1000)
// })


// // The below block will throw error, since we used 'reject' (and that else condition was invoked since error = true) but didn't add '.catch()' function after '.then()'
// // Conclusion of below block is that it won't work
// // const username = promiseFour.then((user)=>{
// //     console.log(user)
// //     return user.username;
// // })
// // console.log(username)


// // Concept implemented here is 'CHAINING' , mean can add as much .then() after .then()
// // but the data flow from hierarchy of chains of .then(), means the data returned in parent at the end will be passed to child  
// promiseFour.
// then((user) => {
//     console.log(user)
//     return user.username;
// }).
// then((username) => {
//     console.log(username)
// }).
// catch((error)=>{
//     console.log(error)
// }).
// finally(()=>{console.log("Promise resolved or rejected")})



// Fifth promise : instead of .then() and chaining we'll use async this time
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {

        let error = false;
        if (!error) {
            resolve({ username: "javascript", password: "619" })
        }
        else {
            reject("Error: JS Went wrong")
        }
    }, 1000)
})

// async function consumePromise5(){
//     const response = await promiseFive
//     console.log(response)
// }

// consumePromise5();// async-await can't handle errors on their own, it needs to be wrapped in try-catch block

async function consumePromise5() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromise5();