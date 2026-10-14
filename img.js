let images=[
    "headphoes.png",
    "mouse.png",
    "keyboard.png",
    "watch.png",

]

let currentindex=0;



let prevbutton=document.querySelector(".prebtn");
let nextbutton=document.querySelector(".nxtbtn");
let slider=document.querySelector(".slider");
let count=document.querySelector(".imagecount");
let dot=document.querySelector(".dots");

for(let i=0;i<images.length;i++){
    let button=document.createElement("button");
   dot.appendChild(button);
   button.classList.toggle("active", i === currentindex);
   
button.addEventListener("click", function () {
    currentindex = i;
    slider.src = images[currentindex];
    count.textContent = `Image ${currentindex + 1} of ${images.length}`;
    updateDots();
});


}


function updateDots() {
    let buttons = dot.querySelectorAll("button");

    buttons.forEach(function (button, i) {
        button.classList.toggle("active", i === currentindex);
    });
}






nextbutton.addEventListener("click",function(){
    currentindex++;
    if(currentindex>=images.length){
        currentindex=0;
    }
    slider.src=images[currentindex];

   
    count.textContent=`Image of ${currentindex+1} of ${images.length}`;
    updateDots();
})


prevbutton.addEventListener("click",function(){
     currentindex--;
    if(currentindex<0){
        currentindex=images.length-1;
    }
    slider.src=images[currentindex];
    

    count.textContent=`Image of ${currentindex+1} of ${images.length}`;
    updateDots();



})