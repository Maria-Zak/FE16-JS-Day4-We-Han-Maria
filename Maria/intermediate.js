// function dissapear1() {
//     document.getElementById('santa1').style.visibility = 'hidden';
// }
// document.getElementById('santa1').addEventListener('click', dissapear1)

// function returnSanta1() {
//     document.getElementById('santa1').style.visibility = 'visible'
// }

// function removeSanta2() {

//     this.style.opacity = "0";

//     // (this) here will back to the element that we will target or select

//     this.style.transition = "1s";

// }
// document.getElementById('santa2').addEventListener('click', returnSanta1)
// document.getElementById('santa2').addEventListener('click', removeSanta2)

// function bellSanta() {
//     document.getElementById('santa3') = a.src('https: //freepngimg.com/download/christmas_bell/1-2-christmas-bell-png-image.png')
// }
// document.getElementById('santa3').addEventListener('click', bellSanta)

document.querySelectorAll('.santa').forEach(item => {
    item.addEventListener('click', removeAll);
})

function removeAll() {
    // this.src = "https://freepngimg.com/download/christmas_bell/1-2-christmas-bell-png-image.png";
    if (this.style.opacity == "0") {
        this.style.opacity = "1";
        this.src = "https://freepngimg.com/download/christmas_bell/1-2-christmas-bell-png-image.png";
    } else {
        this.style.opacity = "0";
        this.style.transition = '1s'
            // this.src = 'https://juststickers.in/wp-content/uploads/2016/11/santa-claus.png'

    }
    // this.style.opacity = "0";
    // this.style.transition = '1s'
    // this.remove();
    // this.style.display = 'none';
}