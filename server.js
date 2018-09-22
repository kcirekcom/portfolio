'use strict';

const dotenv = require('dotenv');
const express = require('express');
const compression = require('compression');

dotenv.load();

const PORT = process.env.PORT;
const app = express();

app.use(compression());

app.use(express.static(`${__dirname}/build`));

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

app.get('/icon', (req, res) => {
  res.sendFile(`${__dirname}/app/assets/e-icon.png`);
});

app.listen(PORT, () => {
  console.log(`server up: ${PORT}`);
});