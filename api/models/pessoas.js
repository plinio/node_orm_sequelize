'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function(dado){
          if(dado.length < 3) throw new Error('o campo nome deve ter mais de 3 caracteres.')
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'dado do tipo e-mail inválido'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    paranoid: true,//soft-delete
    defaultScope: {
      where: {
        ativo: true //por padrão o sequelize vai colocar esse where na rota get Pessoas
      }
    },
    scopes:{
      todos: {
        where: {}
      }
    }
  });
  Pessoas.associate = function(models) {
    Pessoas.hasMany(models.Turmas, {
      foreignKey: 'docente_id'
    }) 
    Pessoas.hasMany(models.Matriculas, {
      foreignKey: 'estudante_id',
      scope: { status: 'confirmado' }, //escopo de associação (mixins)
      as: 'aulasMatriculadas' //alias do escopo de associacao (mixins), assim posso chamar pessoa.getAulasMatriculadas()
    })

  };
  return Pessoas;
};