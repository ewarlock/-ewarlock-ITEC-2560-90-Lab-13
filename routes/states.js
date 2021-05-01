let express = require('express')

//require States model
let States = require('../models').States

let router = express.Router()

//fetch all of the states
router.get('/states', function(req, res, next) {
    //ask states model to find all states
    States.findAll({ order: ['name']}).then (states => {
        return res.json(states)
    }).catch(err => nexterr(err)) //send errors to error handler
})

//patch route to update a state visited or not
router.patch('/states/:name', function(req, res, next) {
    let stateName = req.params.name
    //to send and recieve {"visited":false} for example
    let stateVisited = req.body.visited

    States.update ({visited: stateVisited}, {where: {name:stateName}})
        .then(rowsUpdated => {
            //take info about what rows were updated, an array
            let numberOfRowsUpdated = rowsUpdated[0]

            if (numberOfRowsUpdated ==1) 
                return res.send('ok')
            
            return res.status(404).send('State not found')
        }).catch(err => next(err)) //pass to error handler in server.js
})

//provide access to router put all stuff before this line
module.exports = router