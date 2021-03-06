const Links = {
  setColor(color) {
    /*
    const aList = document.querySelectorAll('a');
    let i = 0;
    while (i < aList.length) {
      aList[i].style.color = color;
      i += 1;
    }
    */
    $('a').css('color', color);
  },
};

const Body = {
  setColor(color) {
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor(color) {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  },
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
