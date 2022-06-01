const btnAdd = document.querySelector("#result");
const testBtn = document.querySelector(".test-btn");

testBtn.onclick = printMessage.querySelector("#result");

function validateInput (e){
    console.log(e.target.value);
    if (e.target.value.length < 5) {
      e.target.style.color = "green";
     
    } else {
      e.target.style.color = "red";
      
    }
  };
  validateInput(e);

