const express = require('express');
const router = express.Router();
const Extrato = require('../model/Extrato');
const { Op } = require("sequelize");

router.get('/', async (req, res, next) => {
  await Extrato.findAll({order: [['id', 'DESC']]})
  .then((resul) => {
      return res.status(200).json({
        erro: false,
        resul
      })
  })
  .catch(() => {
    res.status(400).json({
      erro: true,
      mensage: "Nenhum resul"
    })
  });
});

router.get('/:month/:year', async (req, res, next) => {

    const monthData = new Number(req.params.month);
    const yaerData = new Number(req.params.year);
    
    const data = new Date(`${yaerData}-${monthData}`);

    const iniDay = new Date(data.getFullYear(), data.getMonth(), 0);
    const endDay = new Date(data.getFullYear(), data.getMonth() + 1, 1);
      
    await Extrato.findAll({
      order: [['id', 'DESC']],
      where: {
        "dataLan": {
          [Op.between]: [iniDay, endDay],
        }
      }
    })
      .then((resuls) => {
          return res.status(200).json({
            erro: false,
            resuls
          })
      })
      .catch(() => {
        res.status(400).json({
          erro: true,
          mensage: "Nenhum resul"
        })
      });
})

module.exports = router;
