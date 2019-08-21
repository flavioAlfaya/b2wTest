const mongoose = require('mongoose')

const conectionString = 'mongodb+srv://starWarsADM:admAlfaya@starwarsapi-vtchb.mongodb.net/test?retryWrites=true&w=majority'
// const conectionString = 'mongodb://localhost/swAPI'

mongoose.connect('mongodb+srv://starWarsADM:admAlfaya@starwarsapi-vtchb.mongodb.net/starWarsAPI?retryWrites=true&w=majority',{ useNewUrlParser: true})
    .then(() => {
        console.log('connected to db')
    })
    .catch((error) => {
        console.log('error during database connection')
        console.log(error.message)
    })
mongoose.Promise = global.Promise

module.exports = mongoose