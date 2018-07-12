let http = require('http');
let url = require('url');
let fs = require('fs');

function templateHTML(title, list, body) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${body}
    </body>
    </html>
    `;
}

function templateList(fileList) {
    let list = '<ul>';

    var i = 0;
    while (i < fileList.length) {
        list += `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`;
        i++;
    }
    list += '</ul>';

    return list;
}

let app = http.createServer(function (request, response) {
    let _url = request.url;
    let queryData = url.parse(_url, true).query;
    let pathname = url.parse(_url, true).pathname;
    let title = queryData.id;

    if (pathname === '/') {
        if (queryData.id === undefined) {
            fs.readdir('./data', function (err, files) {
                let title = 'Welcome';
                let description = 'Hello, Node.js';
                let list = templateList(files);
                let template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
                response.writeHead(200);
                response.end(template);
            });


        } else {
            fs.readdir('./data', function (err, files) {
                fs.readFile(`./data/${queryData.id}`, 'utf8', function (err, data) {
                    let description = data;
                    let list = templateList(files);
                    let template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
                    response.writeHead(200);
                    response.end(template);
                });
            });
        }
    } else {
        response.writeHead(404);
        response.end('Not found');
    }

});
app.listen(3000);