//Vault Entry Message
const vault = () => alert("Looks like you've stubmbled into my vault where I store my most classified projects...");

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
//Sign Of The Product Of 3 Integers
const signOfProduct = () =>{
  /* 
  Prompts user for 3 inputs and outputs the sign(+, -) of the product to 'Answer Box'.
  */

  let num1 = parseInt(prompt('What positive or negative integer comes to mind when I say Thursday?'));
  let num2 = parseInt(prompt('...How about Friday?'));
  let num3 = parseInt(prompt('...What about negative Tuesday?'));
  
  let product = num1 * num2 * num3;
  
  ((product === 0)
    ? output = 'You really had to go and mess eveything up by putting 0. . .'
    : (Number.isNaN(product))
    ? output = 'You again, NUMBERS please!'
    : (product > 0) 
    ? output = `The sign of ${product} is: "+".`
    : output = `The sign of ${product} is: "-".`
  )
  
  document.getElementById("answer-box").innerHTML = output;

}
//Sorting 3 Numbers In Numerical Order
const threeNumberSort = () =>{
  /* 
  Prompts user for 3 inputs and outputs them to 'Answer Box' in numerical order. 
  */

  let num1 = parseInt(prompt('What is your favourite number?'));
  let num2 = parseInt(prompt('...least favourite?'));
  let num3 = parseInt(prompt('...second favourite?'));
  
  ((num1 > num2 && num2 > num3) 
    ? output = `I've taken the liberty to numerically order your numbers: ${num3}, ${num2}, ${num1}.`
    : (num1 > num2 && num2 < num3 && num1 > num3) 
    ? output = `I've taken the liberty to numerically order your numbers: ${num2}, ${num3}, ${num1}.`
    : (num1 < num2 && num2 > num3 && num1 > num3)
    ? output = `I've taken the liberty to numerically order your numbers: ${num3}, ${num1}, ${num2}.`
    : (num1 < num2 && num2 > num3 && num1 < num3)
    ? output = `I've taken the liberty to numerically order your numbers: ${num1}, ${num3}, ${num2}.`
    : (num1 > num2 && num2 < num3 && num1 < num3)
    ? output = `I've taken the liberty to numerically order your numbers: ${num2}, ${num1}, ${num3}.`  
    : (num1 < num2 && num2 < num3)
    ? output = `I've taken the liberty to numerically order your numbers: ${num1}, ${num2}, ${num3}.`
    : (num1 > num2 && num2 === num3) 
    ? output = `I've taken the liberty to numerically order your numbers but ${num2} and ${num3} are equal: ${num2}, ${num3}, ${num1}.`
    : (num1 < num2 && num2 === num3)
    ? output = `I've taken the liberty to numerically order your numbers but ${num2} and ${num3} are equal: ${num1}, ${num2}, ${num3}.`
    : (num1 === num2 && num2 > num3)
    ? output = `I've taken the liberty to numerically order your numbers but ${num1} and ${num2} are equal: ${num3}, ${num2}, ${num1}.`
    : (num1 === num2 && num2 < num3)
    ? output = `I've taken the liberty to numerically order your numbers but ${num1} and ${num2} are equal: ${num1}, ${num2}, ${num3}.`
    : (num1 > num2 && num1 === num3)
    ? output = `I've taken the liberty to numerically order your numbers but ${num1} and ${num3} are equal: ${num2}, ${num1}, ${num3}.`
    : (num1 < num2 && num1 === num3)
    ? output = `I've taken the liberty to numerically order your numbers but ${num1} and ${num3} are equal: ${num1}, ${num3}, ${num2}.`
    : (num1 === num2 && num2 === num3)
    ? output = `${num1}, ${num2}, and ${num3} are equivalent so the order is: ${num1}, ${num2}, ${num3}`
    : output = 'You should really learn what NUMBERS are!!'
  );

  document.getElementById("answer-box").innerHTML = output;

}

// Multiples of 3 up to 1000 via a for loop
const forSumThrees = () => {
  /* 
  For loop that goes through numbers 1 to 1000 and sums the mutilples of three. 
  Outputs the value to 'Answer Box'.
  */

  let answer = 0;
  
  for(let i = 0; i < 1000; i += 3){ 
    answer += i;
  }

  document.getElementById("answer-box").innerHTML = `The sum of the multiples of 3 under 1000 is: ${answer}!`;

}

// Multiples of 3 up to 1000 via a while loop
const whileSumThrees = () =>{
  /* 
  While loop that goes through numbers 1 to 1000 and sums the mutilples of three. 
  Outputs the value to 'Answer Box'.
  */

  let answer = 0;
  let i = 0;
  
  while(i < 1000) {
    answer = answer + i;
    i += 3;
  }
  
  document.getElementById("answer-box").innerHTML = `The sum of the multiples of 3 under 1000 is: ${answer}!`;

}

// Identifying multiples of 4, 10, and both from numbers 1 to 100.
const tenFour = () =>{
  /* 
  Counts from numbers 1 to 100 and logs multiples of 4 as 'Four', multiples of 10 as 
  'Ten', and multiples of both as 'TenFour!'. Output is logged to the console.
  */
  
  let answer = '';
  
  for(let i = 1; i <= 100; i++) {
    
    ((i % 4 === 0 && i % 10 === 0)
      ? answer += ('TenFour!')
      : (i % 4 === 0)
      ? answer += ('Four')
      : (i % 10 === 0)
      ? answer += ('Ten')
      : answer += (` ${i} `)
    );

  }
  
  document.getElementById("answer-box").innerHTML = 'Check Out The Console';

}

// Determining century for any given year
const centuryFromYear = () =>{
  /* Prompts user for a year greater than 1 and optputs the century of that year. */
  
  let year = parseInt(prompt('If you could travel to any year, what year would you go to?'));
  let century = Math.floor((year-1)/100) + 1;
  let lastDig = century % 10;
  let secondLast = century % 100;
  
  ((century === 0 || century < 0) 
  ? output = `Time travel is cool and all, but what even is the year ${year}?`
  : (Number.isNaN(century))
  ? open("https://www.youtube.com/watch?v=ZJEIKkPXirg&ab_channel=KidsAcademy")
  : (secondLast > 10 && secondLast < 14 && lastDig === 1)
  ? output = `${year} is in the ${century}th century!`
  : (secondLast > 10 && secondLast < 14  && lastDig === 2)
  ? output = `${year} is in the ${century}th century!`
  : (secondLast > 10 && secondLast < 14  && lastDig === 3)
  ? output = `${year} is in the ${century}th century!`
  : (lastDig === 1)
  ? output = `${year} is in the ${century}st century!`
  : (lastDig === 2)
  ? output = `${year} is in the ${century}nd century!`
  : (lastDig === 3)
  ? output = `The year ${year} is in the ${century}rd century!`
  : output = `The year ${year} is in the ${century}th century!`
  )
  
  document.getElementById("answer-box").innerHTML = output;

}

// Third angle of a triangle function
const thirdAngle = () =>{
  /* Prompts user for 2 angles of a triangle, calculates and outputs the third angle. */

  let angle1 = parseInt(prompt('Give me one angle of a triangle.'));
  let angle2 = parseInt(prompt('Give me another angle of the same triangle.'));
  let angle3 = 180 - angle1 - angle2;

  ((angle1 < 0 || angle2 < 0 || angle3 < 0) 
  ? output = 'Angles of a triangle cannot be negative integers.'
  : (angle1 === 0 || angle2 === 0 || angle3 === 0)
  ? output = 'ANGLES OF A TRIANGLE please and thank you!'
  : (Number.isNaN(angle3))
  ? open("https://en.wikipedia.org/wiki/Number")
  : output = `The third angle of your triangle is ${angle3}°!`
  )

  document.getElementById("answer-box").innerHTML = output;
}

// Reset answer box to display 'Answer Box'
const resetAnswerBox = () => document.getElementById("answer-box").innerHTML = 'Answer Box';

// Random 3 Numbers
  
  // Variables declared in global scope to be used in both encryption and decryption
  let random1 = '';
  let random2 = '';
  let random3 = '';

const random = () => {
  /*
  Generates 3 random integers that are later used in encryption and decryption
  */
  const numbers = Array(9).fill().map((_, index) => index + 1); // Inspired by Felix Lemke on StackOverflow
  numbers.sort(() => Math.random() - 0.5);
  
  //Extracts the first three digits of the numbers array
  random1 = numbers.slice(0, 1);  
  random2 = numbers.slice(1, 2);
  random3 = numbers.slice(2, 3);
}

// Text Encryption Function
  
  // Variables declared in global scope to be used in both encryption and decryption
  let cipherText2 = '';
  let beginning = '';
  let end = '';
  let middle = '';
  

const encrypt = () => {
  /* 
  encrypt() prompts the user for a message which is then encrypted 
  and output to the answer-box 
  */

  let plainText = prompt('Enter you top secret message here:');
  let v1 = "";
  let v2 = "";
  let v3 = "";
  let v4 = "";
  let v5 = "";
  let v6 = "";
  let v7 = "";
  let v8 = "";
  let v9 = "";
  let v10 = "";
  let v11 = "";
  let v12 = "";
  let v13 = "";
  let v14 = "";
  let v15 = "";
  let v16 = "";
  let v17 = "";
  let v18 = "";
  let v19 = "";
  let v20 = "";
  let v21 = "";
  let v22 = "";
  let v23 = "";
  let v24 = "";
  let v25 = "";
  let v26 = "";
  let v27 = "";
  let v28 = "";
  let v29 = "";
  let v30 = "";
  let v31 = "";
  let v32 = "";
  let v33 = "";
  let v34 = "";
  let v35 = "";
  let v36 = "";
  let v37 = "";
  let v38 = "";
  let v39 = "";
  let v40 = "";
  let v41 = "";
  let v42 = "";
  let v43 = "";
  let v44 = "";
  let v45 = "";
  let v46 = "";
  let v47 = "";
  let v48 = "";
  let v49 = "";
  let v50 = "";
  let v51 = "";
  let v52 = "";
  let v53 = "";
  let v54 = "";
  let v55 = "";
  let v56 = "";
  let v57 = "";
  let v58 = "";
  let v59 = "";
  let v60 = "";
  let v61 = "";
  let v62 = "";
  let v63 = "";
  let v64 = "";
  let v65 = "";
  let v66 = "";
  let v67 = "";
  let v68 = "";
  let v69 = "";
  let v70 = "";
  let v71 = "";
  let v72 = "";
  let v73 = "";
  let v74 = "";
  let v75 = "";
  let v76 = "";
  let v77 = "";
  let v78 = "";
  let v79 = "";
  let v80 = "";
  let v81 = "";
  let v82 = "";
  let v83 = "";
  let v84 = "";
  let v85 = "";
  let v86 = "";
  let v87 = "";
  let v88 = "";
  let v89 = "";
  let v90 = "";
  let v91 = "";
  let v92 = "";
  let v93 = "";

  if (plainText === null || plainText == '') { //If nothing is entered

    document.getElementById("answer-box").innerHTML =  "You're no fun, enter something to be encrypted"

  } else { //If something is entered

    let reverseText = '';

    for(let i = plainText.length - 1; i > - 1; i--) { //Reverses the order of the message
      reverseText += plainText[i]
    }
    
    //Splits reversed message into 3 parts
    beginning = reverseText.slice(0, Math.ceil(plainText.length/3));
    end = reverseText.slice(-Math.ceil(plainText.length/3));
    middle = reverseText.replace(beginning, '').replace(end, '');

    //Orders the three parts based one the values of the random numbers from random()
    ((plainText.length == 1)
      ? order = plainText
      : (random1 > random2 && random2 > random3) 
      ? order = end.concat(middle).concat(beginning)
      : (random1 > random2 && random2 < random3 && random1 > random3) 
      ? order = middle.concat(end).concat(beginning)
      : (random1 < random2 && random2 > random3 && random1 > random3)
      ? order =  end.concat(beginning).concat(middle)
      : (random1 < random2 && random2 > random3 && random1 < random3)
      ? order = beginning.concat(end).concat(middle)
      : (random1 > random2 && random2 < random3 && random1 < random3)
      ? order =  middle.concat(beginning).concat(end)
      : (random1 < random2 && random2 < random3)
      ? order = beginning.concat(end).concat(middle)
      : order = end.concat(beginning).concat(middle)
    );
    
    let disorder = order.split(''); //Creates an array of the order variable
    let cipherText = '';

    //Randomizes the assignment of the encrypted characters 
    let arr1 = ["Ѫ","ઊ","ﺾ","Ж","ӿ","ວ",'ﬗ',"≋","╳","◪","‡","☹","⒵","╯","高","ↆ","⛔","◎","ↂ","ℍ","⌛","X","⚡","→","ക","▛","♪","Ͳ","▓",
    "∰","ɀ","⎳","R","ഉ","}","S","l","/","^","?","$","T","r","*","\\",'a','q','|','F','N','σ',"(","&",")",'ﾈ','2','1','9','6','4',"₪",'8','0',
    "ɇ",'҉','⑫','Ѡ','⁈','‼','᎒','ꬩ','ᾮ','ͷ','@','¢','ހ','z','ӻ','Й','Ф','Ƶ','½','Ð','æ','¶','©','®','∎','Ꮂ','☢','ຣ','ﻊ','þ','Δ']
    arr1.sort(() => (Math.random() > .5) ? 1 : -1);
    v1 += arr1[0]; v2 += arr1[1]; v3 += arr1[2]; v4 += arr1[3]; v5 += arr1[4]; v6 += arr1[5]; v7 += arr1[6]; v8 += arr1[7]; v9 += arr1[8]; v10 += arr1[9];
    v11 += arr1[10]; v12 += arr1[11]; v13 += arr1[12]; v14 += arr1[13]; v15 += arr1[14]; v16 += arr1[15]; v17 += arr1[16]; v18 += arr1[17]; v19 += arr1[18];
    v20 += arr1[19]; v21 += arr1[20]; v22 += arr1[21]; v23 += arr1[22]; v24 += arr1[23]; v25 += arr1[24]; v26 += arr1[25]; v27 += arr1[26]; v28 += arr1[27]; 
    v29 += arr1[28]; v30 += arr1[29]; v31 += arr1[30]; v32 += arr1[31]; v33 += arr1[32]; v34 += arr1[33]; v35 += arr1[34]; v36 += arr1[35]; v37 += arr1[36]; 
    v38 += arr1[37]; v39 += arr1[38]; v40 += arr1[39]; v41 += arr1[40]; v42 += arr1[41]; v43 += arr1[42]; v44 += arr1[43]; v45 += arr1[44]; v46 += arr1[45]; 
    v47 += arr1[46]; v48 += arr1[47]; v49 += arr1[48]; v50 += arr1[49]; v51 += arr1[50]; v52 += arr1[51]; v53 += arr1[52]; v54 += arr1[53]; v55 += arr1[54]; 
    v56 += arr1[55]; v57 += arr1[56]; v58 += arr1[57]; v59 += arr1[58]; v60 += arr1[59]; v61 += arr1[60]; v62 += arr1[61]; v63 += arr1[62]; v64 += arr1[63]; 
    v65 += arr1[64]; v66 += arr1[65]; v67 += arr1[66]; v68 += arr1[67]; v69 += arr1[68]; v70 += arr1[70]; v71 += arr1[71]; v72 += arr1[72]; v73 += arr1[73]; 
    v74 += arr1[74]; v75 += arr1[75]; v76 += arr1[76]; v77 += arr1[77]; v78 += arr1[78]; v79 += arr1[79]; v80 += arr1[80]; v81 += arr1[81]; v82 += arr1[82]; 
    v83 += arr1[83]; v84 += arr1[69]; v85 += arr1[84]; v86 += arr1[85]; v87 += arr1[86]; v88 += arr1[87]; v89 += arr1[88]; v90 += arr1[89]; v91 += arr1[90]; 
    v92 += arr1[91]; v93 += arr1[92];   

    for(let i = 0; i < disorder.length; i++) { //Loops through disorder and for each character, assigns the encrypted character to cipherText
      
      ((disorder[i] == ' ') ? cipherText += v1
        : (disorder[i] == '1') ? cipherText += v2 : (disorder[i] == '2') ? cipherText += v3
        : (disorder[i] == '3') ? cipherText += v49 : (disorder[i] == '4') ? cipherText += v4
        : (disorder[i] == '5') ? cipherText += v50 : (disorder[i] == '6') ? cipherText += v5
        : (disorder[i] == '7') ? cipherText += v51 : (disorder[i] == '8') ? cipherText += v6
        : (disorder[i] == '9') ? cipherText += v52 : (disorder[i] == '0') ? cipherText += v7
        : (disorder[i] == '!') ? cipherText += v53 : (disorder[i] == '@') ? cipherText += v8
        : (disorder[i] == '#') ? cipherText += v54 : (disorder[i] == '$') ? cipherText += v9
        : (disorder[i] == '%') ? cipherText += v55 : (disorder[i] == '^') ? cipherText += v10
        : (disorder[i] == '&') ? cipherText += v56 : (disorder[i] == '*') ? cipherText += v11
        : (disorder[i] == '(') ? cipherText += v57 : (disorder[i] == ')') ? cipherText += v12
        : (disorder[i] == '_') ? cipherText += v58 : (disorder[i] == '-') ? cipherText += v13
        : (disorder[i] == '=') ? cipherText += v59 : (disorder[i] == '+') ? cipherText += v14
        : (disorder[i] == "'") ? cipherText += v60 : (disorder[i] == '"') ? cipherText += v15
        : (disorder[i] == ';') ? cipherText += v61 : (disorder[i] == ':') ? cipherText += v16
        : (disorder[i] == '.') ? cipherText += v62 : (disorder[i] == ',') ? cipherText += v17
        : (disorder[i] == '>') ? cipherText += v63 : (disorder[i] == '<') ? cipherText += v18
        : (disorder[i] == '?') ? cipherText += v64 : (disorder[i] == '[') ? cipherText += v19
        : (disorder[i] == ']') ? cipherText += v65 : (disorder[i] == '}') ? cipherText += v20
        : (disorder[i] == '{') ? cipherText += v66 : (disorder[i] == '`') ? cipherText += v21
        : (disorder[i] == '~') ? cipherText += v67 : (disorder[i] == '|') ? cipherText += v22
        : (disorder[i] == 'a') ? cipherText += v68 : (disorder[i] == 'b') ? cipherText += v23
        : (disorder[i] == 'c') ? cipherText += v69 : (disorder[i] == 'd') ? cipherText += v24
        : (disorder[i] == 'e') ? cipherText += v70 : (disorder[i] == 'f') ? cipherText += v25
        : (disorder[i] == 'g') ? cipherText += v71 : (disorder[i] == 'h') ? cipherText += v26
        : (disorder[i] == 'i') ? cipherText += v72 : (disorder[i] == 'j') ? cipherText += v27
        : (disorder[i] == 'k') ? cipherText += v73 : (disorder[i] == 'l') ? cipherText += v28
        : (disorder[i] == 'm') ? cipherText += v74 : (disorder[i] == 'n') ? cipherText += v29
        : (disorder[i] == 'o') ? cipherText += v75 : (disorder[i] == 'p') ? cipherText += v30
        : (disorder[i] == 'q') ? cipherText += v76 : (disorder[i] == 'r') ? cipherText += v31
        : (disorder[i] == 's') ? cipherText += v77 : (disorder[i] == 't') ? cipherText += v32
        : (disorder[i] == 'u') ? cipherText += v78 : (disorder[i] == 'v') ? cipherText += v33
        : (disorder[i] == 'w') ? cipherText += v79 : (disorder[i] == 'x') ? cipherText += v34
        : (disorder[i] == 'y') ? cipherText += v80 : (disorder[i] == 'z') ? cipherText += v35
        : (disorder[i] == 'A') ? cipherText += v81 : (disorder[i] == 'B') ? cipherText += v36
        : (disorder[i] == 'C') ? cipherText += v82 : (disorder[i] == 'D') ? cipherText += v37
        : (disorder[i] == 'E') ? cipherText += v83 : (disorder[i] == 'F') ? cipherText += v38
        : (disorder[i] == 'G') ? cipherText += v84 : (disorder[i] == 'H') ? cipherText += v39
        : (disorder[i] == 'I') ? cipherText += v85 : (disorder[i] == 'J') ? cipherText += v40
        : (disorder[i] == 'K') ? cipherText += v86 : (disorder[i] == 'L') ? cipherText += v41
        : (disorder[i] == 'M') ? cipherText += v87 : (disorder[i] == 'N') ? cipherText += v42
        : (disorder[i] == 'O') ? cipherText += v88 : (disorder[i] == 'P') ? cipherText += v43
        : (disorder[i] == 'Q') ? cipherText += v89 : (disorder[i] == 'R') ? cipherText += v44
        : (disorder[i] == 'S') ? cipherText += v90 : (disorder[i] == 'T') ? cipherText += v45
        : (disorder[i] == 'U') ? cipherText += v91 : (disorder[i] == 'V') ? cipherText += v46
        : (disorder[i] == 'W') ? cipherText += v92 : (disorder[i] == 'X') ? cipherText += v47
        : (disorder[i] == 'Y') ? cipherText += v93 : (disorder[i] == 'Z') ? cipherText += v48
        : cipherText += disorder[i]
      )

      cipherText2 = cipherText //Assigns the global variable, cipherText2, the value of cipherText

    }
      
    document.getElementById("answer-box").innerHTML = cipherText; //Outputs the encrypted message to 'answer-box'
    
  }
  
}

// Text Decryption Function
function decrypt() {
  /* 
  decrypt() takes the users encryted message, decrypts it,  
  and outputs their original message to the answer-box 
  */
 
  if (cipherText2.length == 1){ //If only 1 characer was initially input

    document.getElementById("answer-box").innerHTML = beginning

  } else { //If multiple characters were initially input

    let reverseText = beginning.concat(middle).concat(end); //Restructures the message into its reversed form
    let plainText = reverseText.split("").reverse().join(""); //Turns the string into an array, reverses it, and returns it back to a string

    document.getElementById("answer-box").innerHTML = plainText //Outputs the decrypted message to 'answer-box'

  } 
  
}