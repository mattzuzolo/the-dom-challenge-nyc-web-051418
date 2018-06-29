//code here

let timer_element = document.getElementById("counter");
let timer_number = 0;
let pauser = document.getElementById("pause");

var interval;
let currently_counting = true;

document.addEventListener("DOMContentLoaded", (function(event) {

    pauser.addEventListener("click", function(event) {
        // debugger;

        if (currently_counting){
          clearInterval(interval)
          currently_counting = !currently_counting;

          console.log('we should be pausing now', currently_counting
        );
          return currently_counting;


        } else {
          interval = setInterval( function () {
            timer_number++;
            timer_element.innerHTML = timer_number;
            console.log(timer_number);
          }, 1000);
          currently_counting = !currently_counting
          return currently_counting
        }
    });

    if (currently_counting) {
      interval = setInterval( function () {
        timer_number++;
        timer_element.innerHTML = timer_number;
      }, 1000);
    }
    else {
      debugger;
        clearInterval(interval);
    }
}));



let manual_decrement = document.getElementById("-");
let manual_increment = document.getElementById("+");

function decrementer() {
  timer_number--;
  timer_element.innerText = timer_number;
}

manual_decrement.addEventListener("click", function(){
  decrementer()
});

function incrementer() {
  timer_number++;
  timer_element.innerText = timer_number;
}

manual_increment.addEventListener("click", function(){
  incrementer()
});


let heart = document.getElementById('<3');
let heartList = document.getElementsByClassName('likes');
heartList = heartList[0]
let heartCounter = 0;

function createHeart() {
  var li = document.createElement("li");
  li.innerText = `${timer_number} has been liked ${++heartCounter} times`
  heartList.appendChild(li);

}

heart.addEventListener("click", function(){
  createHeart()
});

let submit_comment= document.getElementById("submit")
let input=document.getElementsByTagName("input")[0]
let form = document.getElementById("comment-form")
let inputWithId = document.getElementById("input-id")
let comment_counter = 0;

submit_comment.addEventListener("click",function (event) {
  form.innerHTML += `<li>${form.children[0].value}</li>`
});




// }));



// let manual_deccrement = document.getElementById("-");
//
// if (manual_deccrement) {
//
//   timer_number--;
//   timer_element.innerHTML = timer_number;
//
// }


// resumer.addEventListener("click",function(event) {
//   debugger;
//   resumer.id = "pauser"
//   let pauser = document.getElementById("pauser");
//   pauser.innerText="pause";
//
//   interval = setInterval( function () {
//     timer_number++;
//     timer_element.innerHTML = timer_number;
//   }, 1000);
//
// });
