const myForm = document.querySelector('form')

const container = document.querySelector('.container')

getAllColours()

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
