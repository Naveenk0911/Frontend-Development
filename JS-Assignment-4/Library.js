class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = false; 
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            return `Book "${this.title}" has been issued.`;
        } else {
            return `Book "${this.title}" is already issued.`;
        }
    }

    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            return `Book "${this.title}" has been returned.`;
        } else {
            return `Book "${this.title}" was not issued.`;
        }
    }
}

const library = [
    new Book("The Great JavaScript", "A. Smith", "978-1234567890"),
    new Book("Node.js Essentials", "B. Doe", "978-0987654321"),
    new Book("Web Development Pro", "C. Clark", "978-1122334455")
];

function displayAvailableBooks() {
    const availableBooks = library.filter(book => !book.isIssued);
    console.log("\n--- Available Books ---");
    if (availableBooks.length === 0) {
        console.log("No books are currently available.");
        return;
    }
    availableBooks.forEach(book => {
        console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}`);
    });
}

function issueBookByISBN(isbn) {
    const book = library.find(book => book.isbn === isbn);

    if (book) {
        console.log(`\nAttempting to issue: ${book.title}`);
        console.log(book.issueBook());
    } else {
        console.log(`\nError: Book with ISBN ${isbn} not found.`);
    }
}

displayAvailableBooks();
issueBookByISBN("978-0987654321"); 
displayAvailableBooks();