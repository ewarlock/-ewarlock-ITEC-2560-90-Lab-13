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

router.get('/states/visited', function(req, res, next) {
    //gets only visited states
    States.findAll({where: {visited: true}}).then (states => {
        return res.json(states)
    }).catch(err => nexterr(err))
})

//for statemap. get one state. for example state/California
router.get('/state/:name', function (req, res, name) {
    let stateName = req.params.name
    States.findOne({where: {name: stateName}})
    .then(state => {
        if (state) {
            //if there is a state return data
            return res.json(state)
        } else {
            //return an error if we make a request to an invalid state name
            return res.status(404).send('State not found.')
        }
    }).catch(err => next(err))
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