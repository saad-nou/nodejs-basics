
const http = require('node:http');
const fs = require('node:fs')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"})
    switch(req.url) {
        case '/': 
            res.end(fs.readFileSync('index.html','utf8'))
            break;
        case '/about':
            res.end(fs.readFileSync('about.html','utf8'))
            break;
        case '/contact-me':
            res.end(fs.readFileSync('contact-me.html','utf8'))
            break;
        default:
            res.end(fs.readFileSync('404.html','utf8'))
    }
})

server.listen(8080);
