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
  "We accept the love we think we deserve."
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
