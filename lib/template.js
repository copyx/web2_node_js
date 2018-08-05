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
        <script >
        let Links = {
          setColor: function (color) {
            let alist = document.querySelectorAll('a');
            let i = 0;                
            while (i < alist.length) {
              alist[i].style.color = color;
              i++;
            }
          }
        };
        
        let Body = {
          setColor: function (color) {
            document.querySelector('body').style.color = color;
          },
          setBackgroundColor: function (color) {
            document.querySelector('body').style.backgroundColor = color;
          }   
        };
        
        function nightDayHandler(self) {          
          if (self.value === 'night') {
            Body.setColor('white');
            Body.setBackgroundColor('black');
            self.value = 'day';
            Links.setColor('powderblue');
          } else {
            Body.setColor('black');
            Body.setBackgroundColor('white');
            self.value = 'night';
            Links.setColor('blue');
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
