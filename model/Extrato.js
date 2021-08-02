const { Sequelize } = require('sequelize');
const db = require('./db');

const Extrato = db.define('extrato', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    val: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },// 1 divida, 2 receita, 3 investimento
    type:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }, // 1 nao - paga, 2 paga 
    situation: {
        type: {
            type: Sequelize.INTEGER,
            allowNull: true,
        }
    },
    dataLan:{
        type: Sequelize.DATE,
        allowNull: false,
    }
    
});

Extrato.sync();

module.exports = Extrato;