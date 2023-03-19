const express = require('express');
const db = require('../db/knex')

function setupServer() {
  const app = express();

  app.use(express.json());

  app.get('/hello', (req, res) => {
    res.send('world');
  })

  app.get('/sandwiches', async (req,res) => {
    const sandwiches = await db('sandwich') 
     .select('*')
     .timeout(1500)
     res.send(sandwiches);
  })

  return app;
};



module.exports = setupServer;