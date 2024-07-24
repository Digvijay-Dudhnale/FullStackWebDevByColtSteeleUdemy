const add = (x,y) => x + y ;
const PI = 3.14159;
const square = x => x * x ;

// exporting the content of this file so others can use when they require this file
// module.exports.Name_to_call_the_Object = Name_of_Object_in_this_file

module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;

// Another way to export the things is to create a object of all the elements and export it only
const math = {
    add:add,
    PI:PI,
    square:square
}
module.exports.math = math ;

// Another one way to export is directly prefix the varibale with module.exports while defining it
module.exports.subtract = (x,y) => x - y ;

// Instead "module.exports" we can simply use "exports" as long as exports is not explicitly assigned to a new value in our file
const divide = (x,y) => x / y ;
exports.divide = divide ;