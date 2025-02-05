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
        return `Written by ${this.author}${this.written ? `${" (" + this.written + ")"}` : ""}.
            ${this.pages} pages${this.written ? `.` : "."}
Entry added: ${this.dateAdded}`;
    };
}

function addCustomBook(title, author, pages, read, written) {
    const book = new Book(title, author, pages, read, written);
    library.push(book);
    visualizeNewBook(book);
}

function visualizeNewBook(book) {
    const titleP = addTitleParagraph(book)
    const infoP = addInfoParagraph(book)
    const readQuestion = addReadQuestion()
    const readCheckbox = addReadCheckbox(book)
    const deleteButton = addDeleteButton()

    const bookBanner = addBookBannerDiv()
    bookBanner.appendChild(titleP);
    bookBanner.appendChild(infoP)
    bookBanner.appendChild(readQuestion)
    bookBanner.appendChild(readCheckbox)
    bookBanner.appendChild(deleteButton)

    const bookList = document.querySelector(".book-list");
    bookList.appendChild(bookBanner)
}

function addTitleParagraph(book) {
    const titleP = document.createElement('p');
    titleP.classList.add('book-title');
    titleP.textContent = book.title;
    return titleP;
}

function addInfoParagraph(book) {
    const infoP = document.createElement('p');
    infoP.classList.add('book-info');
    infoP.textContent = book.info();
    return infoP;
}

function addReadQuestion() {
    const readQuestionP = document.createElement('p');
    readQuestionP.classList.add('read-question');
    readQuestionP.textContent = "Read?";
    return readQuestionP;
}

function addReadCheckbox(book) {
    const readCheckbox = document.createElement('input');
    readCheckbox.type = "checkbox";
    readCheckbox.classList.add('read-checkbox');
    readCheckbox.checked = book.read;
    return readCheckbox;
}

function addDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteEvent, false);
    return deleteButton;
}

function addBookBannerDiv() {
    const bookBanner = document.createElement('div')
    bookBanner.classList.add('book-banner')
    return bookBanner
}

function deleteEvent(event) {
    const buttonIndex = findButtonIndex(event);
    const bookBanners = document.querySelectorAll(".book-banner")
    const bookTitles = document.querySelectorAll(".book-title")
    const bookInfoItems = document.querySelectorAll(".book-info")
    const readQuestions = document.querySelectorAll(".read-question")
    const readCheckboxes = document.querySelectorAll(".read-checkbox")

    bookTitles[buttonIndex].remove()
    bookInfoItems[buttonIndex].remove()
    readQuestions[buttonIndex].remove();
    readCheckboxes[buttonIndex].remove()
    bookBanners[buttonIndex].remove()
    event.target.remove()
}

function findButtonIndex(event) {
    const deleteButtons = document.querySelectorAll(".delete-button")
    for (let i = 0; i < deleteButtons.length; i++) {
        if (deleteButtons[i] === event.target) {
            return i;
        }
    }
}

const customBookButton = document.querySelector(".add-custom-book-button")
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
