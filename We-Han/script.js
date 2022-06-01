function printFullName() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age1").value;
    let selector = document.getElementById("result");
    if (fname.length > 5) {
      selector.innerHTML = `<p id="text">${fname}</p><p id="text">${lname}</p><p id="number">${age}</p>`;
      document.getElementById("text").style.color="green";
    } else {
      selector.innerHTML = `<p style="color:red">${fname}</p><p>${lname}</p>`;
      document.getElementById("result").style.color = "red";
    }
  }
  document.getElementById("fname").addEventListener("input", printFullName);
  document.getElementById("lname").addEventListener("input", printFullName);
  document.getElementById("age1").addEventListener("input", printFullName);

document.getElementById("btn").addEventListener("click", printFullName);


