// document.getElementById('monkey').onclick = function(){
//     alert("this is a monkey")
// }

// const { log } = require("console")


// // Event propagation : Bubbling-Up
// document.getElementById('images').addEventListener('click',function(e){
//     // alert("This is a moneky")
//     console.log("One of the images from list was invoked")
// },false)

// document.getElementById('monkey').addEventListener('click',function(e){
//     // alert("This is a moneky")
//     console.log("monkey clicked")
// },false)
// //output : 
// // monkey clicked
// // One of the images from list was invoked


// // Event propagation : Capturing = true means from global to global's instance event'll be captured 
// document.getElementById('images').addEventListener('click',function(e){
//     // alert("This is a moneky")
//     console.log("One of the images from list was invoked")
// },true)

// document.getElementById('monkey').addEventListener('click',function(e){
//     // alert("This is a moneky")
//     console.log("monkey clicked")
// },true)
// //output : 
// // One of the images from list was invoked
// // monkey clicked



// // Making independent events 
// document.getElementById('images').addEventListener('click',function(e){
//     // alert("This is a moneky")
//     console.log("One of the images from list was invoked")
// },false)

// document.getElementById('monkey').addEventListener('click',function(e){
//     // alert("This is a moneky")
//     console.log("monkey clicked")
//     e.stopPropagation()
// },false)
// //output : 
// // monkey clicked


// console.log(window.document.querySelector("#images"))
const undoStack = []


window.document.querySelector("#images").addEventListener(
    'click',
    function (e) {

        // if (e.target.tagName === 'IMG') {
        //     console.log(e.target.parentNode) // here the parent node is <li></li> 
        //     undoStack.push(e.target.parentNode)
        //     e.target.parentNode.remove()
        // }

        console.log(e.target.parentNode) // here the parent node is <li></li> 
        undoStack.push(e.target.parentNode)
        e.target.parentNode.remove()
        console.log(e.type)

    },
    false
);

window.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key == 'z') {
        const lastRemoved = undoStack.pop();

        if (lastRemoved) {
            console.log(e.type)
            this.document.querySelector("#images").appendChild(lastRemoved)
        }
    }
}, false);


// more to study further
// type, timestamp, defaultPrevented
// clientX, clientY, screenX, screenY
// altkey, crtlkey, shiftkey, keyCode