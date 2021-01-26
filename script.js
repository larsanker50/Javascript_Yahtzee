const button = document.getElementById("button");
const dobbelArrayHTML = document.getElementsByClassName("dobbelArrayOne");
const lockedOne = document.getElementsByClassName("lockedOne");
const lockedTwo = document.getElementsByClassName("lockedTwo");

let worp = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0
};

let dobbelArray = [];

button.onclick = function gooi() {
    console.log("er is gegooid");
    dobbel();
};

function dobbel() {
    dobbelArray = [];
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
        worp[random] = worp[random] + 1
    };
    console.log(dobbelArray);
    updateDobbelArray();
    updateDobbelArrayTwo();
    updatePartOne();
    updatePartTwo();
    updateLockedOne();
    updateLockedTwo();
    updateTotalNumbers();
    updateBonus();
    updateTotalPartOne();
    updateTotalPartTwo();
    updateTotalOnePlusTwo();
    return dobbelArray;
  };

function updateDobbelArray() {
  for (let i = 0 ; i < dobbelArray.length; i++) {
    dobbelArrayHTML[i].innerHTML = dobbelArray[i]
  };
};

function updateDobbelArrayTwo() {
  document.getElementById("one").innerHTML = worp[1];
  document.getElementById("two").innerHTML = worp[2];
  document.getElementById("three").innerHTML = worp[3];
  document.getElementById("four").innerHTML = worp[4];
  document.getElementById("five").innerHTML = worp[5];
  document.getElementById("six").innerHTML = worp[6];

};

function updatePartOne() {
  if (document.body.contains(document.getElementsByClassName("ones")[0]) == true)
  if (document.getElementsByClassName("ones")[0].contains(document.getElementsByClassName("tmpLockedOne")[0]) == false){
    document.getElementsByClassName("ones")[0].innerHTML = worp[1];
  };
  if (document.body.contains(document.getElementsByClassName("twos")[0]) == true)
  if (document.getElementsByClassName("twos")[0].contains(document.getElementsByClassName("tmpLockedOne")[0]) == false){
    document.getElementsByClassName("twos")[0].innerHTML = (worp[2] * 2);
  };
  if (document.body.contains(document.getElementsByClassName("threes")[0]) == true)
  if (document.getElementsByClassName("threes")[0].contains(document.getElementsByClassName("tmpLockedOne")[0]) == false){
    document.getElementsByClassName("threes")[0].innerHTML = (worp[3] * 3);
  };
  if (document.body.contains(document.getElementsByClassName("fours")[0]) == true)
  if (document.getElementsByClassName("fours")[0].contains(document.getElementsByClassName("tmpLockedOne")[0]) == false){
    document.getElementsByClassName("fours")[0].innerHTML = (worp[4] * 4);
  };
  if (document.body.contains(document.getElementsByClassName("fives")[0]) == true)
  if (document.getElementsByClassName("fives")[0].contains(document.getElementsByClassName("tmpLockedOne")[0]) == false){
    document.getElementsByClassName("fives")[0].innerHTML = (worp[5] * 5);
  };
  if (document.body.contains(document.getElementsByClassName("sixes")[0]) == true)
  if (document.getElementsByClassName("sixes")[0].contains(document.getElementsByClassName("tmpLockedOne")[0]) == false){
    document.getElementsByClassName("sixes")[0].innerHTML = (worp[6] * 6);
  };
};

function updatePartTwo() {
  if (document.body.contains(document.getElementsByClassName("threeOfAKind")[0]) == true)
  if (document.getElementsByClassName("threeOfAKind")[0].contains(document.getElementsByClassName("tmpLockedTwo")[0]) == false){
    document.getElementsByClassName("threeOfAKind")[0].innerHTML = (worp[1] + (worp[2] * 2) + (worp[3] * 3) + (worp[4] * 4) + (worp[5] * 5) + (worp[6] * 6));
  };
  if (document.body.contains(document.getElementsByClassName("carre")[0]) == true)
  if (document.getElementsByClassName("carre")[0].contains(document.getElementsByClassName("tmpLockedTwo")[0]) == false){
    document.getElementsByClassName("carre")[0].innerHTML = (worp[1] + (worp[2] * 2) + (worp[3] * 3) + (worp[4] * 4) + (worp[5] * 5) + (worp[6] * 6));
  };
  if (document.body.contains(document.getElementsByClassName("chance")[0]) == true)
  if (document.getElementsByClassName("chance")[0].contains(document.getElementsByClassName("tmpLockedTwo")[0]) == false){
    document.getElementsByClassName("chance")[0].innerHTML = (worp[1] + (worp[2] * 2) + (worp[3] * 3) + (worp[4] * 4) + (worp[5] * 5) + (worp[6] * 6));
  };
;}

function updateNumbersOne() {
  if (document.body.contains(document.getElementsByClassName("tmpLockedOne")[0]) == true){
    document.getElementsByClassName("tmpLockedOne")[0].classList.add("numbers");
    document.getElementsByClassName("tmpLockedOne")[0].classList.remove("tmpLockedOne");
  } else {
  };
};

function updateNumbersTwo() {
  if (document.body.contains(document.getElementsByClassName("tmpLockedTwo")[0]) == true){
    document.getElementsByClassName("tmpLockedTwo")[0].classList.add("numbers");
    document.getElementsByClassName("tmpLockedTwo")[0].classList.remove("tmpLockedTwo");
  } else {
  };
};

function updateLockedOne() {
  if (document.body.contains(document.getElementsByClassName("tmpLockedOne")[0]) == true){
    document.getElementsByClassName("tmpLockedOne")[0].classList.add("lockedOne");
    document.getElementsByClassName("tmpLockedOne")[0].classList.remove("ones");
    document.getElementsByClassName("tmpLockedOne")[0].classList.remove("twos");
    document.getElementsByClassName("tmpLockedOne")[0].classList.remove("threes");
    document.getElementsByClassName("tmpLockedOne")[0].classList.remove("fours");
    document.getElementsByClassName("tmpLockedOne")[0].classList.remove("fives");
    document.getElementsByClassName("tmpLockedOne")[0].classList.remove("sixes");
    document.getElementsByClassName("tmpLockedOne")[0].classList.remove("tmpLockedOne");
  } else {
  };
};

function updateLockedTwo() {
  if (document.body.contains(document.getElementsByClassName("tmpLockedTwo")[0]) == true) {
    document.getElementsByClassName("tmpLockedTwo")[0].classList.add("lockedTwo");
    document.getElementsByClassName("tmpLockedTwo")[0].classList.remove("threeOfAKind");
    document.getElementsByClassName("tmpLockedTwo")[0].classList.remove("carre");
    document.getElementsByClassName("tmpLockedTwo")[0].classList.remove("chance");
    document.getElementsByClassName("tmpLockedTwo")[0].classList.remove("tmpLockedTwo");
  };
};

function updateTotalNumbers() {
  if (document.body.contains(document.getElementsByClassName("lockedOne")[5]) == true){
    document.getElementById("totalNumbers").innerHTML = (+lockedOne[0].innerHTML + +lockedOne[1].innerHTML + +lockedOne[2].innerHTML + +lockedOne[3].innerHTML + +lockedOne[4].innerHTML  + +lockedOne[5].innerHTML);
  } else if (document.body.contains(document.getElementsByClassName("lockedOne")[4]) == true){
    document.getElementById("totalNumbers").innerHTML = (+lockedOne[0].innerHTML + +lockedOne[1].innerHTML + +lockedOne[2].innerHTML + +lockedOne[3].innerHTML + +lockedOne[4].innerHTML);
  } else if (document.body.contains(document.getElementsByClassName("lockedOne")[3]) == true){
    document.getElementById("totalNumbers").innerHTML = (+lockedOne[0].innerHTML + +lockedOne[1].innerHTML + +lockedOne[2].innerHTML + +lockedOne[3].innerHTML);
  } else if (document.body.contains(document.getElementsByClassName("lockedOne")[2]) == true){
    document.getElementById("totalNumbers").innerHTML = (+lockedOne[0].innerHTML + +lockedOne[1].innerHTML + +lockedOne[2].innerHTML);
  } else if (document.body.contains(document.getElementsByClassName("lockedOne")[1]) == true){
    document.getElementById("totalNumbers").innerHTML = (+lockedOne[0].innerHTML + +lockedOne[1].innerHTML);
  } else if (document.body.contains(document.getElementsByClassName("lockedOne")[0]) == true){
    document.getElementById("totalNumbers").innerHTML = (+lockedOne[0].innerHTML);
  } else {
    document.getElementById("totalNumbers").innerHTML = 0
  };
};

function updateBonus(){
  if (document.getElementById("totalNumbers").innerHTML >= 63) {
    document.getElementById("bonus").innerHTML = 35
  } else {
    document.getElementById("bonus").innerHTML = 0
  };
};

function updateTotalPartOne() {
  let math = (+document.getElementById("bonus").innerHTML + +document.getElementById("totalNumbers").innerHTML);
  document.getElementsByClassName("totalPartOne")[0].innerHTML = math;
  document.getElementsByClassName("totalPartOne")[1].innerHTML = math;
  return math;
};

function updateTotalPartTwo() {
  if (document.body.contains(document.getElementsByClassName("lockedTwo")[6]) == true){
    document.getElementById("totalPartTwo").innerHTML = (+lockedTwo[0].innerHTML + +lockedTwo[1].innerHTML + +lockedTwo[2].innerHTML + +lockedTwo[3].innerHTML + +lockedTwo[4].innerHTML  + +lockedTwo[5].innerHTML  + +lockedTwo[6].innerHTML);
  } else if (document.body.contains(document.getElementsByClassName("lockedTwo")[5]) == true){
    document.getElementById("totalPartTwo").innerHTML = (+lockedTwo[0].innerHTML + +lockedTwo[1].innerHTML + +lockedTwo[2].innerHTML + +lockedTwo[3].innerHTML + +lockedTwo[4].innerHTML  + +lockedTwo[5].innerHTML);
  } else if (document.body.contains(document.getElementsByClassName("lockedTwo")[4]) == true){
    document.getElementById("totalPartTwo").innerHTML = (+lockedTwo[0].innerHTML + +lockedTwo[1].innerHTML + +lockedTwo[2].innerHTML + +lockedTwo[3].innerHTML + +lockedTwo[4].innerHTML);
  } else if (document.body.contains(document.getElementsByClassName("lockedTwo")[3]) == true){
    document.getElementById("totalPartTwo").innerHTML = (+lockedTwo[0].innerHTML + +lockedTwo[1].innerHTML + +lockedTwo[2].innerHTML + +lockedTwo[3].innerHTML);
  } else if (document.body.contains(document.getElementsByClassName("lockedTwo")[2]) == true){
    document.getElementById("totalPartTwo").innerHTML = (+lockedTwo[0].innerHTML + +lockedTwo[1].innerHTML + +lockedTwo[2].innerHTML);
  } else if (document.body.contains(document.getElementsByClassName("lockedTwo")[1]) == true){
    document.getElementById("totalPartTwo").innerHTML = (+lockedTwo[0].innerHTML + +lockedTwo[1].innerHTML);
  } else if (document.body.contains(document.getElementsByClassName("lockedTwo")[0]) == true){
    document.getElementById("totalPartTwo").innerHTML = (+lockedTwo[0].innerHTML);
  } else {
    document.getElementById("totalPartTwo").innerHTML = 0
  };
  return document.getElementById("totalPartTwo").innerHTML;
};

function updateTotalOnePlusTwo() {
  math = +updateTotalPartOne() + +updateTotalPartTwo();
  document.getElementById("totalOnePlusTwo").innerHTML = math;
};