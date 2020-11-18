const app = require('./server/server')

require('./config/connection')

app.listen(app.get('port'), (error) => {
    if(error) {
        console.log(`there was an error : ${error}`)
    }else {
        console.log(`server running on port : ${app.get('port')}`)
    }
})