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

    async atualizaRegistro(dadosAtualizados, id, transacao = {}){
        return database[this.nomeDoModelo]
            .update(dadosAtualizados, { where: {id: id}}, transacao)
    }

    async atualizaRegistro(dadosAtualizados, where, transacao = {}){
        return database[this.nomeDoModelo]
            .update(dadosAtualizados, { where: {...where}}, transacao)
    }

    async apagaRegistro(dadosAtualizados, id){
        return database[this.nomeDoModelo].findAll()
    }
}

module.exports = Services