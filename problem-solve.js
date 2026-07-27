// reverse a string

function reverseStr(str) {
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

console.log(reverseStr('fahad'));

// cheking if contains vowel

function vowelCheck(str) {
  let vowel = 'aeiou';
  let count = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    if (vowel.includes(str[i])) {
      console.log(`The letter is >> ${str[i]} << and its a vowel.`);
      count++;
    }
  }
  return count;
}
let String =
  'The first light of morning spread across the quiet lake, turning the water into a mirror of soft gold and blue. A cool breeze carried the scent of pine trees while birds welcomed the new day with cheerful songs. On a small wooden dock, an old fisherman prepared his boat without hurry, enjoying the peaceful silence before the world awoke. It was one of those rare mornings that reminded anyone who paused to look that beauty often exists in the simplest moments.';

console.log(vowelCheck(String));

// function vowelCheck(str) {
//   let count = 0;
//   for (let i = 0; i <= str.length - 1; i++) {
//     if (
//       (str[i] === 'a') |
//       (str[i] === 'e') |
//       (str[i] === 'i') |
//       (str[i] === 'o') |
//       (str[i] === 'u')
//     ) {
//       console.log(`The letter is >> ${str[i]} << and its a vowel.`);
//       count++;
//     }
//   }
//   return count;
// }
// let String =
//   'The first light of morning spread across the quiet lake, turning the water into a mirror of soft gold and blue. A cool breeze carried the scent of pine trees while birds welcomed the new day with cheerful songs. On a small wooden dock, an old fisherman prepared his boat without hurry, enjoying the peaceful silence before the world awoke. It was one of those rare mornings that reminded anyone who paused to look that beauty often exists in the simplest moments.';

// console.log(vowelCheck(String));

// Task 13-2A: Hot, Cold, or Normal
// Write a function checkTemperature that takes a temperature (in Celsius) and returns "Hot" if it is 30 or above, "Cold" if it is 15 or below, and "Normal" otherwise.

function checkTemperature(temp) {
  if (temp >= 30) {
    return 'Hot';
  } else if (temp <= 15) {
    return 'Cold';
  } else {
    return 'Normal';
  }
}

console.log(checkTemperature(40));
console.log(checkTemperature(20));
console.log(checkTemperature(10));

// Task 13-2B: Reverse a Number
// Write a function reverseNumber that takes a positive whole number and returns it with its digits reversed. (Hint: convert the number to a string first.)

function reverseNumber(num) {
  let numToString = num.toString().split('').reverse().join('');

  // return numToString;

  let strToNum = Number(numToString);
  return strToNum;
}

console.log(reverseNumber(12434));
console.log(reverseNumber(7));

// Task 13-3A: Product of Digits
// Write a function productOfDigits that takes a positive whole number and returns the product of its individual digits.

function productOfDigits(num) {
  let str = num.toString();
  let total = 1;

  for (let i = 0; i < str.length; i++) {
    total = total * Number(str[i]);
  }
  return total;
}

console.log(productOfDigits(1234));
console.log(productOfDigits(4040));
console.log(productOfDigits(3523623));

// Task 13-3B: Odd Numbers Up To N
// Write a function getOddNumbers that takes a number n and returns an array of all odd numbers from 1 to n (inclusive).

function getOddNumbers(n) {
  let oddNumbers = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(i);
    }
  }
  return oddNumbers;
}

console.log(getOddNumbers(76));

// Task 13-4B: Remove First and Last Character
// Write a function removeFirstAndLast that takes a string and returns it with the first and last character removed.

function removeFirstAndLast(str) {
  let slicedStr = str.slice(1, str.length - 1);
  return slicedStr;
}

console.log(removeFirstAndLast('hello'));

// Task 13-5A: Check for a Palindrome
// Write a function isPalindrome that takes a string and returns true if it reads the same forwards and backwards, otherwise false. Assume lowercase, no spaces.

function isPalindrome(str) {
  let reversedString = str.split('').reverse().join('');

  if (str === reversedString) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('level'));
console.log(isPalindrome('hello'));

// Task 13-5B: Find the Shortest Word in a Sentence
// Write a function findShortestWord that takes a sentence and returns the shortest word in it.

function findShortestWord(str) {
  let word = str.split(' ');
  let shortest = word[0];
  for (let i = 0; i <= word.length - 1; i++) {
    if (shortest.length > word[i].length) {
      shortest = word[i];
    }
  }
  return shortest;
}

console.log(findShortestWord('JavaScript is a fun language'));

// Task 13-6A: Find the Second Smallest Number
// Write a function findSecondSmallest that takes an array of numbers and returns the second smallest distinct value.

function findSecondSmallest(arr) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (smallest > arr[i]) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] > smallest && secondSmallest > arr[i]) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest;
}

console.log(findSecondSmallest([10, 5, 8, 20, 15]));

// Task 13-6B: Count Multiples of Three
// Write a function countMultiplesOfThree that takes an array of numbers and returns how many of them are divisible by 3.

function countMultiplesOfThree(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      count++;
    }
  }
  return count;
}
console.log(countMultiplesOfThree([3, 4, 6, 7, 9, 10]));

// Task 13-8A: List an Object's Keys
// Write a function listKeys that takes an object and returns an array containing its property names (keys).

function listKeys(obj) {
  let keys = [];
  for (let key in obj) {
    keys.push(key);
  }
  return keys;
}
console.log(listKeys({ name: 'Sam', age: 25, city: 'Dhaka' }));

// Task 13-8B: Get a Value or a Default
// Write a function getValueOrDefault that takes an object, a key name, and a default value, and returns the object's value for that key if it exists, otherwise the default value.

function getValueOrDefault(obj, key, defaultValue) {
  if (obj[key] !== undefined) {
    return obj[key];
  } else {
    return defaultValue;
  }
}

let person = { name: 'Sam', age: 25 };
console.log(getValueOrDefault(person, 'age', 0));
console.log(getValueOrDefault(person, 'grade', 'N/A'));

// Task 13-9: Long Words Above a Length, Then Their Count
//1. getWordsLongerThan — takes an array of words and a length threshold, and returns a new array containing every word whose length is greater than the threshold.

//2. countArray — takes an array and returns how many elements it contains.

function getWordsLongerThan(words, mainLength) {
  let longWords = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > mainLength) {
      longWords.push(words[i]);
    }
  }
  return longWords;
}

function countArray(arr) {
  let count = 0;
  
  for (let i = 0; i < arr.length; i++){
    count++;
  }
  return count;
}

let longWords = getWordsLongerThan(
['cat', 'elephant', 'dog', 'hippopotamus', 'ox'],
3,
);
let total = countArray(longWords);

console.log(longWords);
console.log(total);

// 13-10A: Perfect Square Checker
//  Write a function isPerfectSquare that takes a number and returns true if it is a perfect square, otherwise false.

function isPerfectSquare(num) {
  if (Number.isInteger(Math.sqrt(num))) {
    return true;
  } else {
    return false;
  }
}

console.log(isPerfectSquare(49));

// 13-10B: Reverse the Word Order
// Write a function reverseWords that takes a sentence and returns it with the order of the words reversed (the letters inside each word stay the same).

function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}

console.log(reverseWords('hello world'));


// generate report card

function generateReportCard(student) {
  if (typeof student !== 'object' || Array.isArray(student) === true) {
    return 'Invalid';
  } 

  if (typeof student.english !== 'number' || typeof student.bangla !== 'number' || typeof student.math !== 'number') {
    return 'Invalid';
  }
  const total = student.bangla + student.english + student.math;

  const avarage = total / 3;

  let grade;
  if (avarage >= 90) {
    grade = 'A+'
  } else if (avarage >= 80) {
    grade = 'A';
  } else if (avarage >= 70) {
    grade = 'B';
  } else {
    grade = 'F';
  }
  
  const returnObj = {
    name: student.name,
    total: total,
    grade: grade
  }
  return returnObj;
}

const studentObj = {
  name: 'Ayan',
  bangla: 78,
  english: 85,
  math: 92
}

const result = generateReportCard(studentObj);
console.log(result);
