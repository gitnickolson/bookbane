const library = [];

function Book(title, author, pages, read, written = null) {
    const date = new Date();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.written = written;
    this.dateAdded = date.toISOString();
    this.info = () => { `${this.title} by ${this.author}.
    ${this.pages} pages${this.written ? `, written in ${this.written}.` : "."}" + 
    "${this.read ? "You have read this book." : "You have not read this book." +
        `Entry added: ${this.dateAdded}`}`};
}

function addBook(title) {

}

function addCustomBook(title, author, pages, read, written) {
    const book = new Book(title, author, pages, read, written);
    library.push(book);
    console.log(book)
}

for(let i = 0; i < 10; i++) {
    addCustomBook(`test${i}`, "kek", i, true);
}

console.log(library)