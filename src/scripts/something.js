const library = [];

function Book(title, author, pages, read, written = null) {
    const date = new Date();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.written = written;
    this.dateAdded = date.toISOString();
    this.info = () => {
        return `${this.title} by ${this.author}.
${this.pages} pages${this.written ? `, written: ${this.written}.` : "."}
${this.read ? "You have read this book." :  "You have not read this book." }

Entry added: ${this.dateAdded}`;
    };
}

function addCustomBook(title, author, pages, read, written) {
    const book = new Book(title, author, pages, read, written);
    library.push(book);
    visualizeNewBook(book);
}


function visualizeNewBook(book) {
    const bookList = document.querySelector(".book_list");
    console.log(bookList)

    const newP = document.createElement('p');
    newP.classList.add('book_item');
    newP.textContent = book.info();

    bookList.appendChild(newP);
}

const customBookButton = document.querySelector(".add_custom_book_button")
customBookButton.addEventListener("click", buttonClick, false)

function buttonClick(event) {
    event.preventDefault();
    console.log(event)
    const form = event.target.form
    const title = form[0].value
    const author = form[1].value
    const pages = form[2].value
    const written = form[3].value
    const read = form[4].checked
    addCustomBook(title, author, pages,  read, written)
}