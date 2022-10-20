let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  //do stuff here
}

const theHobbit = new Book("The Hobbit", "Tolkien", "285", "read");

const theLordOfTheRings = new Book(
  "The Lord of the Rings",
  "Tolkien",
  "325",
  "not read yet"
);

const sutree = new Book("Sutree", "Mr. Guy", "200", "not read yet");

const brothersOfBlood = new Book(
  "Brothers of Blood",
  "Tristan",
  "165",
  "not read yet"
);
