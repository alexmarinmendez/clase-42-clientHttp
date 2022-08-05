import express from 'express'
const app = express()

const server = app.listen(8080, () => console.log('Server up'))
app.use(express.json())

app.get('/testinterno', (req, res) => {
    res.send("Hello World from GET Method!!!")
})

app.post('/testpost', (req, res) => {
    res.send('Post request ready! You have send: ' + req.body.first_name)
})