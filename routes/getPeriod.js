const express = require('express');
const router = express.Router();
const SumType = require('../utils/SumType');

const Extrato = require('../model/Extrato');

router.get('/:year', async (req, res, next) => {
     const yaerData = new Number(req.params.year);
 
     //Period do ano
     const firstDay = new Date(`${yaerData}`);
     const endDayF = new Date(`${yaerData+1}`);
     const dateEnd = new Date(endDayF.getFullYear(), endDayF.getMonth()+1, 1);
     //Fim perid
     
     const totalYear = [
        {
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