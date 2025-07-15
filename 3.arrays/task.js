function compareArrays(arr1, arr2) {        
    let result = arr1.length === arr2.length && arr1.every(elem => arr1[elem] === arr2[elem])
    return result
}


function getUsersNamesInAgeRange(users, gender) {
    let ages = users.filter(gen => gender === gen.gender).map(age => age.age)
    let result = ages.reduce((acc, item) => acc + item, 0)
    if(ages.length < 1){
        return 0
    }else{
        return result / ages.length
    }
}