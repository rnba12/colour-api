const myForm = document.querySelector('form')

getAllColours()

function getAllColours() {
    fetch('http://localhost:3000/colour')
        .then(r => r.json())
        .then(appendColours)
        .catch(console.warn)
}

function appendColours(data) {
    console.log(data)
};
