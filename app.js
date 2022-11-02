const http = require('http')
const express = require('express')

const app = express();
const port = 3500

const server = http.createServer((app)=>{
   
}) 

server.listen(port, ()=>console.log(`server is running to port http://localhost:${port}`))