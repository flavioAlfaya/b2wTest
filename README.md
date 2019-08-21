# B2W Test

Desafio proposto pelo processo seletivo da B2W. Construir uma api que cadastra, lê, apaga inscrições de planetas que estão relatados na franquia de filmes Star Wars.
# Tecnologias usadas
```sh
nodeJS
MongoDB -> Atlas

```
### Instalar dependências e rodar projeto (Npm)
```sh
npm install 
npm start

```

### Instalar dependências e rodar projeto (Yarn)
```sh
yarn install
yarn start
```

### Porta usada 3000


# Rotas
| FUNÇÃO                               	| MÉTODO 	|         ROTA         	|                        REQUISIÇÃO                       	| RETORNO                      	|
|--------------------------------------	|:------:	|:--------------------:	|:-------------------------------------------------------:	|------------------------------	|
| Listar todos os planetas             	|  GET   	|      'planetas/'     	|                            -                            	| Array de planetas            	|
| Cadastrar um novo planeta            	|  POST  	|   'planetas/criar'   	| Objeto:{ nome: String, clima: String, terreno: String } 	| Objeto do planeta criado     	|
| Pegar dados de um planeta especifico 	|   GET  	|    'planetas/:id'    	|                            id                           	| Objeto do planeta pesquisado 	|
| Apagar um planeta especifico         	| DELETE 	| 'planetas/apagar/:id 	|                            id                           	| mensagem em formato string   	|

# Testes
## rodar os testes automatizados
```sh
npm test

```

# Bibliotecas usadas
```sh
axios
body
chai
chai-http
express
mocha
mongoose

```