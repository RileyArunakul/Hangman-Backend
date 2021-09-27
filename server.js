var cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.port || 3001;
app.use(cors());

/*  1. Pick a random word from array of words

    2. Save word as current word

    3. Using fetch requests from frontend, send user's guess
       to backend

    4. Backend returns a JSON in the following format:
        {
            correctGuess: true,
            currentWord: ['a','p','p','_','e']
        }
        -Where correctGuess is a bool that is true if the letter the player guessed is 
        in the word, and currentWord is an array of strings. currentWord has one string per 
        character. If the character has been guessed, it appears in the word, if it hasn't, 
        a string containing a single underscore is in its place.
        -The endpoint that takes in this "guess" only takes in a single parameter 
        which would be the guessed letter. You'll need to store the current state of 
        the word on the backend. 
    
    Ex: // The word is "apple" and the player(s) has made no guesses

// the user guesses "c"
{
  correctGuess: false,
  currentWord: ['_','_','_','_','_']
} 

// the user guesses "a"
{
  correctGuess: true,
  currentWord: ['a','_','_','_','_']
} 
*/

let guessLetter;

app.get("/", (req, res) => {
  res.send("Hello People of Earth");
});

//endpoint that recieves the letter guessed by user
app.get("/checkGuess/:guess", (req, res) => {
  const p = req.params;
  guessLetter = p.guess;
  console.log(guessLetter);
  res.send(`You guessed: ${guessLetter}`);
});

/*
// app.get("/setAlarm/:status", (req, res) => {
//     let status = req.params.status;
//     if (status === "On") {
//       alarmStatus = true;
//       res.send(`Alarm is on: ${alarmStatus}`);
//     } else {
//       alarmStatus = false;
//       res.send(`Alarm is on: ${alarmStatus}`);
//     }
*/
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
