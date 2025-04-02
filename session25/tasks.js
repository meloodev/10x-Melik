//Task 1: Basic Counting Loop (For Loop)
//Write a function countDownFrom(n) that prints numbers from n to 1 using a for loop.
function countDownFrom(n) {
    for (let i = n; i >= 1; i--) {
        console.log(i);
    }
}

countDownFrom(5);
///////////////////////////////////////////////////
//Task 2: Iterate Over an Array (For...of Loop)
//Write a function printArrayElements(arr) that prints each element of an array using a for...of loop.
function printArrayElements(arr) {
    for (const item of arr) {
        console.log(item);
    }
}
printArrayElements(["Apple", "Banana", "Cherry"]);

///////////////////////////////////////////////////
//Task 3: Sum of Numbers (While Loop)
//Write a function sumNumbersUpTo(n) that calculates the sum of numbers from 1 to n using a while loop.
function sumNumbersUpTo(n) {
    let sum = 0;
    let i = 1;
    while (i <= n) {
        sum += i;
        i++;
    }
    return sum;
}
console.log(sumNumbersUpTo(5));
///////////////////////////////////////////////////
//Task 4: Repeat a String (Do...While Loop)
//Write a function repeatString(str, n) that repeats a string n times using a do...while loop.
function repeatString(str, n) {
    let result = '';
    let i = 0;
    do {
        result += str;
        i++;
    } while (i < n);
    return result;
}

console.log(repeatString("Hello", 3));
///////////////////////////////////////////////////
//Task 5: Iterate Over Object Properties (For...in Loop)
//Write a function printObjectKeys(obj) that prints all the keys of an object using a for...in loop.
function printObjectKeys(obj) {
    for (const key in obj) {
        console.log(key);
    }
}

printObjectKeys({ name: "Alice", age: 25 });
///////////////////////////////////////////////////
//Task 1: Filter Odd Numbers (For Loop) // medium
//Write a function filterOdds(numbers) that removes all even numbers from an array using a for loop.
function filterOdds(numbers) {
    let oddNumbers = [];
    for (const number of numbers) {
        if (number % 2 !== 0) {
            oddNumbers.push(number);
        }
    }
    return oddNumbers;
}

console.log(filterOdds([1, 2, 3, 4, 5]));
///////////////////////////////////////////////////
//Task 2: Find Maximum Value (For...of Loop)
//Write a function findMaxValue(numbers) that finds the maximum value in an array using a for...of loop.
function findMaxValue(numbers) {
    let maxValue = numbers[0];
    for (const number of numbers) {
        if (number > maxValue) {
            maxValue = number;
        }
    }
    return maxValue;
}

console.log(findMaxValue([10, 20, 5, 30]));

///////////////////////////////////////////////////
//Task 3: Reverse a String (While Loop)
//Write a function reverseString(str) that reverses a string using a while loop.
function reverseString(str) {
    let reversed = '';
    let i = str.length - 1;
    while (i >= 0) {
        reversed += str[i];
        i--;
    }
    return reversed;
}
console.log(reverseString("Hello"));
///////////////////////////////////////////////////
//Task 1: FizzBuzz with a Twist  Hard tasks
// Write a function fizzBuzzTwist() that prints numbers from 1 to 50 with the following rules:
// If the number is divisible by 3, print "Fizz".
// If the number is divisible by 5, print "Buzz".
// If the number is divisible by both 3 and 5, print "FizzBuzz".
// If the number contains the digit 3 (e.g., 13, 23), print "Almost Fizz".
function fizzBuzzTwist() {
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i.toString().includes("3")) {
            console.log("Almost Fizz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzzTwist();
///////////////////////////////////////////////////
//Task 2: Nested Loops: Multiplication Table
//Write a function printMultiplicationTable(n) that prints the multiplication table up to n using nested for loops.
function printMultiplicationTable(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n; j++) {
            row += `${i}x${j}=${i * j} `;
        }
        console.log(row.trim());
    }
}
printMultiplicationTable(5);

///////////////////////////////////////////////////
//Task 3: Modify Array While Looping
//Write a function removeDuplicates(arr) that removes duplicate elements from an array while looping through it. Be careful not to skip elements!
function removeDuplicates(arr) {
    let uniqueArr = [];
    for (const item of arr) {
        if (!uniqueArr.includes(item)) {
            uniqueArr.push(item);
        }
    }
    return uniqueArr;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

