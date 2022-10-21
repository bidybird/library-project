let myLibrary = [];

//Function to create book objects
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.readBook = function () {};
}

//Make a prototype for book so that all its children can display their content in text on a div
Book.prototype.displayContent = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages. ${this.read}.`;
};

//Constructor function used to make new books and push into an array
function addBookToLibrary(titleNew, authorNew, pagesNew, readNew) {
  let newBook = new Book(titleNew, authorNew, pagesNew, readNew);
  myLibrary.push(newBook);
}

function clearShelves() {
  const shelfId = document.getElementById("shelf");
  if (shelfId !== null) {
    shelfId.remove();
  }
}

//Function used to display books on ui, gives each div made the class displayedBook,
function bookDisplay(libraryArray) {
  clearShelves();
  const shelves = document.querySelector("#shelves");
  const shelf = document.createElement("div");
  shelf.setAttribute("id", "shelf");
  shelf.classList.toggle("shelf");

  for (let i = 0; i < libraryArray.length; i++) {
    const card = document.createElement("div");
    card.classList.toggle("shownBook");
    card.textContent = `${libraryArray[i].displayContent()}`;

    const buttonBox = document.createElement("div");
    buttonBox.classList.toggle("buttonBox");

    const removeButton = document.createElement("button");
    removeButton.classList.toggle("removeButton");
    removeButton.textContent = "Remove book.";

    const readButton = document.createElement("button");
    readButton.classList.toggle("readButton");
    readButton.textContent = "read/not";

    buttonBox.appendChild(removeButton);

    buttonBox.appendChild(readButton);

    card.appendChild(buttonBox);

    shelf.appendChild(card);
  }
  shelves.appendChild(shelf);
}

let titleNew = "whoops";
const form = document.getElementById("register");

form.addEventListener("submit", (event) => {
  // stop page from refreshing
  event.preventDefault();
  const title = form.elements["title"];
  const author = form.elements["author"];
  const pages = form.elements["pages"];
  const read = form.elements["read"];
  addBookToLibrary(title.value, author.value, pages.value, read.value);

  bookDisplay(myLibrary);
});

console.log(myLibrary);
console.log(titleNew);

//make a button that un-hides the form
const container = document.querySelector("#container");

const formBtn = document.querySelector("#newBook");
formBtn.addEventListener("click", () => {
  const hideForm = document.getElementById("register");
  if (hideForm.style.visibility !== "hidden") {
    hideForm.style.visibility = "hidden";
  } else {
    hideForm.style.visibility = "visible";
  }
});
