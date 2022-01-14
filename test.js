
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
    card.appendChild(row);
    
     }


}

const container = document.querySelector(".container");



function fiveadd(){
  for(let i = 0; i < 5; i++){
    add();
  }
}