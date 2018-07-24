let template = {
    /**
     * @return {string}
     */
    HTML: function (title, list, body, control) {
        return `
            <!doctype html>
            <html>
            <head>
              <title>WEB1 - ${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">WEB</a></h1>
                <input id="night_day" type="button" value="night" onclick="
                if (document.querySelector('#night_day').value === 'night') {
                    document.querySelector('body').style.backgroundColor = 'black';
                    document.querySelector('body').style.color = 'white';
                    document.querySelector('#night_day').value = 'day';
                } else {
                    document.querySelector('body').style.backgroundColor = 'white';
                    document.querySelector('body').style.color = 'black';
                    document.querySelector('#night_day').value = 'night';
                }
                ">
              ${list}
              ${control}
              ${body}
            </body>
            </html>`;
    },
    list: function (fileList) {
        let list = '<ul>';

        let i = 0;
        while (i < fileList.length) {
            list += `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`;
            i++;
        }
        list += '</ul>';

        return list;
    }
};

module.exports =  template;