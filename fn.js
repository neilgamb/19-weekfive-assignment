module.exports = {
    range: range,
}



function range (min, max){

let nums = [];

    for(let i = min; i <= max; i++){
        nums.push(i);
    }

    return nums;
}

console.log(range(5, 10));