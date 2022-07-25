class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type = null){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = type;
    }

    fix() {
        this.state = state * 1.5;
    }

    qweer(){
        if(state < 0) {
            return 0;
        }
        else if( state > 100) {
            return 100;
        }
        else {
            return this.state;
        }
    }
};


console.log(this.state);