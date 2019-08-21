var chai = require('chai')
var server = require('../src/index')
var chaiHttp = require('chai-http')
var Planeta = require('../src/models/planeta')
var shoud = chai.should()
const assert = require('assert');

chai.use(chaiHttp)
describe('Teste de listagem de planetas', function(){
    before(function(next){
        this.enableTimeouts(false)
        Planeta.remove({},function(err){
            next();
        })
    })
    it('Novo planeta existente no banco SWAPI', function(done){
        var planetaNovo ={
            planetID:1,
            nome: 'Tatooine',
            clima: 'arido',
            terreno: 'deserto',
        }
        chai.request(server)
        .post('/planetas/criar')
        .send(planetaNovo)
        .end(function(err,res){
            res.should.have.status(200)
            res.body.should.have.property('planetID')
            res.body.should.have.property('nome')
            res.body.should.have.property('clima')
            res.body.should.have.property('terreno')
            res.body.should.have.property('createdAt')
            res.body.should.have.property('qtdFilmes')
            done();
        })
    })
    it('Novo planeta não existente no banco SWAPI', function(done){
        var planetaNovo ={
            planetID:1,
            nome: 'Terra',
            clima: 'temperado',
            terreno: 'Mar / Água',
        }
        chai.request(server)
        .post('/planetas/criar')
        .send(planetaNovo)
        .end(function(err,res){
            res.should.have.status(200)
            res.body.should.have.property('planetID')
            res.body.should.have.property('nome')
            res.body.should.have.property('clima')
            res.body.should.have.property('terreno')
            res.body.should.have.property('createdAt')
            res.body.should.have.property('qtdFilmes')
            done();
        })
    })
    it('pegar planeta pelo ID',function(done){
        chai.request(server)
        .get('/planetas/1')
        .end(function(err,res){
            res.should.have.status(200)
            res.body.should.have.property('planetID')
            res.body.should.have.property('nome')
            res.body.should.have.property('clima')
            res.body.should.have.property('terreno')
            res.body.should.have.property('createdAt')
            res.body.should.have.property('qtdFilmes')
            done();
        })
    })
    it('listar planetas',function(done){
        chai.request(server)
        .get('/planetas/')
        .end(function(err,res){
            res.should.have.status(200)
            res.body.should.to.be.an('array')
            done();
        })
    })
    it('Apagar planeta pelo id',function(done){
        chai.request(server)
        .delete('/planetas/apagar/2')
        .end(function(err,res){
            res.should.have.status(200)
            done();
        })
    })

})