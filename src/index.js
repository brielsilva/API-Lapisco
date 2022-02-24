const { urlencoded } = require('express');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(urlencoded({extended: true}));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static('images'));
/* app.use('/images',express.static('images')); */

app.use(routes);


app.listen(process.env.PORT, () => console.log('Servidor escutando na porta 3000'));
