const button = document.getElementById("button");
let dobbelArray = [];

button.onclick = function gooi() {
    console.log("er is gegooid");
    dobbel();
  }

function dobbel() {
    dobbelArray = []
    while(dobbelArray.length < 5) {
        let random = Math.floor((Math.random() * 6) + 1);
        dobbelArray.push(random);
    }
  }