const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(cors()); 

app.use("/api/HorseBO", require('./routes/api.routes'));
app.set('port', process.env.PORT || 4000);

module.exports = app;