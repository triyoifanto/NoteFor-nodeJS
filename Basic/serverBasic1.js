// http is built in module of node
const http = require('http'), 
makeServer = (request, response) => {
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write('Hello mantan');    
    response.end();
}, 
server = http.createServer(makeServer);

server.listen(3000, () =>{
    console.log('node server at port 3000!');
});