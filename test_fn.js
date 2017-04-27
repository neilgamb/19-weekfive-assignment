
// Import 'functions' object from fn.js
// Install ava node_modules in directory
let functions = require('./fn');

test ('descending', function (t){
    t.deepEqual(practice.descending(14), 41);
    t.deepEqual(practice.descending(5614), 6541);
    t.deepEqual(practice.descending(90), 90);
    t.deepEqual(practice.descending(2), 2);
    t.deepEqual(practice.descending(11), 11);

});