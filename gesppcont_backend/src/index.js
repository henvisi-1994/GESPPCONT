const express = require('express');
const app = express();

//midelwares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//rutas
app.use(require('./routes/srhh'))

app.listen(4000);
console.log('server on port 4000');