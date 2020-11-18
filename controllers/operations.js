const dataModels = require('../models/methods')
const connection = require('../../models/connection')

async function getOperations(req, res) {
    dataModels.getOperations((data, error) => {
        res.json(data)
    })
}

function addOperation (req, res) {

    const {valueOne, valueTwo, operation} =  req.body
    console.log(`Operacion : ${valueOne}, ${operation}, ${valueTwo}`)
    dataModels.addOperation({valueOne, operation, valueTwo}, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getOperations,
    addOperation,
}