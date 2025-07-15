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
    constructor(name, releaseDate, pagesCount, author, state = 100, type) {
        super(name, releaseDate, pagesCount, author, state, type)
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author, state = 100, type){
        super(name, releaseDate, pagesCount, author, state, type)
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

// findBookBy(type, value) {
//  const findResult = this.books.find((item) => item[type] === value);
//  return findResult || null;
// }

// giveBookByName(bookName) {
//   const book = this.findBookBy("name", bookName);
//   if (!book) return null;
//   this.books = this.books.filter((item) => item.name !== bookName);
//   return book;
// }


class Student {
    constructor(name, gender, age, marks) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {}; 
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) { 
            return; 
        }


        if (!this.marks.hasOwnProperty(subject)) {
            this.marks[subject] = []; 
        }
        
        this.marks[subject].push(mark); 

    }

    getAverageBySubject(subject) {
        if (!this.marks.hasOwnProperty(subject)) {
            return 0; 
        }

        const marks = this.marks[subject];
        if (marks.length === 0) {
            return 0; 
        }
        return marks.reduce((acc, mark) => acc + mark, 0) / marks.length; 
    }

    getAverage() {
        let totalMarks = 0;
        let totalSubjects = 0;

        for (const subject in this.marks) {
            if (this.marks.hasOwnProperty(subject)) {
                totalMarks += this.getAverageBySubject(subject) || 0; 
                totalSubjects++;
            }
        }

        if (totalSubjects === 0) {
            return 0;
        }

        return totalMarks / totalSubjects; 
    }

}
