let quenum=document.querySelector(".question");
let question=document.querySelector(".para");
let option=document.querySelectorAll(".btn");
let button=document.querySelector(".btn1");
let button01=document.querySelector(".pre");
let finsh=document.querySelector(".finsh");



let ques=[
    {
        quenum:1,
        question:"Which keyword is used to declare a variable that cannot be reassigned?",
        option:["Var","let","const","define"],
        answer:"const"


    },

    {
        quenum:2,
        question:"Which method is used to select an element from the DOM using a CSS selector?",
        option:["getElement()","querySelector()","selectElement()","findElement()"],
        answer:"querySelector()"
    },

    {
        quenum:3,
        question:"Which method is used to attach an event to an HTML element?",
        option:["addEventListener()","addEvent()","eventListener()","attachEventListener()"],
        answer:"addEventListener()"
    },

    {
        quenum:4,
        question:"Which data structure stores multiple values in an ordered collection?",
        option:["Object","String","Array","Function"],
        answer:"Array"
    },

    {
        quenum:5,
        question:"Which loop is commonly used when you know how many times you want to repeat something?",
        option:["if","for","switch","try"],
        answer:"for"
    }
]


let currentQuestion=0;
let score=0;

function loadquestion(){


question.textContent=ques[currentQuestion].question;

option[0].textContent = ques[currentQuestion].option[0];
option[1].textContent = ques[currentQuestion].option[1];
option[2].textContent = ques[currentQuestion].option[2];
option[3].textContent = ques[currentQuestion].option[3];

quenum.textContent=`Question ${currentQuestion+1} of ${ques.length}`;   



}

let answered=false;


option.forEach(function(btn){
    btn.addEventListener("click",function(){

        if(answered){
            return
        }
        if(btn.textContent===ques[currentQuestion].answer){
            score++;
        }


        answered=true;
    });
});

loadquestion();

button.addEventListener("click", function() {
    currentQuestion++;

    if (currentQuestion < ques.length) {
        answered=false;
        loadquestion();
    }
});


button01.addEventListener("click",function(){
    currentQuestion--;
    if(currentQuestion>=0){
        answered=false;
        loadquestion();
    }
})

finsh.addEventListener("click",function(){
    question.textContent = `Quiz Completed!`;
    quenum.textContent = "";
    finsh.textContent = `Score: ${score} / ${ques.length}`;


     option.forEach(function(btn){
        btn.disabled = true;
        btn.style.display = "none";
    });

    button.disabled = true;
    button01.disabled = true;
    finsh.disabled = true;

})





















/*1. Which keyword is used to declare a variable that cannot be reassigned?
- A) var
- B) let
- C) const
- D) define
2. Which method is used to select an element from the DOM using a CSS selector?
- A) getElement()
- B) querySelector()
- C) selectElement()
- D) findElement()
3. Which method is used to attach an event to an HTML element?
- A) addEventListener()
- B) addEvent()
- C) eventListener()
- D) attachEventListener()
4. Which data structure stores multiple values in an ordered collection?
- A) Object
- B) String
- C) Array
- D) Function
5. Which loop is commonly used when you know how many times you want to repeat something?
- A) if
- B) for
- C) switch
- D) try
*/
