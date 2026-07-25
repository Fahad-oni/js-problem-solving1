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
  for (let i = 0; i <= str.length - 1; i++){
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
