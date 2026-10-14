let texts=document.querySelector(".text");
let para=document.querySelector(".check");
let valids=document.querySelector(".valid");
let show=document.querySelector(".showen");

 show.addEventListener("click",function(){
    if(texts.type==="password"){
        texts.type="text";
        show.textContent="Hide";
    }
    else{
        texts.type="password";
        show.textContent="show";
    }
 })

texts.addEventListener("input",function(){

    if (texts.value === "") {
    para.textContent = "Enter a password";
    valids.innerHTML = "";
    return;
}

    

    let hasUppercase=/[A-Z]/.test(texts.value);
    let hasLowercase=/[a-z]/.test(texts.value);
    let hasNumber=/[0-9]/.test(texts.value);
    let hasSpecial=/[!@#$%^&*]/.test(texts.value);
    let score=0;
    if(texts.value.length>=8){
        score++;
    }
    if(hasUppercase){
        score++;
    }
    if(hasLowercase){
        score++;
    }
    if(hasNumber){
        score++;
    }
    if(hasSpecial){
        score++;
    }

    if(score<=2){
        para.textContent=`Password Strength: Weak`;
    }
    else if(score<=4){
        para.textContent=`Password Strength: Medium`;
    }
    else{
        para.textContent=`Password Strength: Strong `;
    }

    let commonPasswords = ["password", "password123", "12345678", "qwerty", "admin123"];


 if (commonPasswords.includes(texts.value.toLowerCase())) {
    para.textContent = "Password is too common!";
    para.style.color = "red";
} else {
    para.style.color = "";
}

    let message="";

    if(!hasUppercase){
        message+='Missing UpperCase <br>';

    }
    else{
        message+=`UpperCase ✓ <br>`;
    }

    if(!hasLowercase){
        message+='Missing LowerCase<br>';
    }
    else{
        message+=`LowerCase ✓ <br>`;
    }

    if(!hasNumber){
        message+=`Missing Numbers <br>`;
    }
    else{
        message+=`Numbers ✓ <br>`;
        
    }

    if(!hasSpecial){
        message+=`Special Char Missing <br>`;
    }
    else{
        message+=`Special Characters ✓ <br>`;
    }

    if (texts.value.length < 8) {
    message += "At least 8 characters required<br>";
} else {
    message += "Length ✓ <br>";
}

    valids.innerHTML=message;

})