const template = {
  /**
     * @return {string}
     */
  HTML(title, list, body, control) {
    return `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="colors.js"></script>
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
          <input id="night_day" type="button" value="night" onclick="nightDayHandler(this)">
        ${list}
        ${control}
        ${body}
      </body>
      </html>`;
  },
  list(fileList) {
    let list = '<ul>';

    let i = 0;
    while (i < fileList.length) {
      list += `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`;
      i += 1;
    }
    list += '</ul>';

    return list;
  },
};

module.exports = template;
