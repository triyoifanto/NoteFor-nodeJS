// http, url is built in module of node
const http = require('http'), 
url = require('url'),
makeServer = (request, response) => {
    let path = url.parse(request.url).pathname;
    console.log(path);

    if(path === '/'){
        response.writeHead(200, {'Content-Type':'text/plain'});
        response.write('Hello mantan');
    }
    else if(path === '/about'){
        response.writeHead(200, {'Content-Type':'text/plain'});
        response.write('About Page');
    }
    else{
        response.writeHead(404, {'Content-Type':'text/plain'});
        response.write('Error Page');
    }

    
    response.end();
}, 
server = http.createServer(makeServer);

server.listen(3000, () =>{
    console.log('node server at port 3000!');
});