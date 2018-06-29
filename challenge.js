//code here


let timer_element = document.getElementById("counter");


document.addEventListener("DOMContentLoaded", (function(event) {

    let timer_number = 0;
    const interval = setInterval( function () {
      timer_number++;
      timer_element.innerHTML = timer_number;

    }, 1000);

    // timer_element.innerHTML += timer_number;

}));



//
// var i = 1;
//
// var interval = setInterval( increment, 1000);
//
// function increment(){
//     i = i % 360 + 1;
// }
