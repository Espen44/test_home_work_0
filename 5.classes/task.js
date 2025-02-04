
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

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


class Library{
    constructor(name, books){
        this.name = '';
        this.books = [];
    };

   addBook(book) {
        if(this.state > 30) {
            this.books.push(book);
        }
    }
}