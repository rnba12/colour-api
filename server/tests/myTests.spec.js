const request = require('supertest')
const app = require('../app')
const data = require('../data.json')

const port = process.env.TEST_PORT
let dataLength = data.colors.length
console.log('data length at start: ', dataLength)
let api

beforeAll(() => {
    api = app.listen(port, () => {
        console.log(`test server running on port ${port}`)
    })
})

afterAll(done => {
    console.log('Stopping server')
    api.close(done)
})

let testColour = {
    "id": 9999,
    "name": "orange-orange",
    "hex": "#123456"
}

describe('Read colours', () => {
    it('should respond to GET "/" with status 200', done => {
        request(api).get('/').expect(200, done)
    })

    it('should read a colour by ID', (done) => {
        request(api)
            .get('/colour/3')
            .expect(200)
            .expect({
                "id": 3,
                "name": "blue",
                "hex": "#0343df"
            }, done)
    })

    it('should respond to non IDs with 404', done => {
        request(api).get('/colour/no').expect(404, done)
    })
})

describe('Create colours', () => {
    it('should send a 405 when writing to root url', (done) => {
        request(api).post('/')
            .expect(405, done)
    })

    it('should respond to a POST "/colours" with 201', done => {
        request(api)
            .post('/colour')
            .send(testColour)
            .expect(201)
            .expect({
                "id": 9999,
                "name": "orange-orange",
                "hex": "#123456"
            }, done)
    })
})

describe('Update colours', () => {
    test.todo('should respond to a PUT "/colours/:id" with status 200')
})

describe('Delete colours', () => {
    it('should respond to DELETE "/colours/:id" with status 204', async () => {
        await request(api)
            .delete('/colour/2')
            .expect(204)

        const updatedColors = await request(api).get('/colour')
        expect(updatedColors.body.length).toBe(dataLength - 1)
    })
})
