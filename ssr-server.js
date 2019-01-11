const express = require('express')
const next = require('next')
    
const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3001;
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
    console.log(`> Ready on http://localhost:${process.env.NODE_ENV}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})