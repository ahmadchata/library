let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return (title + " by " + author + ", " + pages + " pages, " + read)
  }
}

const darkKnight = new Book('The Dark Knight', 'Bruce Wayne', 20, 'not read yet')
const fashion = new Book('Buttons', 'Victoria', 15, 'read')
const shoes = new Book('Sandals', 'Mark', 10, 'not read yet')



function addBookToLibrary() {
  myLibrary.push(darkKnight)
  myLibrary.push(fashion)
  myLibrary.push(shoes)
}
addBookToLibrary();
console.log(myLibrary);
