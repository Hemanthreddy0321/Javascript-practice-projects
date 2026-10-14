let  p1=document.querySelector(".add1");
let p2=document.querySelector(".add2");
let p3=document.querySelector(".add3");
let p4=document.querySelector(".add4");
let cart=document.querySelector(".cart");
let heading1=document.querySelector(".head1");
let heading2=document.querySelector(".head2");
let heading3=document.querySelector(".head3");
let heading4=document.querySelector(".head4");
let cost1=document.querySelector(".price1");
let cost2=document.querySelector(".price2");
let cost3=document.querySelector(".price3");
let cost4=document.querySelector(".price4");
let pic1=document.querySelector(".img1");
let pic2=document.querySelector(".img2");
let pic3=document.querySelector(".img3");
let pic4=document.querySelector(".img4");
let cartItems=document.querySelector(".cartitems");
let total=document.querySelector(".total");
let clearbtn=document.querySelector(".clear");
let buy1=document.querySelector(".btn1");
let buy2=document.querySelector(".btn2");
let buy3=document.querySelector(".btn3");
let buy4=document.querySelector(".btn4");
let totalprice=0;
let headphoneQuantity=0;
let mouseQuantity=0;
let keyboradQuantity=0;
let watchQuantity=0;
let message=document.querySelector(".buymessage");

buy1.addEventListener("click",function(){
    message.textContent="You selected Headphones for ₹1,000.";

})

buy2.addEventListener("click",function(){
      message.textContent="You selected Mouse for ₹500.";

})

buy3.addEventListener("click",function(){
      message.textContent="You selected Keyboard for ₹1,500.";

})

buy4.addEventListener("click",function(){
      message.textContent="You selected Smartwatch for ₹2,000.";

})



p1.addEventListener("click",function(){
    
    headphoneQuantity++;
    updateCart();

});

p2.addEventListener("click",function(){
   mouseQuantity++;
   updateCart();
});

p3.addEventListener("click",function(){
    keyboradQuantity++;
    updateCart();
});

p4.addEventListener("click",function(){
    watchQuantity++;
    updateCart();
})

function updateCart(){
    cartItems.innerHTML=" ";

    if(headphoneQuantity>0){
        cartItems.innerHTML+=`<p>Headphones ₹${(1000*headphoneQuantity).toLocaleString("en-IN")} <button class="sum">+</button>   ${headphoneQuantity} <button class="minus">-</button> <button class="removeheadphones">🗑</button> </p>`;

    }

    if(mouseQuantity>0){
        cartItems.innerHTML+=`<p>Mouse  ₹${(500*mouseQuantity).toLocaleString("en-IN")} <button class="sum1">+</button> ${mouseQuantity}<button class="minus1">-</button> <button class="removemouse">🗑</button></p>`;
    }


    if(keyboradQuantity>0){
        cartItems.innerHTML+=`<p>Keyboard ₹${(1500*keyboradQuantity).toLocaleString("en-IN")} <button class="sum2">+</button> ${keyboradQuantity} <button class="minus2" >-</button> <button class="removekey">🗑</button></p>`
    }

    

    if(watchQuantity>0){
        cartItems.innerHTML+=`<p>Smartwatch ₹${(2000*watchQuantity).toLocaleString("en-IN")} <button class="sum3" >+</button> ${watchQuantity} <button class="minus3" >-</button> <button class="removewatch">🗑</button></p>`
    }

   

    let removeBtn=document.querySelector(".removeheadphones");
    if(removeBtn){
        removeBtn.addEventListener("click",function(){
            headphoneQuantity=0;
            updateCart();
        })
    }

    
    let removebtn1=document.querySelector(".removemouse");
    if(removebtn1){
        removebtn1.addEventListener("click",function(){
            mouseQuantity=0;
            updateCart();
        })
    }

    let removebtn2=document.querySelector(".removekey");
    if(removebtn2){
        removebtn2.addEventListener("click",function(){
            keyboradQuantity=0;
            updateCart();
        })
    }

     let removebtn3=document.querySelector(".removewatch");
    if(removebtn3){
        removebtn3.addEventListener("click",function(){
            watchQuantity=0;
            updateCart();
        })
    }

    let  sums=document.querySelector(".sum");
    if(sums){
        sums.addEventListener("click",function(){
            headphoneQuantity+=1;
            updateCart();

        })
    }

    let minus=document.querySelector(".minus");

    if(minus){
        minus.addEventListener("click",function(){
            headphoneQuantity-=1;
            updateCart();
        })
    }



    let sums1=document.querySelector(".sum1");
    if(sums1){
        sums1.addEventListener("click",function(){
            mouseQuantity+=1;
            updateCart();
        })
    }


    let minus1=document.querySelector(".minus1");
    if(minus1){
        minus1.addEventListener("click",function(){
            mouseQuantity-=1;
            updateCart();
        })
    }
    let sums2=document.querySelector(".sum2");
    if(sums2){
        sums2.addEventListener("click",function(){
            keyboradQuantity+=1;
            updateCart();
        })
    }


    let minus2=document.querySelector(".minus2");
    if(minus2){
        minus2.addEventListener("click",function(){
            keyboradQuantity-=1;
            updateCart();
        })
    }
    let sums3=document.querySelector(".sum3");
    if(sums3){
        sums3.addEventListener("click",function(){
            watchQuantity+=1;
            updateCart();
        })
    }

    let minus3=document.querySelector(".minus3");
    if(minus3){
        minus3.addEventListener("click",function(){
            watchQuantity-=1;
            updateCart();
        })
    }

   



    totalprice=(headphoneQuantity*1000)+(mouseQuantity*500)+(keyboradQuantity*1500)+(watchQuantity*2000);

    total.textContent="Total ₹" +totalprice.toLocaleString("en-IN");
    
    
}


clearbtn.addEventListener("click",function(){
    headphoneQuantity=0;
    mouseQuantity=0;
    keyboradQuantity=0;
    watchQuantity=0;
    updateCart();

})
