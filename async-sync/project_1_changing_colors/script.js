// let colors = ['red', 'green', 'blue']
// let counter = 0;
// let div_id;
let intervalId ;

// let changeColor = function (){
//     div_id = window.document.querySelector("#myBox") ;
//     console.log(div_id)    
// }

// generating random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"

    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }

    return color ;
}

console.log(randomColor())

function changeColor() {
    div_id = window.document.querySelector("#myBox");
    // div_id.style.backgroundColor = colors[counter];
    div_id.style.backgroundColor = randomColor();
    
    // counter = (counter+1) % colors.length;
}

window.document.querySelector('#start').addEventListener('click',()=>{
    console.log("color changing started")
    if(!intervalId){
        intervalId = setInterval(changeColor,1000)
    }
});

window.document.querySelector('#stop').addEventListener('click',()=>{
        console.log("color changing stopped")
        clearInterval(intervalId)
        intervalId = null ;
    
});