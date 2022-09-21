# magical-regex

## How to install:
npm i magical-regex

## How to use:

const magicalRegex = require('magical-regex');

console.log(magicalRegex.isValidEmail('abc@gmail.com')); // this will return true for valid and false for invalid standard email

You think you want to pass your own regex, you can!
const myDummyRegexPattern = /h/
console.log(magicalRegex.isValidEmail('abc@gmail.com', myDummyRegexPatter));


Enjoy and do share your feedback with me.
