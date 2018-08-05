const http = require('http');
const url = require('url');
const fs = require('fs');
const qs = require('querystring');
const path = require('path');
const sanitizeHtml = require('sanitize-html');
const template = require('./lib/template.js');

const app = http.createServer((request, response) => {
  const queryData = url.parse(request.url, true).query;
  const pathStr = url.parse(request.url, true).pathname;

  if (pathStr === '/') {
    if (queryData.id === undefined) {
      fs.readdir('./data', (err, files) => {
        const title = 'Welcome';
        const description = 'Hello, Node.js';
        const list = template.list(files);
        const html = template.HTML(title, list,
          `<h2>${title}</h2>${description}`,
          '<a href="/create">create</a>');
        response.writeHead(200);
        response.end(html);
      });
    } else {
      const title = queryData.id;
      fs.readdir('./data', (dirErr, files) => {
        const filteredId = path.parse(queryData.id).base;
        fs.readFile(`./data/${filteredId}`, 'utf8', (fileErr, description) => {
          const sanitizedTitle = sanitizeHtml(title);
          const sanitizeDescription = sanitizeHtml(description, {
            allowedTags: ['h1'],
          });
          const list = template.list(files);
          const html = template.HTML(title, list,
            `<h2>${sanitizedTitle}</h2>${sanitizeDescription}`,
            `
                <a href="/create">create</a>
                <a href="/update?id=${title}">update</a>
                <form action="delete_process" method="post">
                    <input type="hidden" name="id" value="${sanitizedTitle}">
                    <input type="submit" value="delete">
                </form>
            `);
          response.writeHead(200);
          response.end(html);
        });
      });
    }
  } else if (pathStr === '/create') {
    if (queryData.id === undefined) {
      fs.readdir('./data', (err, files) => {
        const title = 'WEB - create';
        const list = template.list(files);
        const html = template.HTML(title, list,
          `
            <form action="/create_process" method="post">
                <p><input type="text" name="title" placeholder="title"></p>
                <p>
                    <textarea name="description" placeholder="description"></textarea>
                </p>
                <p>
                    <input type="submit">
                </p>
            </form>
          `, '');
        response.writeHead(200);
        response.end(html);
      });
    }
  } else if (pathStr === '/create_process') {
    let body = '';

    request.on('data', (data) => {
      body += data;
    });
    request.on('end', () => {
      const post = qs.parse(body);

      fs.writeFile(`data/${post.title}`, post.description, 'utf8', () => {
        response.writeHead(302, { Location: `/?id=${post.title}` });
        response.end();
      });
    });
  } else if (pathStr === '/update') {
    fs.readdir('./data', (dirErr, files) => {
      const filteredId = path.parse(queryData.id).base;
      fs.readFile(`data/${filteredId}`, 'utf8', (fileErr, description) => {
        const title = queryData.id;
        const list = template.list(files);
        const html = template.HTML(title, list,
          `
            <form action="/update_process" method="post">
                <input type="hidden" name="id" value="${title}">
                <p><input type="text" name="title" placeholder="title" value="${title}"></p>
                <p>
                    <textarea name="description" placeholder="description">${description}</textarea>
                </p>
                <p>
                    <input type="submit">
                </p>
            </form>
          `,
          `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`);
        response.writeHead(200);
        response.end(html);
      });
    });
  } else if (pathStr === '/update_process') {
    let body = '';

    request.on('data', (data) => {
      body += data;
    });
    request.on('end', () => {
      const post = qs.parse(body);
      const filteredId = path.parse(post.id).base;
      const titleData = post.title;

      fs.rename(`data/${filteredId}`, `data/${titleData}`, () => {
        fs.writeFile(`data/${titleData}`, post.description, 'utf8', () => {
          response.writeHead(302, { Location: `/?id=${titleData}` });
          response.end();
        });
      });
    });
  } else if (pathStr === '/delete_process') {
    let body = '';
    request.on('data', (data) => {
      body += data;
    });
    request.on('end', () => {
      const post = qs.parse(body);
      const filteredId = path.parse(post.id).base;
      fs.unlink(`data/${filteredId}`, () => {
        response.writeHead(302, { Location: '/' });
        response.end();
      });
    });
  } else if (pathStr === '/colors.js') {
    fs.readFile('js/colors.js', 'utf8', (err, jsFile) => {
      response.writeHead(200, {
        'content-type': 'application/javascript',
      });
      response.end(jsFile);
    });
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});
app.listen(3000);
