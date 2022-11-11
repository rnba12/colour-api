const myForm = document.querySelector('form')

const data = [
    {
        "id": 1,
        "name": "purple",
        "hex": "#7e1e9c"
    },
    {
        "id": 2,
        "name": "green",
        "hex": "#15b01a"
    },
    {
        "id": 3,
        "name": "blue",
        "hex": "#0343df"
    },
    {
        "id": 4,
        "name": "pink",
        "hex": "#ff81c0"
    },
    {
        "id": 5,
        "name": "brown",
        "hex": "#653700"
    },
    {
        "id": 6,
        "name": "red",
        "hex": "#e50000"
    },
    {
        "id": 7,
        "name": "light blue",
        "hex": "#95d0fc"
    },
    {
        "id": 8,
        "name": "teal",
        "hex": "#029386"
    },
    {
        "id": 9,
        "name": "orange",
        "hex": "#f97306"
    },
    {
        "id": 10,
        "name": "light green",
        "hex": "#96f97b"
    },
    {
        "id": 11,
        "name": "magenta",
        "hex": "#c20078"
    },
    {
        "id": 12,
        "name": "yellow",
        "hex": "#ffff14"
    },
    {
        "id": 13,
        "name": "sky blue",
        "hex": "#75bbfd"
    },
    {
        "id": 14,
        "name": "grey",
        "hex": "#929591"
    },
    {
        "id": 15,
        "name": "lime green",
        "hex": "#89fe05"
    },
    {
        "id": 16,
        "name": "light purple",
        "hex": "#bf77f6"
    },
    {
        "id": 17,
        "name": "violet",
        "hex": "#9a0eea"
    },
    {
        "id": 18,
        "name": "dark green",
        "hex": "#033500"
    },
    {
        "id": 19,
        "name": "turquoise",
        "hex": "#06c2ac"
    },
    {
        "id": 20,
        "name": "lavender",
        "hex": "#c79fef"
    },
    {
        "id": 21,
        "name": "dark blue",
        "hex": "#00035b"
    },
    {
        "id": 22,
        "name": "tan",
        "hex": "#d1b26f"
    },
    {
        "id": 23,
        "name": "cyan",
        "hex": "#00ffff"
    },
    {
        "id": 24,
        "name": "aqua",
        "hex": "#13eac9"
    },
    {
        "id": 25,
        "name": "forest green",
        "hex": "#06470c"
    },
    {
        "id": 26,
        "name": "mauve",
        "hex": "#ae7181"
    },
    {
        "id": 27,
        "name": "dark purple",
        "hex": "#35063e"
    },
    {
        "id": 28,
        "name": "bright green",
        "hex": "#01ff07"
    },
    {
        "id": 29,
        "name": "maroon",
        "hex": "#650021"
    },
    {
        "id": 30,
        "name": "olive",
        "hex": "#6e750e"
    }
]

const container = document.querySelector('.container')

getColours()
// getAllColours()
function getColours() {
    appendColours(data)
}

function getAllColours() {
    fetch('http://localhost:3000/colour')
        .then(r => r.json())
        .then(appendColours)
        .catch(console.warn)
}

function appendColours(data) {
    let childrenNodes = data.map(color => {
        let item = document.createElement('div')
        item.style.background = color.hex
        item.style.height = '18rem'
        return item
    })

    childrenNodes.forEach(child => container.appendChild(child))
};
