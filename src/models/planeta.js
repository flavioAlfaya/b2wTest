const mongoose = require('../database')

const PlanetsSchema = new mongoose.Schema({
    nome:{
        type:String,
        required:true
    },
    terreno:{
        type:String,
        required:true
    },
    clima:{
        type:String,
        required:true
    },
    qtdFilmes:{
        type: Number,
        required:false
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
},{
    collection: 'planets'
})

const Planeta = mongoose.model('Planets', PlanetsSchema)

module.exports = Planeta