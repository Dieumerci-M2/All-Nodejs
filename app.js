const http = require('http')

const port = 3500

const server = http.createServer((req, res)=>{
    res.end('Hello Backend')
}) 

server.listen(port, ()=>console.log(`server is running to port http://localhost:${port}`))