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
        return `Written by ${this.author} ${this.written ? `${"(" + this.written + ")" }` : ""}.
${this.pages} pages${this.written ? `.` : "."}
${this.read ? "You have read this book." : "You have not read this book."}

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

    const titleP = document.createElement('p');
    titleP.classList.add('book_item');
    titleP.textContent = book.title;

    const infoP = document.createElement('p');
    infoP.classList.add('book_info_item');
    infoP.textContent = book.info();

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete_button')
    deleteButton.textContent = "Delete"
    deleteButton.addEventListener("click", deleteEvent, false)

    bookList.appendChild(titleP);
    bookList.appendChild(infoP)
    bookList.appendChild(deleteButton)
}

const customBookButton = document.querySelector(".add_custom_book_button")
customBookButton.addEventListener("click", submitButtonClick, false)

function submitButtonClick(event) {
    event.preventDefault();

    const form = event.target.form
    const title = form[0].value;
    const author = form[1].value;
    const pages = form[2].value;
    const written = form[3].value;
    const read = form[4].checked;

    addCustomBook(title, author, pages, read, written);
}

function deleteEvent(event) {
    const buttonIndex = findButtonIndex(event);
    const bookItems = document.querySelectorAll(".book_item")
    const bookInfoItems = document.querySelectorAll(".book_info_item")

    bookItems[buttonIndex].remove()
    bookInfoItems[buttonIndex].remove()
    event.target.remove()
}

function findButtonIndex(event) {
    const deleteButtons = document.querySelectorAll(".delete_button")
    for(let i = 0; i < deleteButtons.length; i++) {
        if (deleteButtons[i] === event.target) {
            return i;
        }
    }
}