// About Me Button To Top
mybutton = document.getElementById("top-button");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  }

}

const topFunction = () =>{

  document.documentElement.scrollTop = 0

}

//Projects Buttons Assignemnt
//Greater Integer Of 2 
const largerNumber = () => {
  /* 
  Prompts user for 2 inputs and outputs which number is greater than 
  the other to 'Answer Box'.
  */
  
  let num1 = parseInt(prompt('Pick a number, any number:'));
  let num2 = parseInt(prompt('Pick another number, any number:'));
  
  ((Number.isNaN(num1) || Number.isNaN(num2))
    ? output = 'BOTH inputs have to be numbers, try again.'
    : (num1 === num2)
    ? output = `Since ${num1} and ${num2} are the same, neither is greater!`
    : (num1 > num2)
    ? output = `The number ${num1} is greater than ${num2}!`
    : output = `The number ${num2} is greater than ${num1}!`
  )

  document.getElementById("answer-box").innerHTML = output;

}