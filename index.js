// Let's create a character cheat sheet for Game of Thrones with a simple REST api
// Our endpoints GET, POST, PUT, DELETE and completed app steps

// Our API
// https://anapioficeandfire.com/api/characters/583

// We need to pull in Express as a dependency for a server to send data
const express = require('express');

// This allows us to read files in our project and computer too
const fs = require('fs');

// Now we need to create a variables to initalize the server in our app
const app = express();
const port = 3000

// This is where will expose our data for the front end
app.get('/', (req, res) => {
    res.json('Hello Stevie!!')
})

// The fs module allows to read our characters.json file
fs.readFile('characters.json', (err, data) => {
    if (err) throw err;
    // we need to parse our data so we don't send hex data
    const characters = JSON.parse(data);
    // this will log characters file to the terminal
    console.log(characters)

    // Method GET
    // First we need to get data from our api into our app
    app.get('/json', (req, res) => {
        res.send(characters);
    })
    // Method POST

    // Method PUT

    // Method DELETE
})

// This is where our server lives. We need to tell it where to listen and print that terminal for easy access
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})