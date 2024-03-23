// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
function randomNumber() {
  return Math.floor(Math.random() * 101);
}

let arr = [];

let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");
let num3 = document.getElementById("number3");
let score = 0;

// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

function storearr(x, y) {
  let arr = [];

  num1.innerHTML = randomNumber();
  num2.innerHTML = randomNumber();

  function add(x, y) {
    return +x + +y;
  }

  function subtractc(x, y) {
    return Math.abs(+x - +y);
  }

  function multi(x, y) {
    return +x * +y;
  }

  function devide(x, y) {
    return +(+x / +y).toFixed(3);
  }

  function mode(x, y) {
    return +x % +y;
  }

  arr.push(
    add(num1.innerHTML, num2.innerHTML),
    subtractc(num1.innerHTML, num2.innerHTML),
    multi(num1.innerHTML, num2.innerHTML),
    devide(num1.innerHTML, num2.innerHTML),
    mode(num1.innerHTML, num2.innerHTML)
  );

  //   console.log(arr);
  // return arr;

  num3.innerHTML = arr[Math.floor(Math.random() * arr.length)];
}

// let array=storearr(num1.innerHTML,num2.innerHTML);
// console.log(array);

// Iteration 6: Making the Operators (button) functional
// num3.innerHTML=arr[Math.floor(Math.random()*arr.length)]
window.onload = () => {
  storearr();
};

document.getElementById("plus").addEventListener("click", () => {
  clearInterval(value);
  if (+num1.innerHTML + +num2.innerHTML == num3.innerHTML) {
    score++;
    localStorage.setItem("score",score)
    storearr();
  } else {
    window.location.href = "./gameover.html";
  }
});

document.getElementById("minus").addEventListener("click", () => {
  clearInterval(value);
  if (Math.abs(+num1.innerHTML - +num2.innerHTML) == num3.innerHTML) {
    score++;
    localStorage.setItem("score",score)
    storearr();
  } else {
    window.location.href = "./gameover.html";
  }
});

document.getElementById("mul").addEventListener("click", () => {
  clearInterval(value);
  if (+num1.innerHTML * +num2.innerHTML == num3.innerHTML) {
    score++;
    localStorage.setItem("score",score)
    storearr();
  } else {
    window.location.href = "./gameover.html";
  }
});

document.getElementById("divide").addEventListener("click", () => {
  clearInterval(value);
  if ((+num1.innerHTML / +num2.innerHTML).toFixed(3) == num3.innerHTML) {
    score++;
    localStorage.setItem("score",score)
    storearr();
  } else {
    window.location.href = "./gameover.html";
  }
});

document.getElementById("modulus").addEventListener("click", () => {
  clearInterval(value);
  if (+num1.innerHTML % +num2.innerHTML == num3.innerHTML) {
    score++;
    localStorage.setItem("score",score)
    storearr();
  } else {
    window.location.href = "./gameover.html";
  }
});

// Iteration 7: Making Timer functional

let box = document.getElementById("timer");

let value;

function timer() {
  let val = -1;
  value = setInterval(() => {
    val++;
    box.innerHTML = val;
    if (val >= 10) {
      clearInterval(val);
      window.location.href = "/gameover.html";
    }
  }, 1000);
}

timer();
