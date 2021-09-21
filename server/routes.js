const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require('express');
const routes = express.Router();

require('dotenv').config();

routes.get('/countries', async (req, res) => {
  const response = await fetch(`${process.env.API_URL}${process.env.API_KEY}`);
  const responseJSON = await response.json();
  console.log(responseJSON);

  return res.json(responseJSON);
});

module.exports = routes;
