document.getElementById("stop").style.visibility = "hidden";
document.getElementById("start").style.visibility = "hidden";

function time(){
    const ele=document.querySelector('div');
    let date=new Date();
    let time=date.toLocaleTimeString();
    ele.textContent=time;
}

const update=setInterval(time,1000);