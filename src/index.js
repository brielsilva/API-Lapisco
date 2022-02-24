const { urlencoded } = require('express');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const path = require('path');
const createTable = require('../db/migrate/migration');
createTable();
require('dotenv').config();
require('express-async-errors');

const app = express();

app.use(urlencoded({extended: true}));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.static('images'));
/* app.use('/images',express.static('images')); */

app.use(routes);

app.use((error,req,res,next) => {
	console.log(error);
	res.sendStatus(500);
})


app.listen(process.env.PORT, () => console.log('Servidor escutando na porta 3000'));
