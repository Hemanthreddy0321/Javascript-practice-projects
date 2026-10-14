let task = document.querySelector(".content");
let button = document.querySelector(".btn");
let taskList = document.querySelector(".taskList");
let search=document.querySelector(".search");

search.addEventListener("input", function () {

    let tasks = document.querySelectorAll(".taskList li");

    tasks.forEach(function (item) {

        if (item.textContent.toLowerCase().includes(search.value.toLowerCase())) {
            item.style.display = "list-item";
        } else {
            item.style.display = "none";
        }

    });

});



button.addEventListener("click",function(){
    if (task.value.trim()==""){
        return;
    }   
    let li = document.createElement("li");

    li.textContent = task.value;
    taskList.appendChild(li);
    li.addEventListener("click", function(){
    li.classList.toggle("completed");
});
    let deletebutton=document.createElement("button");

    deletebutton.textContent="Delete";

    deletebutton.addEventListener("click",function(){
        event.stopPropagation()
        li.remove();
        
    })
    li.appendChild(deletebutton);

    task.value = "";
   


})