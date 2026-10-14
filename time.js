let data=document.querySelector(".clock");


setInterval(function (){
    let time=new Date();
    let hour=time.getHours();
    let minute=String(time.getMinutes()).padStart(2,"0");
    let second=String(time.getSeconds()).padStart(2,"0");

    let period;

    if(hour>=12){
        period="PM";
    }
    else{
        period="AM";
    }


    if(hour==0){
        hour=12;
    }
    else if (hour>=12){
        hour=hour-12;

    }

data.textContent=`${hour}:${minute}:${second} ${period}`;


},1000);
