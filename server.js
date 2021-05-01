//file that starts express server running

let express = require('express')
let states_api = require('./routes/states')

let app = express()

//enables server to understand requests w json
app.use(express.json())

//make all routes in states_api available
app.use('/api', states_api)

app.use(function (req, res, next) {
    res.status(404).send('Not found')
})

app.use(function (err, req, res, next) {
    console.log(err)
    res.status(500).send('Server error')
})

//start the server
let server = app.listen(process.env.PORT || 3000, function () {
    console.log('Server running', server.address().port)  //so we can see it's working
})