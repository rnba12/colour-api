//Controller for routes

const express = require('express');
const router = express.Router();
const colourData = require('../data')
const Colour = require('../models/colour');

router.get('/', (req, res) => {
    const colours = Colour.all;
    res.send(colours);
});

router.get('/:id', (req, res) => {
    try {
        const colourId = parseInt(req.params.id);
        const selectedColour = Colour.findById(colourId);
        if (!selectedColour) {
            throw new Error("No colour")
        } else {
            res.send(selectedColour);
        }
    }
    catch(err) {
        console.log(err)
        res.status(404).send({ message: err.message})
    }
});

router.post('/', (req, res) => {
    const data = req.body;
    const newColour = Colour.create(data);
    res.status(201).send(newColour);
});

router.delete('/:id', (req, res) => {
    const colourId = parseInt(req.params.id);
    const colour = Colour.findById(colourId);
    colour.destroy();
    res.status(204).send();
})

router.patch('/:id', (req, res) => {
    const colourId = parseInt(req.params.id);
    const colour = Colour.findById(colourId);
    
    res.status(200).send();
})

module.exports = router;
