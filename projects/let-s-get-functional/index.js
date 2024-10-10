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

// _.reduce = function(array, func, seed) {
//     let output;
//     // determine if seed was not provided a value
// if (seed === undefined) {
//         output = array[0]; //  assign output the first item in the array
//         for (let i = 1; i < array.length; i++){
//         // reassign output to the result invoking the callback function
//     output = func(output, array[i], i)
// }
//         //result = func(output, array[i], i)
//   }  else { // else there was a seed value provided
//     output = seed; // assign result seed, 
//     for (let i = 0; i < array.length; i++) {
//         output = func(output, array[i], i);
//     }
//     }   
//     return output;

//  };
 var femaleCount = function(array) {
    // return array_.reduce((count, customer))
    // let females = _.reduce(array, function(acc, current){
    //     // checking if current gender is female
    //     if (current.gender === 'female') {
    //         acc + 1;
    //     }
    //     return acc;
    // }, 0 );
    return _.reduce(array, function(count, customer) {
        if (customer.gender === 'female') {
            return count + 1;
        } else {
            return count;
        }
    }, 0);  // seed is 0

}

// ### 3: `oldestCustomer`
//  - **Objective**: Find the oldest customer's name
//  - **Input**: `Array`
//  - **Output**: `String`
//  - **Constraints**: 

 var oldestCustomer = function(array) {
    // use reduce to find the oldest customer
    let oldest = _.reduce(array, function(accumulator, current) {
         // accumulator = {Adele Mullin} | current = {Olga Newton}
        // if current customer's age is greater than the accumulator customer's age, return current
        if (current.age > accumulator.age){
           return current;
       }  //if current is not greater than accumulator then return accumulator
       return accumulator;
    }); // return the name of the oldest customer.
    return oldest.name;
 };


// invoke _.reduce()
// output;
// if (undefined === undefined) // true
// output = {Adele Mullin}
// for loop
// i = 1
// output = func(Adele Mullin}, {Olga Newton})

var youngestCustomer = function(array) {
    let youngest = _.reduce(array, function(accumulator, current) {
        if (current.age < accumulator.age) {
            return current; 
        }
        return accumulator; 
    });
    return youngest.name;
}

// ### 5: `averageBalance`
//  - **Objective**: Find the average balance of all customers
//  - **Input**: `Array`
//  - **Output**: `Number`
//  - **Constraints**:
var averageBalance = function(customers) {
    const totalBalance = customers.reduce(function (sum, customer) {
        // Remove the dollar sign and commas, then convert to a float
        const balance = Number(customer.balance.replace(/[$,]/g, ''));
        return sum + balance;
      }, 0);
      
      // Calculate average
      return totalBalance / customers.length;
    }

var firstLetterCount = function(customers, letter) {
    let lowerCaseLetter = letter.toLowerCase();
    let customerFilter = customers.filter(function (customer){
        return customer.name.charAt(0).toLowerCase() === lowerCaseLetter;
    });
    return customerFilter.length
}
// ### 7: `friendFirstLetterCount`
//  - **Objective**: Find how many friends of a given customer have names that start with a given letter
//  - **Input**: `Array`, `Customer`, `Letter`
//  - **Output**: `Number`
//  - **Constraints**:

var friendFirstLetterCount = function(array, customer, letter){ 

    // // Put everything in lower case for comparison
    // const lowerLetter = letter.toLowerCase();

    // // Find the customer by their ID or object
    // const foundCustomer = customers.find(c => c._id === customer._id);

    // // If the customer is found, filter their friends
    // if (foundCustomer && foundCustomer.friends) {
    //     return foundCustomer.friends.filter(friend => 
    //         friend.name.toLowerCase().startsWith(lowerLetter)
    //     ).length;
    // }

    // // Return 0 if the customer is not found or has no friends
    // return 0;


    // const customer = customers.find(function(c) {
    //   return c.name === customerName;
    // });
  
    // if (!customer) {
    //   return 0; // Customer not found
    // }
  
    // let lowerCaseLetter = letter.toLowerCase();
  
    // return customer.friends.filter(function(friend) {
    //   return friend.name.toLowerCase().startsWith(lowerCaseLetter);
    // }).length;

        // Convert letter to lowercase for case insensitive comparison
        const lowerCaseLetter = letter.toLowerCase();
    
        // Find the customer by name
        const foundCustomer = array.find(c => c.name === customer);
        
        if (!foundCustomer) {
            return 0; // Return 0 if the customer is not found
        }
        
        // Count friends whose names start with the specified letter
        return foundCustomer.friends.filter(friend => 
            friend.name.toLowerCase().startsWith(lowerCaseLetter)
        ).length;
};

// ### 8: `friendsCount`
//  - **Objective**: Find the customers' names that have a given customer's name in their friends list
//  - **Input**: `Array`, `Name`
//  - **Output**: `Array`
//  - **Constraints**:
var friendsCount = function(customers, name) {
  // Filter customers based on the names in their friend's list
  const matchingCustomers = customers.filter(function (customer) {
    return customer.friends.some(function (friend) {
      return friend.name === name;
    });
  });

  // Return an array of matching customer names
  return matchingCustomers.map(function (customer) {
    return customer.name; // Change this to customer._id if you prefer IDs
  });
}

// ### 9: `topThreeTags`
//  - **Objective**: Find the three most common tags among all customers' associated tags
//  - **Input**: `Array`
//  - **Output**: `Array`
//  - **Constraints**:
var topThreeTags = function(customers) {
    const tagCount = {};

    // Count the occurrences of each tag
    customers.forEach(function(customer) {
      customer.tags.forEach(function(tag) {
        if (tagCount[tag]) {
          tagCount[tag]++;
        } else {
          tagCount[tag] = 1;
        }
      });
    });
  
    // Convert the tagCount object into an array of [tag, count] pairs
    let sortedTags = Object.entries(tagCount)
      .sort(function(a, b) {
        return b[1] - a[1]; // Sort by count in descending order
      });
  
    // Get the top three tags
    return sortedTags.slice(0, 3).map(function(tag) {
      return tag[0]; // Return just the tag names
    });
  }

// ### 10: `genderCount`
//  - **Objective**: Create a summary of genders, the output should be:
// ```javascript
// {
//     male: 3,
//     female: 4,
//     non-binary: 1
// }
// ```
//  - **Input**: `Array`
//  - **Output**: `Object`
//  - **Constraints**: Use `reduce`
var genderCount = function(customers) {
    return customers.reduce(function (accumulator, customer) {
        const gender = customer.gender;
        
        // Initialize gender count if it doesn't exist
        if (!accumulator[gender]) {
          accumulator[gender] = 0;
        }
        
        // Increment the count for the specific gender
        accumulator[gender]++;
        
        return accumulator;
      }, {});
    }


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
