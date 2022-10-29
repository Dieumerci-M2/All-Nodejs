const http = require('http')

const port = 3500

const server = http.createServer((req, res)=>{
    res.end('Hello Backend')
    console.log(req.url, req.method, req.headers);
}) 

server.listen(port, ()=>console.log(`server is running to port http://localhost:${port}`))