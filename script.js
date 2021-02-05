const button = document.getElementById("btnThrowDices");
const dobbelArrayHTML = document.getElementsByClassName("dobbelArrayOne");
const lockedOne = document.getElementsByClassName("lockedOne");
const lockedTwo = document.getElementsByClassName("lockedTwo");
const tmpLockedOne = document.getElementsByClassName("tmpLockedOne");
const tmpLockedTwo = document.getElementsByClassName("tmpLockedTwo");
const totalNumbers = document.getElementById("totalNumbers");
const dobbelOne = document.getElementById("one");
const dobbelTwo = document.getElementById("two");
const dobbelThree = document.getElementById("three");
const dobbelFour = document.getElementById("four");
const dobbelFive = document.getElementById("five");
const dobbelSix = document.getElementById("six");
const ones = document.getElementsByClassName("ones");
const twos = document.getElementsByClassName("twos");
const threes = document.getElementsByClassName("threes");
const fours = document.getElementsByClassName("fours");
const fives = document.getElementsByClassName("fives");
const sixes = document.getElementsByClassName("sixes");
const threeOfAKind = document.getElementsByClassName("threeOfAKind");
const carre = document.getElementsByClassName("carre");
const chance = document.getElementsByClassName("chance");
const bonusPoints = document.getElementById("bonus");
const totalPartOne = document.getElementsByClassName("totalPartOne");
const totalPartTwo = document.getElementById("totalPartTwo");
const dobbelArray = [];

let worp = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0
};

button.onclick = function gooi() {
    console.log("er is gegooid");
    dobbelArray.length = 0;
    worp = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0
    };
    while(dobbelArray.length < 5) {
        let random = Math.floor((Math.random() * 6) + 1);
        dobbelArray.push(random);
        worp[random] = (worp[random] + 1);
    };
    console.log(dobbelArray);
    updateDobbelArray();
    updatePartOneAndTwo();
    updateLocked();
    updateTotalPoints();
    return dobbelArray;
};

function updateDobbelArray() {
  for (let i = 0 ; i < dobbelArray.length; i++) {
    dobbelArrayHTML[i].innerHTML = dobbelArray[i];
  };
 dobbelOne .innerHTML = worp[1];
 dobbelTwo .innerHTML = worp[2];
 dobbelThree.innerHTML = worp[3];
 dobbelFour.innerHTML = worp[4];
 dobbelFive.innerHTML = worp[5];
 dobbelSix .innerHTML = worp[6];
};

function updatePartOneAndTwo() {
  if (document.body.contains(ones[0]) == true) {
  if (ones[0].contains(tmpLockedOne[0]) == false){
    ones[0].innerHTML = worp[1];
  }};
  if (document.body.contains(twos[0]) == true) {
  if (twos[0].contains(tmpLockedOne[0]) == false){
    twos[0].innerHTML = (worp[2] * 2);
  }};
  if (document.body.contains(threes[0]) == true) {
  if (threes[0].contains(tmpLockedOne[0]) == false){
    threes[0].innerHTML = (worp[3] * 3);
  }};
  if (document.body.contains(fours[0]) == true) {
  if (fours[0].contains(tmpLockedOne[0]) == false){
    fours[0].innerHTML = (worp[4] * 4);
  }};
  if (document.body.contains(fives[0]) == true) {
  if (fives[0].contains(tmpLockedOne[0]) == false){
    fives[0].innerHTML = (worp[5] * 5);
  }};
  if (document.body.contains(sixes[0]) == true) {
  if (sixes[0].contains(tmpLockedOne[0]) == false){
    sixes[0].innerHTML = (worp[6] * 6);
  }};
  if (document.body.contains(threeOfAKind[0]) == true)  {
  if (threeOfAKind[0].contains(tmpLockedTwo[0]) == false){
    threeOfAKind[0].innerHTML = (worp[1] + (worp[2] * 2) + (worp[3] * 3) + (worp[4] * 4) + (worp[5] * 5) + (worp[6] * 6));
  }};
  if (document.body.contains(carre[0]) == true) {
  if (carre[0].contains(tmpLockedTwo[0]) == false){
    carre[0].innerHTML = (worp[1] + (worp[2] * 2) + (worp[3] * 3) + (worp[4] * 4) + (worp[5] * 5) + (worp[6] * 6));
  }};
  if (document.body.contains(chance[0]) == true) {
  if (chance[0].contains(tmpLockedTwo[0]) == false){
    chance[0].innerHTML = (worp[1] + (worp[2] * 2) + (worp[3] * 3) + (worp[4] * 4) + (worp[5] * 5) + (worp[6] * 6));
  }};
};

function updateNumbers() {
  if (document.body.contains(tmpLockedOne[0]) == true){
    tmpLockedOne[0].classList.toggle("numbers");
    tmpLockedOne[0].classList.toggle("tmpLockedOne");
  };
  if (document.body.contains(tmpLockedTwo[0]) == true){
    tmpLockedTwo[0].classList.toggle("numbers");
    tmpLockedTwo[0].classList.toggle("tmpLockedTwo");
  }};

function updateLocked() {
  if (document.body.contains(tmpLockedOne[0]) == true){
    tmpLockedOne[0].classList.add("lockedOne");
    tmpLockedOne[0].classList.remove("ones");
    tmpLockedOne[0].classList.remove("twos");
    tmpLockedOne[0].classList.remove("threes");
    tmpLockedOne[0].classList.remove("fours");
    tmpLockedOne[0].classList.remove("fives");
    tmpLockedOne[0].classList.remove("sixes");
    tmpLockedOne[0].classList.remove("tmpLockedOne");
  };
  if (document.body.contains(tmpLockedTwo[0]) == true) {
    tmpLockedTwo[0].classList.add("lockedTwo");
    tmpLockedTwo[0].classList.remove("threeOfAKind");
    tmpLockedTwo[0].classList.remove("carre");
    tmpLockedTwo[0].classList.remove("chance");
    tmpLockedTwo[0].classList.remove("tmpLockedTwo");
  };
};

function updateTotalPoints() {
  if (document.body.contains(lockedOne[5]) == true){
    totalNumbers.innerHTML = (+lockedOne[0].innerHTML + +lockedOne[1].innerHTML + +lockedOne[2].innerHTML + +lockedOne[3].innerHTML + +lockedOne[4].innerHTML  + +lockedOne[5].innerHTML);
  } else if (document.body.contains(lockedOne[4]) == true){
    totalNumbers.innerHTML = (+lockedOne[0].innerHTML + +lockedOne[1].innerHTML + +lockedOne[2].innerHTML + +lockedOne[3].innerHTML + +lockedOne[4].innerHTML);
  } else if (document.body.contains(lockedOne[3]) == true){
    totalNumbers.innerHTML = (+lockedOne[0].innerHTML + +lockedOne[1].innerHTML + +lockedOne[2].innerHTML + +lockedOne[3].innerHTML);
  } else if (document.body.contains(lockedOne[2]) == true){
    totalNumbers.innerHTML = (+lockedOne[0].innerHTML + +lockedOne[1].innerHTML + +lockedOne[2].innerHTML);
  } else if (document.body.contains(lockedOne[1]) == true){
    totalNumbers.innerHTML = (+lockedOne[0].innerHTML + +lockedOne[1].innerHTML);
  } else if (document.body.contains(lockedOne[0]) == true){
    totalNumbers.innerHTML = (+lockedOne[0].innerHTML);
  } else {
    totalNumbers.innerHTML = 0;
  };
  if (totalNumbers.innerHTML >= 63) {
    bonusPoints.innerHTML = 35;
  } else {
    bonusPoints.innerHTML = 0;
  };
  let math = (+bonusPoints.innerHTML + +totalNumbers.innerHTML);
  totalPartOne[0].innerHTML = math;
  totalPartOne[1].innerHTML = math;
  if (document.body.contains(lockedTwo[6]) == true){
    totalPartTwo.innerHTML = (+lockedTwo[0].innerHTML + +lockedTwo[1].innerHTML + +lockedTwo[2].innerHTML + +lockedTwo[3].innerHTML + +lockedTwo[4].innerHTML  + +lockedTwo[5].innerHTML  + +lockedTwo[6].innerHTML);
  } else if (document.body.contains(lockedTwo[5]) == true){
    totalPartTwo.innerHTML = (+lockedTwo[0].innerHTML + +lockedTwo[1].innerHTML + +lockedTwo[2].innerHTML + +lockedTwo[3].innerHTML + +lockedTwo[4].innerHTML  + +lockedTwo[5].innerHTML);
  } else if (document.body.contains(lockedTwo[4]) == true){
    totalPartTwo.innerHTML = (+lockedTwo[0].innerHTML + +lockedTwo[1].innerHTML + +lockedTwo[2].innerHTML + +lockedTwo[3].innerHTML + +lockedTwo[4].innerHTML);
  } else if (document.body.contains(lockedTwo[3]) == true){
    totalPartTwo.innerHTML = (+lockedTwo[0].innerHTML + +lockedTwo[1].innerHTML + +lockedTwo[2].innerHTML + +lockedTwo[3].innerHTML);
  } else if (document.body.contains(lockedTwo[2]) == true){
    totalPartTwo.innerHTML = (+lockedTwo[0].innerHTML + +lockedTwo[1].innerHTML + +lockedTwo[2].innerHTML);
  } else if (document.body.contains(lockedTwo[1]) == true){
    totalPartTwo.innerHTML = (+lockedTwo[0].innerHTML + +lockedTwo[1].innerHTML);
  } else if (document.body.contains(lockedTwo[0]) == true){
    totalPartTwo.innerHTML = (+lockedTwo[0].innerHTML);
  } else {
    totalPartTwo.innerHTML = 0;
  };
  document.getElementById("totalOnePlusTwo").innerHTML = (+totalPartOne[0].innerHTML + +totalPartTwo.innerHTML);
};