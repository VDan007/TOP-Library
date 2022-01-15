
let myLibrary = [];

function Book (title,pages,author){
  this.title = title,
  this.pages = pages,
  this.author = author
  
}


function addBookToLibrary(x){
myLibrary.push(x);
}


function add (){
  const card = document.createElement("div");

  card.classList.add("card");
  container.appendChild(card);

  for(let i = 0;i<3;i++){ 
    const row = document.createElement("div");
    row.classList.add("maru");
    row.setAttribute("id",`row${i}`);
    card.appendChild(row);
    
     }


}

const container = document.querySelector(".container");
const popup = document.querySelector(".popup");
const overlay = document.querySelector("#overlay");





function addNewBook(){
popup.classList.add("active");
overlay.classList.add("active");
}
function removeActive(){
popup.classList.remove("active");
overlay.classList.remove("active");
}

const newBook = document.querySelector("#newBook");
newBook.addEventListener("click",addNewBook);
const popupCloseBtn = document.querySelector("#popupCloseBtn");
popupCloseBtn.addEventListener("click",removeActive);