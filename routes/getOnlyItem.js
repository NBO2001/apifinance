const express = require('express');
const router = express.Router();
const Extrato = require('../model/Extrato');
const { Op } = require("sequelize");


router.get('/:id', async (req, res, next) => {
     const id = new Number(req.params.id);
     await Extrato.findAll({
       where: {
         id
       }
     })
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
     })
});
module.exports = router;