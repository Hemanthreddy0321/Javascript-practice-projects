let foodname=document.querySelector(".foodname");
let amount=document.querySelector(".amount");
let button=document.querySelector(".btn");
let explist=document.querySelector(".explist");
let totaldisplay=document.querySelector(".total");
let total=0;

let array=[];

button.addEventListener("click",function(){

    if(foodname.value.trim()==="" || amount.value==="" || Number(amount.value)<=0){
        return;
    }
    let foodnameValue = foodname.value;
    let newnote=document.createElement("p");
    newnote.textContent=`${foodname.value} , ₹${amount.value}`;
    total+=Number(amount.value);
    totaldisplay.textContent=`Total Expense: ₹${total}`;
    let expenseamount=Number(amount.value);
    array.push({
        name:foodname.value,
        amount:expenseamount
    })

    localStorage.setItem("expenses",JSON.stringify(array));

    let deletebutton=document.createElement("button");
    deletebutton.textContent="🗑️";
    deletebutton.addEventListener("click",function(){
         let index = array.findIndex(function(expense) {
        return expense.name === foodnameValue &&
               expense.amount === expenseamount;
    });

    if (index !== -1) {
        array.splice(index, 1);
    }

    localStorage.setItem("expenses", JSON.stringify(array));

    total -= expenseamount;
    totaldisplay.textContent = `Total Expense: ₹${total}`;
    newnote.remove();
    })
    

    newnote.appendChild(deletebutton);
    explist.appendChild(newnote);

    foodname.value="";
    amount.value="";


})


let savedExpenses = localStorage.getItem("expenses");

if (savedExpenses !== null) {
    array = JSON.parse(savedExpenses);
    total=0;

    array.forEach(function(expense) {
        total += expense.amount;
        let newnote=document.createElement("p");
        newnote.textContent=`${expense.name} ₹${expense.amount}`;
        let deletebutton=document.createElement("button");
        deletebutton.textContent="🗑️";
        newnote.appendChild(deletebutton);
        explist.appendChild(newnote);

        deletebutton.addEventListener("click", function() {
    let index = array.indexOf(expense);

    array.splice(index, 1);

    localStorage.setItem("expenses", JSON.stringify(array));

    newnote.remove();

    total -= expense.amount;
    totaldisplay.textContent = `Total Expense: ₹${total}`;
});
        
    });

    totaldisplay.textContent = `Total Expense: ₹${total}`;
}

