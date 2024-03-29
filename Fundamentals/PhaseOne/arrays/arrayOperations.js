// Learn to filter and map arrays

// filter to create a new array by applying a predicate function on existing array's elements.

// map to create a new array by applying a specific operation to the existing array's elements.

const names = ['Anna', 'Li', 'Charlie', 'Mary', 'Jo'];

// 1. Using a predicate function and `filter` to get only names shorter than 3 letters.
const isShorterThanThree = (name) => {
if (name.length < 3) {
    return true;
} else {
    return false;
}
}

const namesShorterThanThreeLetters = names.filter(isShorterThanThree);

// 2. Create a new array of all names uppercased by applying
// the `getUppercased` function to all elements in the `names` array.

const getUppercased = (name) => {
return name.toUpperCase();
}

const uppercasedNames = names.map(getUppercased);