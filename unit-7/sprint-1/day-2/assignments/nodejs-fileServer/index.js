const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    let url = req.url || "/";

    if(url.includes('.html') || url.includes('.js') || url.includes(".txt")){
        res.writeHead(500, { 'Content-Type': 'application/json' });
        const read = fs.readFileSync("."+url,"utf-8")
          return  res.end(read);
    }

     else {

     if (url !== '/favicon.ico') {
        fs.readdir('.' + url, (err, files) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(err);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                files.forEach((file) => {
                    if(url === "/"){
                        res.write(`<li><a href="${url}${file}">${file}</a></li>`);
                    }
                    else{
                        res.write(`<li><a href="${url}/${file}">${file}</a></li>`);
                    }
                      
                });
                res.end();
            }
        });
    }
            
}
});

server.listen(3001);
console.log('Server running at http://localhost:3001/');