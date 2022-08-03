function parseCount(value) {
    let number = Number.parseInt(value, 10);
        if (isNaN(number)) {
            throw new Error('Невалидное значение');
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
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }
   
    getPerimeter(){
        return +(this.sideA + this.sideB + this.sideC).toFixed(3);
    }

    getArea(){
        let poluperimeter = this.getPerimeter() / 2;
        return +(Math.sqrt(poluperimeter*(poluperimeter - this.sideA)*(poluperimeter - this.sideB)*(poluperimeter - this.sideC))).toFixed(3);
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
