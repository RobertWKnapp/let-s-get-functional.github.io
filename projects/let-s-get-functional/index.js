// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
/* 
I: An array of customer objects
O: the number of male customers
C: use Filter
*/

// most common methods to make work will be _.filter, _.map, _.reduce, _.each

var maleCount = function(array) {
let males = _.filter(array, function(customer) {
    return customer.gender === 'male';
});
//console.log(males); // [male, male, male]
return males.length;
};

// - **Objective**: Find the number of female customers
// - **Input**: `Array`
// - **Output**: `Number`
// - **Constraints**: use `reduce`

_.reduce = function(array, func, seed) {
    let output;
    // determine if see was not provided a value
if (seed === undefined) {
        output = array[0]; //  assign output the first item in the array
        for (let i = 1; i < array.length; i++){
        // reassign output to the result invoking the callback function
    output = func(output, array[i], i)
}
        //result = func(output, array[i], i)
  }  else { // else there was a seed value provided
    output = seed; // assign result seed, 
    for (let i = 0; i < array.length; i++) {
        output = func(output, array[i], i);
    }
    }   
    return output;

 };
var femaleCount = function(array) {
    return array_.reduce((count, customer))
    // let females = _.reduce(array, function(acc, current){
    //     // checking if current gender is female
    //     if (current.gender === 'female') {
    //         acc + 1;
    //     }
    //     return acc;
    }, 0 );

}


var oldestCustomer = function(array) {
    let oldest = _.reduce(array, function(accumulator, current) {
        // accumulator = {Adele Mullin} | current = {Olga Newton}
        if (current.age > accumulator.age){
            return current;
        }
        return accumulator;
    });
    return oldest.name;
};
// invoke _.reduce()
// output;
// if (undefined === undefined) // true
// output = {Adele Mullin}
// for loop
// i = 1
// output = func(Adele Mullin}, {Olga Newton})

var youngestCustomer;

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
