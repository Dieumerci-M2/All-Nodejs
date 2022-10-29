const http = require('http')

const port = 3500

const server = http.createServer((req, res)=>{
    res.setHeader('content-type', 'text/html')
    if(req.url === '/'){
        res.write(`<html>
        <header>
            <title>Node Page</title>
        </header>
        <body>
            <form action= '/message' method='POST'>
                <input type= 'texte' name='message'>
                <button type='submit'>Envoyer</button>
            </form>
        </body>
    </html>`)
    return res.end()
    }
    else if(req.url === '/message'){
        res.write(`<html>
        <header>
            <title>Node Page</title>
        </header>
        <body>
            <form action= '/'>
                <div class= 'message'></div>
                <button type='submit'>add new message</button>
            </form>
        </body>
    </html>`)
    return res.end()
    }
  
    console.log(req.url, req.method, req.headers);
   
}) 

server.listen(port, ()=>console.log(`server is running to port http://localhost:${port}`))