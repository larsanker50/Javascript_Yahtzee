const button = document.getElementById("button");
const dobbelArrayHTML = document.getElementsByClassName("dobbelArrayOne");
const worp = {
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
    while(dobbelArray.length < 5) {
        let random = Math.floor((Math.random() * 6) + 1);
        dobbelArray.push(random);
        worp[random] = // dit weer verder maken
    };
    console.log(dobbelArray);
    updateDobbelArray();
    updateDobbelArrayTwo();

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

}