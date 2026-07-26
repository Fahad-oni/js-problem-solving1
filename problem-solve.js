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
  let total =1;

  for (let i = 0; i< str.length; i++){
    total = total * Number(str[i]);
  }
  return total;
}

console.log(productOfDigits(1234));
console.log(productOfDigits(4040));
console.log(productOfDigits(3523623));
