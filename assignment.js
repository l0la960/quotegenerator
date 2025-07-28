let dice = document.querySelector(".dice")
let adviceText = document.querySelector(".advice")
let addNumber = document.querySelector(".heading-number")


let adviceBank = [
    "Be yourself; everyone else is already taken.",
 "Judge everyone and everything for yourself.",
  "Learning never exhausts the mind.",
  "The only journey is the one within.",
   "Where 1there is hatred, let me sow love.",
  " Live as if you were to die tomorrow. Learn as if you were to live forever.",
  "We accept the love we think we deserve." ,
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart." ,
 "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine." ,
 "It's not the load that breaks you down, it's the way you carry it." ,
 "Do not fear failure but rather fear not trying." ,
 "You cannot change anyone, but you can be the reason someone changes" ,
 "Life becomes easier and more beautiful when we can see the good in other people." ,
 "It is better to be hated for what you are than to be loved for what you are not." , 
 "Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin." ,
 "You can have it all. Just not all at once." ,
 "Success is not final, failure is not fatal: it is the courage to continue that counts.",
 "Try not to become a man of success. Rather become a man of value." ,
 "Sometimes it takes a good fall to really know where you stand" , 
 "It is hard to fail, but it is worse never to have tried to succeed."
]

dice.addEventListener("click", () => {
    //get  a random number
    let index = Math.trunc(Math.random()*adviceBank.length);

    //change the text content to the array index number
    adviceText.textContent = adviceBank[index];


    //change the advice number using the index value plus 1 
    addNumber.textContent = index + 1;
})

// setInterval(() =>{
//     let index = Math.trunc(Math.random()* adviceBank.length)

//     adviceText.textContent = adviceBank[index]

//     adnumber.textContent = index + 1
// }, 2000);
