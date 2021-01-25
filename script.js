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
    updateLocked();
    updateTotalNumbers()
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
  if (document.body.contains(document.getElementsByClassName("ones")[0]) == true)
  if (document.getElementsByClassName("ones")[0].contains(document.getElementsByClassName("tmpLocked")[0]) == false){
    document.getElementsByClassName("ones")[0].innerHTML = worp[1];
  };
  if (document.body.contains(document.getElementsByClassName("twos")[0]) == true)
  if (document.getElementsByClassName("twos")[0].contains(document.getElementsByClassName("tmpLocked")[0]) == false){
    document.getElementsByClassName("twos")[0].innerHTML = (worp[2] * 2);
  };
  if (document.body.contains(document.getElementsByClassName("threes")[0]) == true)
  if (document.getElementsByClassName("threes")[0].contains(document.getElementsByClassName("tmpLocked")[0]) == false){
    document.getElementsByClassName("threes")[0].innerHTML = (worp[3] * 3);
  };
  if (document.body.contains(document.getElementsByClassName("fours")[0]) == true)
  if (document.getElementsByClassName("fours")[0].contains(document.getElementsByClassName("tmpLocked")[0]) == false){
    document.getElementsByClassName("fours")[0].innerHTML = (worp[4] * 4);
  };
  if (document.body.contains(document.getElementsByClassName("fives")[0]) == true)
  if (document.getElementsByClassName("fives")[0].contains(document.getElementsByClassName("tmpLocked")[0]) == false){
    document.getElementsByClassName("fives")[0].innerHTML = (worp[5] * 5);
  };
  if (document.body.contains(document.getElementsByClassName("sixes")[0]) == true)
  if (document.getElementsByClassName("sixes")[0].contains(document.getElementsByClassName("tmpLocked")[0]) == false){
    document.getElementsByClassName("sixes")[0].innerHTML = (worp[6] * 6);
  };
};

function updatePartTwo() {
  if (document.body.contains(document.getElementsByClassName("threeOfAKind")[0]) == true)
  if (document.getElementsByClassName("threeOfAKind")[0].contains(document.getElementsByClassName("tmpLocked")[0]) == false){
    document.getElementsByClassName("threeOfAKind")[0].innerHTML = (worp[1] + (worp[2] * 2) + (worp[3] * 3) + (worp[4] * 4) + (worp[5] * 5) + (worp[6] * 6));
  };
  if (document.body.contains(document.getElementsByClassName("carre")[0]) == true)
  if (document.getElementsByClassName("carre")[0].contains(document.getElementsByClassName("tmpLocked")[0]) == false){
    document.getElementsByClassName("carre")[0].innerHTML = (worp[1] + (worp[2] * 2) + (worp[3] * 3) + (worp[4] * 4) + (worp[5] * 5) + (worp[6] * 6));
  };
  if (document.body.contains(document.getElementsByClassName("chance")[0]) == true)
  if (document.getElementsByClassName("chance")[0].contains(document.getElementsByClassName("tmpLocked")[0]) == false){
    document.getElementsByClassName("chance")[0].innerHTML = (worp[1] + (worp[2] * 2) + (worp[3] * 3) + (worp[4] * 4) + (worp[5] * 5) + (worp[6] * 6));
  };
;}

function updateNumbers() {
  if (document.body.contains(document.getElementsByClassName("tmpLocked")[0]) == true){
    document.getElementsByClassName("tmpLocked")[0].classList.add("numbers");
    document.getElementsByClassName("tmpLocked")[0].classList.remove("tmpLocked");
  } else {
  }
}

function updateLocked() {
  if (document.body.contains(document.getElementsByClassName("tmpLocked")[0]) == true){
    document.getElementsByClassName("tmpLocked")[0].classList.add("locked");
    document.getElementsByClassName("tmpLocked")[0].classList.remove("ones");
    document.getElementsByClassName("tmpLocked")[0].classList.remove("twos");
    document.getElementsByClassName("tmpLocked")[0].classList.remove("threes");
    document.getElementsByClassName("tmpLocked")[0].classList.remove("fours");
    document.getElementsByClassName("tmpLocked")[0].classList.remove("fives");
    document.getElementsByClassName("tmpLocked")[0].classList.remove("sixes");
    document.getElementsByClassName("tmpLocked")[0].classList.remove("threeOfAKind");
    document.getElementsByClassName("tmpLocked")[0].classList.remove("carre");
    document.getElementsByClassName("tmpLocked")[0].classList.remove("chance");
    document.getElementsByClassName("tmpLocked")[0].classList.remove("tmpLocked");
    console.log("updateTrue")
  } else {
    console.log("updateFalse")
}};

function updateTotalNumbers() {
// deze functie scrhijven
  
}