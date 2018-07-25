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
              <script >
                function nightDayHandler(self) {
                    let target = document.querySelector('body');
                    let alist = document.querySelectorAll('a');
                    
                    if (self.value === 'night') {
                        target.style.backgroundColor = 'black';
                        target.style.color = 'white';
                        self.value = 'day';
                        let i = 0;                
                        while (i < alist.length) {
                            alist[i].style.color = 'powderblue';
                            i++;
                        }
                    } else {
                        target.style.backgroundColor = 'white';
                        target.style.color = 'black';
                        self.value = 'night';
                        let i = 0;                
                        while (i < alist.length) {
                            alist[i].style.color = 'blue';
                            i++;
                        }
                    }
                }
              </script>
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