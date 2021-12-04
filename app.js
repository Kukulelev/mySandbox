const btnStart = document.getElementsByClassName('.btnStart');
const btnYes = document.getElementById('yes');
const btnNo = document.getElementById('no');
const guessedNum = document.getElementById('num');
const moreLess = document.querySelector('.moreLess');
const moreBtn = document.querySelector('.more');
const lessBtn = document.querySelector('.less');
const gameArea = document.querySelector('.gameArea');
let start = 0;
let end;
let middle;
const arrTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const showMoreLess = () => {
  moreLess.classList.remove('hide');
};
const hideMoreLess = () => {
  moreLess.classList.add('hide');
};

function generateNumber(arr) {
  gameArea.classList.remove('hide');
  end = arr.length;
  middle = Math.floor((start + end) / 2);
  guessedNum.innerHTML = middle;
}
function yesClicked() {
  if (start === middle && end != 10) {
    guessedNum.innerHTML = `Ваше число угадано! ${end}`;
  } else {
    guessedNum.innerHTML = `Ваше число угадано! ${middle}`;
  }
}
function noClicked() {
  if (start === middle) {
    guessedNum.innerHTML = end;
    guessedNum.innerHTML = `Ваше число угадано! ${end}`;
    hideMoreLess();
  } else {
    showMoreLess();
  }
}
function moreClicked() {
  start = middle + 1;
  middle = Math.floor((start + end) / 2);
  guessedNum.innerHTML = middle;
  hideMoreLess();

  // hideDiv();
}
function lessClicked() {
  end = middle - 1;
  middle = Math.floor((start + end) / 2);
  guessedNum.innerHTML = middle;
  hideMoreLess();

  // hideDiv();
}

function hideDiv() {
  if (start !== middle) {
    hideMoreLess();
  }
}

/*
const newArr = [];
let rndNum = Math.trunc(Math.random() * 10) + 1;

console.log(newArr2);
const generateNumber = () => {
  console.log(`Game was started`);
  guessedNum.innerHTML = rndNum;
};
function yesClicked() {
  guessedNum.innerHTML = `Ваше число угадано! ${rndNum}`;
  newArr.length = 0;
}
function noClicked() {
  newArr.push(rndNum);
  console.log(newArr);
  while (newArr.includes(rndNum)) {
    rndNum = Math.trunc(Math.random() * 10) + 1;

    console.log(rndNum);
  }
  guessedNum.innerHTML = rndNum;
}
*/
