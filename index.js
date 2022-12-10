// Input taken from the user (From the command line)
let input = process.argv[2];

// We check if the input is defined or not (If the user has entered something or not)
if (!input instanceof String)
    throw new Error("Input must be a string");

// Removing vowels from the input
///////////////////////////////
const chars = input.split("");

// We define a function that detects if a character is a vowel or not using regex
// Using lambda expression
const isVowel = char => /[aeiou]/.test(char);

// We filter the array of characters to remove the vowels
const filteredChars = chars.filter(char => !isVowel(char));

// We join the array of characters to get the string without vowels
const finalString = filteredChars.join("");

// We print the final string
console.log(finalString);