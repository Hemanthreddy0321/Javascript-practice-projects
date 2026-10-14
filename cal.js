let display=document.querySelector(".display");
let numbers=document.querySelectorAll(".number");
let oper=document.querySelectorAll(".operation");
let equals=document.querySelector(".equal");
let clears=document.querySelector(".clear");
let backspaces=document.querySelector(".backspace");


let firstnumber="";
let operator="";
let secondnumber="";
let result="";


backspaces.addEventListener("click",function(){

    if(secondnumber!== ""){
         secondnumber=secondnumber.slice(0,-1);
        display.textContent=firstnumber + "" + operator + "" +secondnumber;
        return;

    }
     if(operator!==""){
        operator="";
        display.textContent=firstnumber;
        return;
    
        
    }
    if(firstnumber!==""){
       firstnumber=firstnumber.slice(0,-1);
        display.textContent=firstnumber || "0";
    }
});

oper.forEach(function(op){
    op.addEventListener("click",function(){

        if(firstnumber===""){
            return;
        }

         if (secondnumber !== "") {

            let num1 = Number(firstnumber);
            let num2 = Number(secondnumber);

            if (operator === "+") {
                result = num1 + num2;
            }
            else if (operator === "-") {
                result = num1 - num2;
            }
            else if (operator === "×") {
                result = num1 * num2;
            }
            else if (operator === "/") {
                if (num2 === 0) {
                    display.textContent = "cannot divide by 0";
                    return;
                }

                result = num1 / num2;
            }

            firstnumber = result.toString();
            secondnumber = "";
        }
        
        operator=op.textContent;
        display.textContent=firstnumber + " " + operator;
        
    });
});

clears.addEventListener("click",function(){
        firstnumber="";
        operator="";
        secondnumber="";

    display.textContent=0;

})




numbers.forEach(function(number){
    number.addEventListener("click",function(){
        if(operator===""){
            if(number.textContent==="." && firstnumber.includes(".")){
                return;
            }
            firstnumber+=number.textContent;
            display.textContent=firstnumber;
        }
        else{
             if(number.textContent==="." && secondnumber.includes(".")){
                return;
            }
            secondnumber+=number.textContent;
            display.textContent=firstnumber + " " + operator + " " + secondnumber;
        }
    });
});

equals.addEventListener("click",function(){

    if (firstnumber === "" || operator === "" || secondnumber === "") {
    return;
}

    let num1=Number(firstnumber);
    let num2=Number(secondnumber);

    if(operator==="+"){
        result=num1+num2;
        display.textContent=result;
    }
    else if(operator==="-"){
        result=num1-num2;
        display.textContent=result;
    }
    else if(operator==="×"){
        result=num1*num2;
        display.textContent=result;
    }
    else if(operator==="/"){
        if(num2===0){
            display.textContent="cannot divide by 0";
            return;
        }
        result=num1/num2;
        display.textContent=result;
    }

    firstnumber=result.toString();
    operator="";
    secondnumber="";


});