/* funny-words
random-words
one-liner-joke
figlet
cowsay 
*/

/*********** Joke Function *************** */
let oneLinerJoke = require('one-liner-joke');
let tellMeJoke = () => {
  let joke = oneLinerJoke.getRandomJoke();
  return joke.body;
}
console.log(tellMeJoke());
/****************************************** */


/************  figlet **************************** */
let figlet = require('figlet');
 
figlet('Hello BIT students', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});


figlet.text('Hello World!', {
  font: 'slant',
  horizontalLayout: 'default',
  verticalLayout: 'fitted',
  width: 80,
  whitespaceBreak: true
}, function(err, data) {
  if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
  }
  console.log(data);
});


figlet.fonts(function(err, fonts) {
  if (err) {
      console.log('something went wrong...');
      console.dir(err);
      return;
  }
  console.dir(fonts);
});
/************  figlet **************************** */



/*********** Funny wordsFunction *************** */
let funnyWords = require('funny-words');
let makeFunnyWords = (some) => {
  let intro = "Play with words... and mix it..."; 
  let mixIt = funnyWords(some);
  return console.log( `${intro} : 
  ${mixIt}`);
}
makeFunnyWords("World is really so Funny!");
/****************************************** */


/*********** Random words Function *************** */
let randomWords = require('random-words');
let play = (n) => {
  let intro = "I really like this english words:"; 
  let randomIt = randomWords(n);
  return console.log( `${intro} : 
  ${randomIt}`);
}
play(7);
/****************************************** */


/********* the Cow ****************************/
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "OO",
    T : "U "
}));
/******************************************* */

// console.log(funnyWords("Don't worry, be happy!"));
// console.log(randomWords(5));
// var joke1 = oneLinerJoke.getRandomJoke();
// var joke2 = oneLinerJoke.getRandomJoke();
// console.log(joke1.body);
// console.log(joke2.body);