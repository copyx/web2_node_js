let http = require('http');
let url = require('url');
let fs = require('fs');

let app = http.createServer(function (request, response) {
    let _url = request.url;
    let queryData = url.parse(_url, true).query;
    let pathname = url.parse(_url, true).pathname;
    let title = queryData.id;

    if (pathname === '/') {
        if (queryData.id === undefined) {
            fs.readFile(`data/${queryData.id}`, 'utf8', function (err, data) {
                let title = 'Welcome';
                let description = 'Hello, Node.js';
                let template = `
                <!doctype html>
                <html>
                <head>
                  <title>WEB1 - ${title}</title>
                  <meta charset="utf-8">
                </head>
                <body>
                  <h1><a href="/">WEB</a></h1>
                  <ol>
                    <li><a href="/?id=HTML">HTML</a></li>
                    <li><a href="/?id=CSS"">CSS</a></li>
                    <li><a href="/?id=JavaScript"">JavaScript</a></li>
                  </ol>
                  <h2>${title}</h2>
                  <p>
                  ${description}
                  </p>
                </body>
                </html>
                `;
                response.writeHead(200);
                response.end(template);
            });
        } else {
                fs.readFile(`data/${queryData.id}`, 'utf8', function(err, data){
                let description = data;
                let template = `
                <!doctype html>
                <html>
                <head>
                  <title>WEB1 - ${title}</title>
                  <meta charset="utf-8">
                </head>
                <body>
                  <h1><a href="/">WEB</a></h1>
                  <ol>
                    <li><a href="/?id=HTML">HTML</a></li>
                    <li><a href="/?id=CSS"">CSS</a></li>
                    <li><a href="/?id=JavaScript"">JavaScript</a></li>
                  </ol>
                  <h2>${title}</h2>
                  <p>
                  ${description}
                  </p>
                </body>
                </html>
                `;
                response.writeHead(200);
                response.end(template);
            });
        }
    } else {
        response.writeHead(404);
        response.end('Not found');
    }

});
app.listen(3000);