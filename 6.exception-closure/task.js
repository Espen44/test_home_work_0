function parseCount(value) {
    let number = Number.parseInt(value, 10);
    if (isNaN(number)) {
        const error = new Error("Невалидное значение");
        throw error;
    } 
    return number;
}
parseCount();

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}
validateCount();

class Triangle (
    constructor(sideA, sideB, sideC){
        let.sideA = sideA;
        let.sideB = sideB;
        let.sideC = sideC;
        if ( sideA + sideB < sideC || sideA + sideC < sideB || sideB+sideC < sideA){
            const error = new Error('Треугольник с такими сторонами не существует');
            throw error;
        }

        getPerimeter(){
            
        }
    }
)