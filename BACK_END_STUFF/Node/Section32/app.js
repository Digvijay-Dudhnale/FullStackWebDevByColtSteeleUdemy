const math = require('./math');
console.log(math);
console.log(math.math);

// The content of required file will not be automatically available to us
// Unless the file we required has explicitly mentioned what content will be exported from that file

console.log(math.add(7,4));

// $ node app.js
    // { add: [Function: add], PI: 3.14159, square: [Function: square] }
    // 11

// We can also destructure the required file as per our need
// If we haven't destructured the required file we need use dot(.) operator to access elements from object

const {PI,square} = require("./math");
console.log(square(9));
console.log(math.subtract(8,3));
console.log(math.divide(8,2));