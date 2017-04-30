module.exports = {
    range: range,
    map: map,
    filter: filter,
    reduce: reduce,
    all: all,
    some: some,
    find: find,
}


// ===== fn 1 | range =======================================

function range (min, max){

    let nums = [];

    for(let i = min; i <= max; i++){
        nums.push(i);
    }

    if(min > max){
        return null;
    }

    if(typeof(min) != 'number' || typeof(max) != 'number'){
        return null;
    }

    return nums;
}

// ===== fn 2 | map =======================================

function map (array, func){

    let returnArray = [];

    for (let i = 0; i < array.length; i++){
        returnArray.push(func(array[i]));
    }

    return returnArray;
}

// ===== fn 3 | filter =======================================

function filter (array, func){

    let returnArray = [];

    for (let i = 0; i < array.length; i++){

        if (func(array[i]) === true){
            returnArray.push(array[i]);
        }
    }
    
    return returnArray;
}

// ===== fn 4 | reduce =======================================

function reduce(array, func, start){

    let previous = start;

    for(let i = 0; i < array.length; i++){
        func(previous, array[i]);
        previous = func(previous, array[i]);
    }

    return previous;
}

// ===== fn 5 | all =======================================

function all(array, func){

    let arrayTF = [];
    let result = true;

    for(let i = 0; i < array.length; i++){
        if(func(array[i]) === true){
            arrayTF.push(true);
        } else {
            arrayTF.push(false);
        }
    }

    for (let p = 0; p < arrayTF.length; p++){
        if(arrayTF[p] != true){
            result = false;
        }
    }

    return result;
}   

// ===== fn 6 | some =======================================

function some(array, func){

    let arrayTF = [];
    let result = false;

    for(let i = 0; i < array.length; i++){
        if(func(array[i]) === true){
            arrayTF.push(true);
        } else {
            arrayTF.push(false);
        }
    }

    for (let p = 0; p < arrayTF.length; p++){
        if(arrayTF[p] === true){
            result = true;
        }
    }

    return result;
}   

// ===== fn 7 | find =======================================

function find (array, func){

for (let i = 0; i < array.length; i++){
    if(func(array[i])){
        return array[i];
    }

}
    return false;


}