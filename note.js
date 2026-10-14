let notes=document.querySelector(".note");
let button=document.querySelector(".btn");
let content=document.querySelector(".notesList");
let titleInput=document.querySelector(".noteTitle")

let notesArray=[];

button.addEventListener("click",function(){
    if( titleInput.value.trim()==="" || notes.value.trim()===""){
        return;
    }

    let noteobject={
        title:titleInput.value.trim(),
        description: notes.value.trim()
    }

   
   notesArray.push(noteobject);
   localStorage.setItem("note",JSON.stringify(notesArray));
   displayNote(noteobject);
    
    titleInput.value="";
    notes.value="";
})


function displayNote(noteObject) {
    let newNote = document.createElement("div");
    newNote.classList.add("noteCard");

    let heading = document.createElement("h3");
    heading.textContent = noteObject.title;

    let description = document.createElement("p");
    description.textContent = noteObject.description;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.classList.add("sbtn");

    deleteButton.addEventListener("click", function () {
        let index = notesArray.indexOf(noteObject);

        if (index !== -1) {
            notesArray.splice(index, 1);
        }

        localStorage.setItem("note", JSON.stringify(notesArray));
        newNote.remove();
    });

    newNote.appendChild(heading);
    newNote.appendChild(description);
    newNote.appendChild(deleteButton);

    content.appendChild(newNote);
}


let savednote=localStorage.getItem("note");



if (savednote !== null) {
    notesArray = JSON.parse(savednote);

    notesArray.forEach(function (noteObject) {
        displayNote(noteObject);
    });
}