// function print(e){
//     console.log(e)
// }

let print = (e) => {
  console.log(e.target.value);
  let fname = e.target.value;
  let lname = document.getElementById("lname").value;
  if (fname.length > 5) {
    document.getElementById(
      "result"
    ).innerHTML = `<p style="color:red;">${fname}</p>`;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `<p style="color:green;">${fname}</p>`;
  }
};

let printl = (e) => {
  console.log(e.target.value);
  let fname = e.target.value;
  let lname = document.getElementById("lname").value;
  if (fname.length > 5) {
    document.getElementById(
      "result"
    ).innerHTML = `<p style="color:red;">${fname}</p>`;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `<p style="color:green;">${fname}</p>`;
  }
};

document.getElementById("fname").addEventListener("input", print);
document.getElementById("lname").addEventListener("input", printl);
