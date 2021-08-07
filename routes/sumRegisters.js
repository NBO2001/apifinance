const express = require('express');
const router = express.Router();
const SumType = require('../utils/SumType');

router.get('/:month/:year', async (req, res, next) => {

    const monthData = new Number(req.params.month);
    const yaerData = new Number(req.params.year);

    //Period do ano
    const firstDay = new Date(`${yaerData}`);
    const endDayF = new Date(`${yaerData+1}`);
    const dateEnd = new Date(endDayF.getFullYear(), endDayF.getMonth()+1, 1);
    //Fim perid
    
    const date = new Date(`${yaerData}-${monthData}`);
    const iniDay = new Date(date.getFullYear(), date.getMonth(), 0);
    const endDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    
    const totalYear = [
       {
        inMonth: {
            recp: await SumType(1, iniDay, endDay).then((relt) =>  relt  ),
            invs: await SumType(2, iniDay, endDay).then((relt) =>  relt ),
            desp: await SumType(3, iniDay, endDay).then((relt) =>  relt  )
        },
        inYear: {
            recp: await SumType(1, firstDay, dateEnd).then((relt) =>  relt  ),
            invs: await SumType(2, firstDay, dateEnd).then((relt) =>  relt ),
            desp: await SumType(3, firstDay, dateEnd).then((relt) =>  relt  )
        }
       }
    ];


    res.send(totalYear)

     
})

module.exports = router;
