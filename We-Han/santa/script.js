function remove(){
    let santa=document.getElementsByClassName("santa");
    // this.remove();
    this.style.opacity="0";
    this.style.transition="1"
}
let santa=document.getElementsByClassName("santa");

for(let i=0; i<santa.length;i++){
    santa[i].addEventListener("click", remove);
}
// }
// document.getElementsByClassName("santa").addEventListener("click", remove);
// remove(document.getElementsByClassName("santa"));

