const express = require('express')
const next = require('next')

const NODE_ENV = process.env.NODE_ENV || 'dev'
const dev = NODE_ENV !== 'production'
const PORT = process.env.PORT || 80;
const app = next({ dev })
const handle = app.getRequestHandler()
    
app.prepare()
.then(() => {
  const server = express()
    
  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`Running in ${NODE_ENV} mode`);
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})