// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');// _ = {filter: ?, map: }


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

// - **Objective**: Find the number of male customers
// - **Input**: `Array`
// - **Output**: `Number`
// - **Constraints**: use `filter`
// var maleCount = function(array) {
//     let result = [];
// for (let i = 0, i < array.length; i++)
//     if(array[i].gender === 'male'){
//         result.push(array[i])
//     }
//     return result.length
// }

var maleCount = function(array){
    let males = _.filter(array, (customer) => customer.gender === 'male');
    return males.length;
}

// _.filter = function(array, func){
//     // create output array
//     let output = [];
//     // iterate over the array
//     for (let i = 0; i < array.length; i++){
//         // determint if the result of invoking the func is truthy
//         if (func(array[i], i, array)) {
//             // if true, push into storage array
//             output.push(array[i]);
//         }
//     }
//         // return output array
//         return output;  
//};
// using _.filter
var femaleCount = function(array){
    let females = _.filter(array, (customer) => customer.gender === 'female');
    
    return females.length
};
// var femaleCountWithReduce = function (array){
//     let females = _.reduce(array,function(accumlulator, current){
//     }, 0)
// };
// **Objective**: Find the oldest customer's name
//  - **Input**: `Array`
//  - **Output**: `String`
//  - **Constraints**:
var oldestCustomer = function(array) {
    let oldest = _.reduce(array, function(acc, customer){
        if (customer.age > acc.age){
            return customer; 
        } else {
            return acc;
        }
        
    })
    return oldest.name;
}


var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(acc, customer){
        if (customer.age < acc.age){
            return customer; 

        }else {
            return acc;
        }
    })
    return youngest.name;
}

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
