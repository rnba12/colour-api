require('dotenv').config()
const express = require('express');
const colourRoutes = require('./controllers/colour')
const bodyParser = require('body-parser')
const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send("Colours API: Welcome")
})

app.post('/', (req, res) => {
    res.status(405).send("Method not allowed");
})

app.listen(port, () => {
    console.log(`I am listening at http://localhost:${port}`)
});

app.use('/colour', colourRoutes)

module.exports = app, bodyParser;
