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
  document.getElementsByClassName("ones")[0].innerHTML = worp[1];
  document.getElementsByClassName("twos")[0].innerHTML = (worp[2] * 2);
  document.getElementsByClassName("threes")[0].innerHTML = (worp[3] * 3);
  document.getElementsByClassName("fours")[0].innerHTML = (worp[4] * 4);
  document.getElementsByClassName("fives")[0].innerHTML = (worp[5] * 5);
  document.getElementsByClassName("sixes")[0].innerHTML = (worp[6] * 6);

};

function updatePartTwo() {
document.getElementsByClassName("threeOfAKind")[0].innerHTML = (worp[1] + (worp[2] * 2) + (worp[3] * 3) + (worp[4] * 4) + (worp[5] * 5) + (worp[6] * 6));
document.getElementsByClassName("carre")[0].innerHTML = (worp[1] + (worp[2] * 2) + (worp[3] * 3) + (worp[4] * 4) + (worp[5] * 5) + (worp[6] * 6));
document.getElementsByClassName("chance")[0].innerHTML = (worp[1] + (worp[2] * 2) + (worp[3] * 3) + (worp[4] * 4) + (worp[5] * 5) + (worp[6] * 6));
;}

function updateLocked() {
  console.log("test")
  document.getElementsByClassName("ones")[0].classList.toggle("tmpLocked");
}

// ik moet de updatelocked zo maken dat hij alleen het element veranderd waar ik op klik naar de nieuwe class

  
  
  

