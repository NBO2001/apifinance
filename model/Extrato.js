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
        validate: {
            notEmpty: {
                msg: "Filder Empty",
                arg: true
            },
            len: {
                msg: "Tem que ter no minimo 3 caracters",
                args: [3,30]
            }
        }
    },
    val: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        validate:{
            isFloat:true,
            notEmpty: true,
        }
    },//  1 receita, 2 investimento, 3 divida
    type:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    situation: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: {
                msg: "Filder empty",
                args: true
            },
            len: [1,10], 
        }
    },
    dataLan:{
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: true,
            isDate: true
        }
    },
    submission:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate:{
            notEmpty: true,
        }
    }
    
});

Extrato.sync();

module.exports = Extrato;