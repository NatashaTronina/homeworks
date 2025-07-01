class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = state; 
        this.type = type;
    }

    fix() {
        this.state *= 1.5;
        if (this.state > 100) {
            this.state = 100; 
        }
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = "magazine") {
        super(name, releaseDate, pagesCount, state, type); 
        this.type = type; 
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author, state = 100, type) {
        super(name, releaseDate, pagesCount, author, state, type);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author, state = 100, type) {
        super(name, releaseDate, pagesCount, author, state, type);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author, state = 100, type) {
        super(name, releaseDate, pagesCount, author, state, type);
        this.type = "detective";
    }
}


class Library{
    constructor(name, books = []){
        this.name = name;
        this.books = books;

    }
    addBook(book){
        if(book.state > 30){
            this.books.push(book)
        }else{
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) { 
                return this.books[i]; 
            }
        }
        return null; 
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i]['name'] === bookName) {
                const removedBook = this.books.splice(i, 1)[0]; 
                return removedBook;
            }
        }
        return null; 
    }
}

