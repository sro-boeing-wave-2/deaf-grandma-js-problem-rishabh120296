/**
 * @fileOverview Contains logic of Deaf Grandma
 */
const isUppercase = require('./isUpperCase');
const getRandomValue = require('./getRandomValue');
const { prompt, print } = require('./prompt-print');

/**
 * Put all the code here which would facilitate your conversation
 * with the Deaf Grandma.
 *
 * You can make use of the
 * 1. prompt function to get input from the user
 * 2. print function to print text on to the console
 */
let flag = 1;
let count = 0;
print('What do you want to say to Grandma!!');
while (flag) {
  const s = prompt();
  if (isUppercase(s)) {
    if (s === 'BYE') {
      count += 1;
      if (count < 3) {
        print(`NO, NOT SINCE ${getRandomValue(1930, 1950)}`);
      } else {
        flag = 0;
      }
    } else {
      print(`NO, NOT SINCE ${getRandomValue(1930, 1950)}`);
    }
  } else {
    print('HUH?! SPEAK UP, SONNY!');
  }
}
