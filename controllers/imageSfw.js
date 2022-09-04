const akaneko = require('akaneko');

class imageSfw {
  home({ params: {} }, req) {
    req.send({
      coder: 'ZasXCar',
      date: new Date(),
      result: {
        neko: '/sfw/neko',
        foxgirl: '/sfw/foxgirl'
        
      }
    });
  }
  neko({ params: {}}, req) {
    akaneko.neko()
    .then(response => {
      req.send(response);
    })
    .catch(error => {
      req.send(error);
    });
  }
  foxgirl({ params: {}}, req) {
    akaneko.foxgirl()
    .then(response => {
      req.send(response);
    })
    .catch(error => {
      req.send(error);
    });
  }
}

module.exports = new imageSfw();