const setupServer = require('./server');
const PORT = 4000; // process.env will assign you a port
const server = setupServer();
const db = require('../db/knex')

( async () => {
  try {
    await db.migrate.latest()
    server.listen(PORT, () => {
      console.log(`app is listening at http://localhost:${PORT}`)
    })

  } catch (err) {
    console.error(`app failed to start ${err}`)

  }
})();
