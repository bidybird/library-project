let myLibrary = [];

const form = document.getElementById("register");

//submit a new book written in form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = form.elements["title"];
  const author = form.elements["author"];
  const pages = form.elements["pages"];
  const read = isBookRead();

  addBookToLibrary(title.value, author.value, pages.value, read);

  bookDisplay(myLibrary);
});

//Check if book is read
function isBookRead() {
  if (document.querySelector("#read").checked == true) {
    return "read";
  } else {
    return "not read";
  }
}

//Constructor function used to make new books and push into an array
function addBookToLibrary(titleNew, authorNew, pagesNew, readNew) {
  let newBook = new Book(titleNew, authorNew, pagesNew, readNew);
  myLibrary.push(newBook);
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
    removeButton.dataset.test = i;
    removeButton.classList.toggle("removeButton");
    removeButton.textContent = "Remove book.";
    removeButton.addEventListener("click", function (e) {
      myLibrary.splice(Number(e.target.dataset.test), 1);
      // would update data attributes of all the books after the deleted book
      e.target.parentNode.parentNode.remove();
      bookDisplay(libraryArray);
    });

    const readButton = document.createElement("button");
    readButton.classList.toggle("readButton");
    readButton.textContent = "read/not";
    readButton.addEventListener("click", function (e) {
      if (
        myLibrary[e.target.previousElementSibling.dataset.test].read == "read"
      ) {
        myLibrary[e.target.previousElementSibling.dataset.test].read =
          "not read";
      } else {
        myLibrary[e.target.previousElementSibling.dataset.test].read = "read";
      }
      bookDisplay(libraryArray);
      //console.log(e.target.previousElementSibling.dataset.test);
      //console.log(e.target.parentNode.parentNode.textContent); didn't have to alter this text content
      //just had to have the book display function run within itself to display the newly fixed value
    });

    buttonBox.appendChild(removeButton);

    buttonBox.appendChild(readButton);

    card.appendChild(buttonBox);

    shelf.appendChild(card);
  }
  shelves.appendChild(shelf);
}

//make a button that un-hides the form
const formBtn = document.querySelector("#newBook");
formBtn.addEventListener("click", () => {
  const hideForm = document.getElementById("register");
  if (hideForm.style.visibility !== "visible") {
    hideForm.style.visibility = "visible";
  } else {
    hideForm.style.visibility = "hidden";
  }
});

//Function to create book objects
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//Make a prototype for book so that all its children can display their content in text on a div
Book.prototype.displayContent = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages. ${this.read}.`;
};

//Clears all elements with id shelf
function clearShelves() {
  const shelfId = document.getElementById("shelf");
  if (shelfId !== null) {
    shelfId.remove();
  }
}

// creation of class object creator, static method and property
class Book {
  constructor(Title, Author, Pages, Read) {
    this.title = Title;
    this.author = Author;
    this.pages = Pages;
    this.read = Read;
  }

  static displayName = "Book";
  static bookInfo(title, author, pages, read) {}
}
