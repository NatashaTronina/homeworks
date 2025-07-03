
function parseCount(num){
    let result = Number.parseFloat(num)
    if(isNaN(result)){
        const error = new Error("Невалидное значение");
        throw error;
    }
    return result;
}

function validateCount(num){
    try{
        return parseCount(num)
    }catch(error){
        return error
    }
}


class Triangle{
    constructor(a, b, c){
        if((a + b) < c || (a + c) < b || (b + c) < a){
            const error = new Error("Треугольник с такими сторонами не существует");
            throw error;
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    get perimeter(){
        return this.a + this.b + this.c;
    }
    get area() {
        const p = this.perimeter / 2;
        const result = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(result.toFixed(3)); 
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}