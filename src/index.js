const { urlencoded } = require('express');
const express = require('express');

const routes = require('./routes');

const app = express();

app.use(urlencoded({extended: true}));
app.use(express.json());

app.use(routes)


app.listen(3000, () => console.log('Servidor escutando na porta 3000'));
