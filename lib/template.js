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
                let target = document.querySelector('body');
                if (this.value === 'night') {
                    target.style.backgroundColor = 'black';
                    target.style.color = 'white';
                    this.value = 'day';
                } else {
                    target.style.backgroundColor = 'white';
                    target.style.color = 'black';
                    this.value = 'night';
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