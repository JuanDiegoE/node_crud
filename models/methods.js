const connection = require('./connection')

var dataModels = {
    getOperations: (callback) => {
        if(connection) {
            let sql = `select * from operations`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    addOperation : (data, callback) => {

        if(connection) {
            let sql = `insert into operations(valueOne, operation, valueTwo) values (${connection.escape(data.valueOne)}, ${connection.escape(data.operation)}, ${connection.escape(data.valueTwo)})`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message : 'Operacion insertada'})
            })
        }
    },
}

module.exports = dataModels
