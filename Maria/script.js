function submitData() {
    let fname = document.getElementById("fname").value;
    let lname = document.querySelector('#lname').value
    let age = document.querySelector('#age').value
    let job = document.getElementById('jobs').value

    if (fname.length < 5 || lname.length < 5) {
        document.getElementById('result').innerHTML = `<p style="color:red;">${fname} </p><p style="color:red;">${lname}</p><p>${age}</p>`
    } else {
        document.getElementById('result').innerHTML = `<p style="color:green;">${fname} </p><p style="color:green;">${lname}</p><p>${age}</p>`
    }

    if (job == 'it') {
        document.getElementById('field').innerHTML = `${job}`;
        document.getElementById('field').style.background = 'purple';
    } else {
        document.getElementById('field').innerHTML = `${job}`;
        document.getElementById('field').style.background = 'yellow';
    }
}
document.getElementById('fname').addEventListener('input', submitData);
document.getElementById('lname').addEventListener('input', submitData);
// document.getElementById('job').addEventListener('change', submitData)
document.getElementById('btn').addEventListener('click', submitData)



// let submit = (e) => {
//     let fname = e.target.value;
//     console.log(e.target.value)
//     let lname = document.getElementById("lname").value;

//     if (fname.length < 5) {
//         document.getElementById("result").innerHTML = `<p style="color:red;">${fname}</p><p>${lname}</p>`;
//     } else {
//         document.getElementById("result").innerHTML = `<p style="color:green;">${fname}</p><p>${lname}</p>`;

//     }
// }
// document.getElementById('fname').addEventListener('input', submit);
// document.getElementById('lname').addEventListener('input', submit);
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    document.body.style.background = bgColor;
}

document.getElementById('btn').addEventListener('click', random_bg_color)