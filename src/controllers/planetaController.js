const express = require('express')
const Planeta = require('../models/planeta')
const router = express.Router()

router.get('/', async (req, res) => {
    // try{
    //     Planeta.find().exec(function(err, result) {
    //         res.send(result);
    //     })
    // }catch(err){
    //     return res.status(400).send({error: 'Erro ao conseguir os planetas'})
    // }
    Planeta.find({}, function(err, planetas) {   
        res.send(planetas);  
    });
});
router.post('/create', async (req, res) => {
    const {nome, clima, terreno} = req.body
    const planeta = new Planeta({nome,clima,terreno})
    planeta.save((err,planeta)=>{
        if(err){
            res.send('erro ao salvar planeta')
        }else{
            res.send(planeta)
        }
    })
});

module.exports = app => app.use('/planetas', router)