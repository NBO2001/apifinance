const express = require('express');
const router = express.Router();
const Extrato = require('../model/Extrato');

router.delete('/:id', async (req, res, next) => {

    const id = new Number(req.params.id);
    
    await Extrato.destroy({
        where: {
            "id": id
        }
    })
    .then(() => {
        return res.status(202).json({
            error: false
        })
    })
    .catch(() => {
        return res.status(304).json({
            error: true
        })
    })

})

module.exports = router;