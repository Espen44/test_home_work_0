function parseCount(value){
    let number = Number.parseInt(value, 10);
    if (isNaN(number)){ 
        const error =  new Error('невалидное значение');
        throw error;
    }
    return number;
}
console.log(parseCount('asd'));

// function validateCount (value){
//     try {
//         return parseCount(value);
//     } catch (error) {
//         console.log(error);
//         return error; 
//     }
// }



