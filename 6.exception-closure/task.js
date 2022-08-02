function parseCount(value) {
    let number = Number.parseInt(value, 10);
        if (isNaN(number)) {
            const error = new Error('Невалидное значение');
            throw error;
        } 
    return number;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}



class Triangle {
    constructor(sideA, sideB, sideC){
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        if ( this.sideA + this.sideB < this.sideC || this.sideA + this.sideC < this.sideB || this.sideB+this.sideC < this.sideA){
            const error = new Error('Треугольник с такими сторонами не существует');
            throw error;
        }
    }
   
    getPerimeter(){
        let perimeter = this.sideA + this.sideB + this.sideC;
        return +perimeter.toFixed(3);
    }

    getArea(){
        let perimeter = this.sideA + this.sideB + this.sideC;
        let poluperimeter = perimeter / 2;
        let areaOfTreangle = Math.sqrt(poluperimeter*(poluperimeter - this.sideA)*(poluperimeter - this.sideB)*(poluperimeter - this.sideC));
        return +areaOfTreangle.toFixed(3);
    }
}

function getTriangle(sideA, sideB, sideC){
    try {
        return new Triangle(sideA, sideB, sideC);
    } catch {
        return {
            getArea: () => "Ошибка! Треугольник не существует",
            getPerimeter: () => "Ошибка! Треугольник не существует"
        }
    }
}
