const colourData = require('../data')

class Colour {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.hex = data.hex;
    }

    static findById(id) {
        const cd = colourData.filter((colour) => colour.id === id)[0];
        const colour = new Colour(cd);
        return colour;
    }

    static create(colour) {
        const newColourId = colourData.length + 1;
        const newColour = new Colour({id: newColourId, ...colour});
        colourData.push(newColour);
        return newColour;
    }

    destroy() {
        const colour = colourData.filter((colour) => colour.id === this.id)[0];
        colourData.splice(colourData.indexOf(colour), 1);
    }
}

module.exports = Colour;
