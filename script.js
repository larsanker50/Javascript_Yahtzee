const button = document.getElementById("button");
const dobbelArrayHTML = document.getElementsByClassName("dobbelArrayOne");
let worp = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0
}
let dobbelArray = [];

button.onclick = function gooi() {
    console.log("er is gegooid");
    dobbel();
  }

function dobbel() {
    dobbelArray = [];
    worp = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0
    }
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
    return dobbelArray;
  }

function updateDobbelArray() {
  for (let i = 0 ; i < dobbelArray.length; i++) {
    dobbelArrayHTML[i].innerHTML = dobbelArray[i]
  }
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
  document.getElementsByClassName("numbers")[0].innerHTML = worp[1];
  document.getElementsByClassName("numbers")[1].innerHTML = (worp[2] * 2);
  document.getElementsByClassName("numbers")[2].innerHTML = (worp[3] * 3);
  document.getElementsByClassName("numbers")[3].innerHTML = (worp[4] * 4);
  document.getElementsByClassName("numbers")[4].innerHTML = (worp[5] * 5);
  document.getElementsByClassName("numbers")[5].innerHTML = (worp[6] * 6);

};

function updatePartTwo() {
document.getElementsByClassName("threeOfAKind")[0].innerHTML = (worp[1] + (worp[2] * 2) + (worp[3] * 3) + (worp[4] * 4) + (worp[5] * 5) + (worp[6] * 6));
document.getElementsByClassName("carre")[0].innerHTML = (worp[1] + (worp[2] * 2) + (worp[3] * 3) + (worp[4] * 4) + (worp[5] * 5) + (worp[6] * 6));
document.getElementsByClassName("chance")[0].innerHTML = (worp[1] + (worp[2] * 2) + (worp[3] * 3) + (worp[4] * 4) + (worp[5] * 5) + (worp[6] * 6));
;}

// hier dus iets mee doen dat alleen één templock krijg als class. anders aparte id gebruiken voor elke ofso

//function tempLock(i) {
  //document.getElementsByClassName("numbers")[i].classList.add("tmpLocked");
  //document.getElementsByClassName("tmpLocked")[i].classList.remove("numbers");
 // console.log(document.getElementsByClassName("numbers")[i].classList.item)
//}

  //for (let t = 0 ; t < 9; t++) {
  //  document.getElementsByClassName("tmpLocked")[t].classList.remove("tmpLocked");
  //};


