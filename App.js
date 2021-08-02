require('dotenv').config();
const express = require('express');
const cors = require('cors');

const list = require('./routes/list');
const addregister = require('./routes/addregister');
const deleteReg = require('./routes/deletereg');
const sumReg = require('./routes/sumRegisters');

const app = express();

app.use(express.json());

app.use(cors());

const port = process.env.PORT || 8081;


app.use('/api/v1/list', list);

app.use('/api/v1/addregister', addregister);

app.use('/api/v1/deletereg', deleteReg);

app.use('/api/v1/sumreg', sumReg);

app.use(function(req, res, next) {
    next(res.send('error'));
});

app.listen(port, () => {
    console.log(`Serve start in port: ${port}`)
});