// let val = document.getElementById("select").value;

function removePar() {
  this.remove;
}

let phars = document.getElementsByClassName("par");

for (let i = 0; i < phars.length; i++) {
  phars[i].addEventListener("click", removePar);
}

// document
//   .getElementsByClassName("par")[0]
//   .addEventListener("click", function () {
//     removePar(document.getElementsByClassName("par")[0]);
//   });

// removePar(document.getElementsByClassName("par")[0]);
