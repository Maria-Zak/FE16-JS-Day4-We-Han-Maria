function messageIn() {
    document.getElementById('message').innerHTML = `<p>you are in the circle</p>`;
}
document.getElementById('circle').addEventListener('hover', messageIn)

function background() {
    document.getElementById('message').style.background = 'gray'
}
document.getElementById('circle').addEventListener('click', background)