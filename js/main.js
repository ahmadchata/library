let myLibrary = [];
const booksContainer = document.getElementById('books-container')
const formSubmit = document.querySelector('#addBookForm button')
const books = document.querySelectorAll('[data-id]')
const addBookForm = document.getElementById('addBookForm');
function handleAddBookForm (e) {
  e.preventDefault()
  
  const chk_status = addBookForm.checkValidity();
  addBookForm.reportValidity();

  if(chk_status){
    const formdata = new FormData(addBookForm)
    const json = {}

    formdata.forEach((v,k)=>json[k]=v)

    if([...formdata.entries()].length == 3){
      json["read"] = false
    }else{
      json["read"] = true
    }
    const { bookName, authorName, numPages, read } = json
    addBookToLibrary(bookName, authorName, numPages, read)
  }

}
formSubmit.addEventListener('click',(e)=>{
  handleAddBookForm(e)
})

function showAddBookForm() {
  addBookForm.classList.toggle('d-none')
}
function Book(title, author, pages, read, id = Date.now()) {
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
  displayBook(book)
}
function deleteBook(event){
  const book = event.target.parentElement.parentElement
  const index = book.dataset.id.split('-')[1] - 1
  myLibrary.splice(index, 1);
  book.remove()
}


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
