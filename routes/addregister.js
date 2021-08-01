const express = require('express');
const router = express.Router();

const Extrato = require('../model/Extrato');

router.post('/', async (req, res, next) => {
    await Extrato.create(req.body)
    .then(function(){
        return res.json({
            error: false,
            mensage: "Add register",
        });
    })
    .catch((err) => {
        return res.status(400).json({
            error: true,
            mensage: "Error, register not add",
        })
    })
});

module.exports = router;