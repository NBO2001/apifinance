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
    },
    type:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
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