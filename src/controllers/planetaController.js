const express = require('express')
const Planeta = require('../models/planeta')
const router = express.Router()
const axios = require('axios');

router.get('/', function(req, res){
    Planeta.find({}, function(err, planetas) {   
        res.send(planetas);  
    });
});

router.post('/criar', async (req, res) => {
    var planetID = ''
        axios.get('https://swapi.co/api/planets/?search='+req.body.nome)
        .then(response => {
            if(response.data.results.length>0){
                var planetaExterno = response.data.results[0]
            }
            Planeta.find({},function(err, planetas) {
                planetas = planetas
                let ultimo = planetas.length
                Planeta.findOne({nome:req.body.nome},function(err,planeta){
                    if(planeta){
                        res.send(`Falha ao inserir. Já existe planeta com esse nome: ${req.body.nome}`)
                    }else{
                        if(ultimo === 0){
                            planetID = 1
                        }else{
                            planetID = planetas[ultimo-1].planetID
                            planetID = planetID + 1
                        }
                        const planetaNovo = {
                            'planetID': planetID,
                            'nome': req.body.nome, 
                            'clima': req.body.clima,
                            'terreno': req.body.terreno,
                            'qtdFilmes': 0
                        };
                        if(planetaExterno){
                            planetaNovo.qtdFilmes = planetaExterno.films.length
                        }
                        const planeta = new Planeta(planetaNovo)
                        planeta.save((err,planeta)=>{
                            if(err){
                                res.send('erro ao salvar planeta')
                                console.log(err)
                            }else{
                                res.send(planeta)
                            }
                        })
                    }
                })
            })
        })
        .catch(error => {
            console.log(error);
        });
});

router.get('/:id', function (req, res) {
    Planeta.findOne({nome:req.params.id})
    .then(resp =>{
        if(resp){
            res.send(resp)
        }else{
            var planetID = parseInt(req.params.id)
            Planeta.findOne({'planetID': planetID},function(err,planeta){
                if(err){
                    res.send('Nenhum planeta encontrado')
                }else{
                    res.send(planeta)
                }
            })
        }
    } 
    )
    .catch(
        err =>
        res.send('erro ao procurar o planeta pedido')
    )
});

router.delete('/apagar/:id', function (req, res) {
    var planetID = parseInt(req.params.id)
    
    Planeta.findOne({'planetID':planetID})
        .then(
            resp => {
                var planeta = resp
                Planeta.deleteOne( {'planetID':planetID} )
                .then(
                    resp => {
                        res.send(`planeta ${planeta.nome} foi apagado`)
                    }
                )
            }
        )
});

module.exports = app => app.use('/planetas', router)