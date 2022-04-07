import http from 'http'

import app from './app'

const server = http.createServer(app)
const port = 5000
// Application routing

// Start server

server.listen(port, () => console.log(`Server is listening on port ${port}!`))
