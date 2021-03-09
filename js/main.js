let myLibrary = [];
const booksContainer = document.getElementById('books-container')
const addBookForm = document.getElementById('addBookForm');
const books = document.querySelectorAll('[data-id]')
function showAddBookForm() {
  addBookForm.classList.toggle('d-none')
}
function Book(title, author, pages, read, id = myLibrary.length + 1) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.id = id
  this.info = function () {
    return (title + " by " + author + ", " + pages + " pages, " + read)
  }
}
function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read)
  myLibrary.push(book)
}
function deleteBook(event){
  console.log(event.target)
}

addBookToLibrary('The Dark Knight', 'Bruce Wayne', 20, true)
addBookToLibrary('Buttons', 'Victoria', 15, false)
addBookToLibrary('Sandals', 'Mark', 10, true)

myLibrary.forEach((book) => {
  displayBook(book)
})

function displayBook(book) {

  const bookCard = `
  <div class="card mr-4 mt-2" style="width: 18rem;" data-id="card-${book.id}">
    <div class="card-body">
      <h5 class="card-title">${book.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
      <p class="card-text">${book.pages}</p>
      
      <button class="btn btn-danger">Remove</button>
    </div>
  </div>
`
  booksContainer.innerHTML += bookCard
  const el = document.querySelectorAll(`[data-id] button.btn-danger`).forEach((el)=>{
    el.addEventListener('click',(e)=>{
      deleteBook(e)
    })
  })

}
