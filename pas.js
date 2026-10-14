let word=document.querySelector(".pass");
let button=document.querySelector(".btn");
let par=document.querySelector(".password");
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

button.addEventListener("click",function(){
    if(word.value.trim()===""){
        return;
    }
    
    let password="";
    for(i=0;i<12;i++){
        let random=Math.floor(Math.random()*characters.length);
        password+=characters[random]

    }

    par.textContent=password;
    
});