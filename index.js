const library = document.getElementById("library-container");
const openForm = document.getElementById("openForm");
const formPopUp = document.querySelector(".form-popup");
const agregar = document.querySelector(".agregar");
const reset = document.querySelector(".reset");
const autor = document.getElementById("autor");
const titulo = document.getElementById("titulo");
const paginas = document.getElementById("paginas");
const body = document.querySelector("body");
let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
  const book = new Book(title, author, pages);
  myLibrary.push(book);
}

const lastLetter = word => {
  const size = word.length;
  return word[size - 1];
};

openForm.addEventListener("click", e => {
  console.log("click");
  formPopUp.style.display = "block";
  console.log(autor.value);
  body.style.backgroundColor = "#111";
});

agregar.addEventListener("click", e => {
  formPopUp.style.display = "hidden";
  body.style.backgroundColor = "#fff";
});
