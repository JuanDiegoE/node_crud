const route = require('express').Router()
const { getOperations, addOperation } = require('../controllers/operations.controller')

route.route('/').get(getOperations)

route.route('/').post(addOperation)

module.exports = route