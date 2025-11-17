// const reqUrl = "https://api.github.com/users/Samarth-Ad";
// const xhr = new XMLHttpRequest();



// xhr.open("GET", reqUrl);

// // jab jab state change hoga tab tab ye function call karna
// // This is also a part of async programming
// xhr.onreadystatechange = function () {
//     console.log(xhr.readyState);

//     if (xhr.readyState === 4) {
//         let data = this.responseText;
//         console.log(data);
//         // 90% of the time the response data is always in form of STRING
//         console.log(typeof data);

//         data = JSON.parse(data);
//         console.log(typeof data);
//         console.log(data);
//     }
// };

// xhr.send();



// for image and followers card 
const reqURL2 = 'https://api.github.com/users/hiteshchoudhary'

const xhr2 = new XMLHttpRequest();

xhr2.open('GET', reqURL2);
xhr2.send()

let data2;

xhr2.onreadystatechange = function () {
    if (xhr2.readyState === 4) {
        // JSONify
        data2 = JSON.parse(this.responseText);
        
        try{
            window.document.getElementById("profileImage").src = data2.avatar_url;
            console.log("Fetched from Github")
        }
        catch (error) {
            console.log(error);
            window.document.getElementById("profileImage").src = "https://avatars.githubusercontent.com/u/11613311?v=4";
        }

        try {
            window.document.getElementById("followers").textContent = data2.followers
            console.log("Fetched from Github")
        }
        catch (error){
            console.log(error);
            window.document.getElementById("followers").textContent = '51747'
        }
    }
}


