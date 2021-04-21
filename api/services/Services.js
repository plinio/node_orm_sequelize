const database = require('../models')

class Services{
    constructor(nomeDoModelo){
        this.nomeDoModelo = nomeDoModelo
    }

    async pegaTodosOsRegistros(){
        return database[this.nomeDoModelo].findAll()
    }

    async pegaUmRegistro(id){
        return database[this.nomeDoModelo].findAll()
    }

    async criaRegistro(dados){
        return database[this.nomeDoModelo].findAll()
    }

    async atualizaRegistro(dadosAtualizados, id){
        return database[this.nomeDoModelo].findAll()
    }

    async apagaRegistro(dadosAtualizados, id){
        return database[this.nomeDoModelo].findAll()
    }
}

module.exports = Services