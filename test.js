
let myLibrary = [];

function Book (title,pages,author){
  this.title = title,
  this.pages = pages,
  this.author = author
  
}








function add (){
  const card = document.createElement("div");
  card.classList.add("card");
  const cardSlot1 = document.createElement("div");
  const cardSlot2 = document.createElement("div");
  const cardSlot3 = document.createElement("div");
  card.appendChild(cardSlot1);
  card.appendChild(cardSlot2);
  card.appendChild(cardSlot3);
  let bookTitle = document.querySelector("#bookTitle").value;
  let bookPages = document.querySelector("#bookPages").value;
  let bookAuthor = document.querySelector("#bookAuthor").value;
  console.log(bookTitle,bookPages,bookAuthor);
  cardSlot1.textContent = bookTitle;
  cardSlot2.textContent = bookPages;
  cardSlot3.textContent = bookAuthor;
  container.appendChild(card);
  removeActive();
}

function check(){
  console.log("OK");
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
const addBook = document.querySelector("#addBook");
addBook.addEventListener("click",add);
const cardSlot1 = document.createElement("div");
const cardSlot2 = document.createElement("div");
const cardSlot3 = document.createElement("div");
