let cnt = 0;
var plusbtn = document.getElementById('increment');
var minusbtn = document.getElementById('decrement');

function changereflect(){
document.getElementById('counterBox').innerText=cnt;
}

function incrementcnt(){
    cnt++;
    changereflect();
    playsound();
}

function decrenetcnt(){
    cnt--;
    changereflect();
    playsound();
}

plusbtn.addEventListener('click', incrementcnt);
minusbtn.addEventListener('click', decrenetcnt);


var refres = document.getElementById('reset');

function counter_zero(){
    cnt =0;
    changereflect();
    playsound();
}

refres.addEventListener('click', counter_zero);

const clickbtn = document.getElementById("buttonClickSound");

function playsound(){
clickbtn.currentTime = 0;
clickbtn.play();
}

