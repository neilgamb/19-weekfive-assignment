
// Import 'functions' object from fn.js
let fn = require('./fn');

// Install ava node_modules in directory and import 'test' (?)
import test from 'ava';

// ===== fn 1 | range =======================================
test ('range', function (t){
    t.deepEqual(fn.range(5, 10), [5, 6, 7, 8, 9, 10]);
    t.deepEqual(fn.range(5, 5), [5]);
    t.deepEqual(fn.range(5, 3), null);
    t.deepEqual(fn.range(-2, 4), [-2, -1, 0, 1, 2, 3, 4]);
    t.deepEqual(fn.range('x', 2), null);
    t.deepEqual(fn.range(2, 'x'), null);
});

// ===== fn 2 | map =======================================
test ('map', function (t){
    function square(x) {return x * x;}
    t.deepEqual(fn.map([2, 4, 5], square), [4, 16, 25]);

    function plusTwo(x) {return x + 2;}
    t.deepEqual(fn.map([2, 4, 5], plusTwo), [4, 6, 7]);

    function hello(name) {return "Hello, "+name;}
    t.deepEqual(fn.map(['John', 'Tim', 'Julie'], hello), ['Hello, John', 'Hello, Tim', 'Hello, Julie']);
});

// ===== fn 3 | filter =======================================
test ('filter', function (t){
    function even(x) {return x % 2 === 0;}
    t.deepEqual(fn.filter([1, 2, 3], even), [2]);

    function odd(x) {return x % 2 === 1;}
    t.deepEqual(fn.filter([1, 2, 3], odd), [1, 3]);

    function divByTen(x) {return x % 10 === 0;}
    t.deepEqual(fn.filter([10, 120, 34, 50], divByTen), [10, 120, 50]);
});

// ===== fn 4 | reduce =======================================
test ('reduce', function (t){
    function tallest(tall, next) {if (tall > next) {return tall} else {return next}};
    t.deepEqual(fn.reduce([6, 9, 10, 4], tallest, 0), 10);

    function longestWord(first, second) {if (first.length > second.length) {return first} else {return second}};
    t.deepEqual(fn.reduce(['longest', 'lil', 'word'], longestWord, 0), 'longest');

    function sum(first, second) {return first + second};
    t.deepEqual(fn.reduce([6, 9, 10, 4], sum, 0), 29);

    function join(first, second) {return first + '' +second};
    t.deepEqual(fn.reduce(['Dick','Jane', 'Tim'], join, ''), 'DickJaneTim');
});

// ===== fn 5 | all =======================================
test ('all', function (t){
    function divisByThree(num) {return num % 3 === 0;}
    t.deepEqual(fn.all([9, 6, 3], divisByThree), true);
    t.deepEqual(fn.all([2, 6, 9, 300], divisByThree), false);
    t.deepEqual(fn.all([2, 4, 300], divisByThree), false);
});

// ===== fn 6 | some =======================================
test ('some', function (t){
    function divisByThree(num) {return num % 3 === 0;}
    t.deepEqual(fn.some([3, 6, 9, 300], divisByThree), true);
    t.deepEqual(fn.some([2, 6, 9, 300], divisByThree), true);
    t.deepEqual(fn.some([2, 4, 300], divisByThree), true);
    t.deepEqual(fn.some([2, 4, 5], divisByThree), false);
});

// ===== fn 7 | find =======================================
test ('find', function (t){
    function startWithS(name) {return (name[0] === 's' || name[0] === 'S')}

    t.deepEqual(fn.find(['Peg', 'Tara', 'Smith', 'Samsonite', 'Kip'], startWithS), 'Smith');
});
