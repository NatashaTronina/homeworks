function parseCount(num){
    let result = Number.parseFloat(num)
    if(isNaN(result)){
        const error = new Error("Невалидное значение");
        throw error;
    }
    return result;
}

function validateCount(number){
    try{
        return parseCount(number)
    }catch(error){
        return error
    }
}
