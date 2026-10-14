let display=document.querySelector(".time");
let start=document.querySelector(".btn1");
let stop=document.querySelector(".btn2");
let reset=document.querySelector(".btn3");

let timer=0;
let seconds=0;
display.textContent="00:00:00";
start.addEventListener("click",function(){
    if(timer!==0){
        return
    }
    timer = setInterval(function() {
    seconds++;

    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    secs = String(secs).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${secs}`;
}, 1000);

});

stop.addEventListener("click",function(){
    clearInterval(timer);
    timer=0;
})

reset.addEventListener("click",function(){
    clearInterval(timer);
    timer=0;
    seconds=0;
    display.textContent="00:00:00";

   

})