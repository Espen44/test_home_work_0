
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    };

    fix() {
        let summState = this.state * 1.5;
            if(this.state < 0) {
                this.state = 0;
            }

            if( summState > 100) {
                summState = 100;
                this.state = 100;
            }  
            this.state = summState;
    }

        set state (value) {
            if (value < 0) {
                return (this._state = 0);
            } 
            else if (value > 100){
                return (this._state = 100);
            } 
                return (this._state = value);
        }
        get state () {
        return this._state;
        }
};

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}
    
class Book extends PrintEditionItem {
    constructor( author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor( author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor( author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor( author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library {
    constructor(str, books){
        this.name = str;
        this.books = [];
    }

        addBook(book) {
            this.books.push(book);
}

    findBookBy(type, value) {
        let result = this.books.find(book => book[type] === value);
        if(result) {
            return result;
        } else if (result === undefined) {
            return null;
        }
    }
    giveBookByName(bookName) {
        let searchElement = this.books.findIndex(book => book.name === bookName);
        if (searchElement !== -1) {
        return this.books.splice([searchElement], 1)[0];
        } else {
        return null;
        }
    }
};
