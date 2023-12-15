const notesContainer = document.querySelector(".notes");
const createBtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
function storage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let intputBox = document.createElement("p");
    let img = document.createElement("img");
    intputBox.className = "input-box";
    intputBox.setAttribute("contenteditable","true");
    img.src = "del.png";
    notesContainer.appendChild(intputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        storage();
    } else if(e.target.tagName === "P"){
        notes = document.querySelector(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                storage();
            }
        })
    }
})