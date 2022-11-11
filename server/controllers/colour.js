//Controller for routes

const express = require('express');
const router = express.Router();
const colourData = require('../data');

router.get('/', (req, res) => {
    res.send({message: "Pick a colour"})
});

router.get('/:id', (req, res) => {
    const colourId = parseInt(req.params.id);
    const selectedColour = colourData[colourId-1];
    res.send(selectedColour);
})

module.exports = router;
