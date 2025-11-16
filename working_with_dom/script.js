// alert("TMKC")
// console.dir(document.body)
// console.log(document.body)


// Accessing elements
// console.dir(window.document.getElementById("div1"))
// console.log(window.document.getElementById("div1"))


// let heading = window.document.getElementById("div1")
// console.log(heading)

// let class_obj = window.document.getElementsByClassName("MyClass")
// console.dir(class_obj)


// // Query Selector
// let firstElement = document.querySelector("h4")
// console.dir(firstElement)

// let AllElement = document.querySelectorAll("h4")
// console.dir(AllElement)


// let div = window.document.querySelector("div")

let divs = document.querySelectorAll(".box")
console.log(divs)

// divs[0].innerText = "new 1"
// divs[1].innerText = "new 2"
// divs[2].innerText = "new 3"
var i = 0 ;
for(div of divs){
    div.innerText = `new value ${i}`;
    i++;
}