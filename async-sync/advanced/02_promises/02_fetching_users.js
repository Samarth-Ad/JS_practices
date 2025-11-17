// async function getUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');

//         // console.log(response)
//         // const data = response.json() --> This alone don't work because JOSNifying takes time 
//         const data = await response.json()


//         console.log(data)
//     } catch (error) {
//         console.log(error);
//     }
// }

// getUsers()


//Alternate way of fetching users from above code block 

fetch('https://jsonplaceholder.typicode.com/users').
then((response)=>{
    return response.json()
}).
then((data)=>{
    console.log(data)
}).
catch((error)=>{
    console.log(error)
});