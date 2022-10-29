const http = require('http')

const port = 3500

const server = http.createServer((req, res)=>{
    res.setHeader('content-type', 'text/html')
    res.write(`<html>
        <header>
            <title>Node Page</title>
        </header>
        <body>
            <h1>
                Hello backend
            </h1>
        </body>
    </html>`)
    res.end()
    console.log(req.url, req.method, req.headers);
   
}) 

server.listen(port, ()=>console.log(`server is running to port http://localhost:${port}`))