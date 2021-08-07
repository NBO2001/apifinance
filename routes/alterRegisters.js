const express = require('express');
const router = express.Router();
const Extrato = require('../model/Extrato');

router.put("/", async (req, res, next) => {
     
     const { id } = req.body;

     await Extrato.update(req.body, {
          where: {
               id
          }
     })
     .then(function(){
         return res.json({
             error: false,
             mensage: "Register altered",
         });
     })
     .catch((err) => {
         return res.status(400).json({
             error: true,
             mensage: "Error, register not altered",
         })
     })
     
})

module.exports = router;