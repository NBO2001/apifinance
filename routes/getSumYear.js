const express = require('express');
const router = express.Router();
const Extrato = require('../model/Extrato');
const { Sequelize, Op } = require("sequelize");

router.get("/:year", (req, res, next) => {
     const yaerData = new Number(req.params.year);
 
     //Period do ano
     const firstDay = new Date(`${yaerData}`);
     const endDayF = new Date(`${yaerData+1}`);
     const dateEnd = new Date(endDayF.getFullYear(), endDayF.getMonth()+1, 1);
     //Fim perid
        

     Extrato.findAll({
          order: [[Sequelize.fn('strftime', Sequelize.literal("'%m'"), Sequelize.col('dataLan')), 'DESC']],
          attributes: [
               'type',
               [Sequelize.fn('strftime', Sequelize.literal("'%m'"), Sequelize.col('dataLan')), 'month'],
            [
               Sequelize.fn(
                 'SUM',
                 Sequelize.col('val')
               ),
               'sumtot',
             ],
          ],
          group:['type', Sequelize.fn('strftime', Sequelize.literal("'%m'"), Sequelize.col('dataLan'))],
          where: {
               "dataLan": {
                    [Op.between]: [firstDay, dateEnd],
               }
          }
     }).then((resul) => {
          res.status(200).json({
               error: false,
               resul
          })
     }).catch((err) => {
          res.status(400).json({
               error: false,
          })
     })

})

module.exports = router;