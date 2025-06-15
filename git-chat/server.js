const http = require('http')
const fs = require('fs');
const path = require('path');
const { url } = require('inspector');

const {server} = require('socket.io');
const io = new Server(server);
io.on('connection',(socket) =>{
    console.log('a user connected. id - '+socet.id)
})

const pathToIndex = path.join(__dirname, 'static', 'index.html');
const pathToStyle = path.join(__dirname, 'static', 'style.css');
const indexHtmlFile = fs.readFileSync(pathToIndex)

const server = http.createServer((req, res) => {
    // if(req.url == '/'){
    //     return res.end(indexHtmlFile);
    switch(req,url){
        case '/':return res.end(indexHtmlFile);
        case '/style.css' :return res.end(pathToStyle);
        case '/script.js' :return res.end(pathToStyle);
    }
    res.statusCode = 404;
    return res.end('Error 404')
});


server.listen(3000);
