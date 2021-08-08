require('dotenv').config();
const express = require('express');
const cors = require('cors');

const list = require('./routes/list');
const addregister = require('./routes/addregister');
const deleteReg = require('./routes/deletereg');
const sumReg = require('./routes/sumRegisters');
const alterRegisters = require('./routes/alterRegisters');
const getSumYear = require('./routes/getSumYear');
const getOnlyItem = require('./routes/getOnlyItem');
const getPeriod = require('./routes/getPeriod');

const app = express();

app.use(express.json());

app.use(cors());

const port = process.env.PORT || 8081;

app.use('/api/v1/list', list);

app.use('/api/v1/addregister', addregister);

app.use('/api/v1/deletereg', deleteReg);

app.use('/api/v1/sumreg', sumReg);

app.use('/api/v1/alter-register', alterRegisters);

app.use('/api/v1/dash-year', getSumYear);

app.use('/api/v1/sum-period', getPeriod);

app.use('/api/v1/get-item', getOnlyItem);

app.use(function(req, res, next) {
    next(res.send('error'));
});

app.listen(port, () => {
    console.log(`Serve start in port: ${port}`)
});