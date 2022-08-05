import http from 'http'

//GET
const options = {
    hostname: 'localhost',
    port: 8080,
    path: '/testinterno',
    method: 'GET'
}
const req = http.request(options, (res) => {
    res.on('data', data => {
        process.stdout.write(data)
    })
})

req.end()