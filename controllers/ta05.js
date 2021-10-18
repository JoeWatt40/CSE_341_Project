 //Team Activity 05 Controller

 exports.postCreateCookie = (req, res, next) => {
    console.log('Cookie Created');
  };
  
  exports.postStyle = (req, res, next) => {
    req.session.style = req.body.css_style;
    res.redirect('/05'); 
  };
  
  exports.postCounter = (req, res, next) => {
    req.session.counter += Number(req.body.constant); 
    res.redirect('/05');
  };
  
  exports.resetSession = (req, res, next) => {
    if (req.body.reset === 'true') {
      req.session.destroy(() => {
        res.redirect('/05'); 
      });
    } else {
      res.redirect('/05');
    }
  };
  
  exports.getIndex = (req, res, next) => {
    if (req.session.counter === undefined) {
      req.session.counter = 0;
    }
    if (!req.session.style === undefined) {
      req.session.counter = 0;
    }
    res.render('pages/ta05', {
      title: 'Team Activity 05',
      path: '/ta05',
      style: req.session.style,
      counter: req.session.counter,
    });
  };