var express = require('express');
var router = express.Router();

/* GET home page. */
let x;
let y;
router.get('/', function(req, res, next) {
   
if(req.query.x ==undefined ) {
  x=Math.floor(Math.random()*10);
  y=Math.fround(Math.random());
let y1=Math.hypot(x,y);
let y2=Math.ceil(y);
let y3=Math.clz32(x);
  res.send('Math.hypot() applied to '+x+' and '+y+' is ' +y1+"<br>" +'Math.ceil() applied to '+y+' is '+y2+"<br>"+'Math.clz32()  applied to '+x+' is'+y3); 
}
else{

  x = req.query.x;
  let y1=Math.hypot(x,x);
  let y2=Math.ceil(x);
  let y3=Math.clz32(x);

  res.send('Math.hypot() applied to '+x+' and '+y+' is ' +y1+"<br>" +'Math.ceil() applied to '+y+' is '+y2+"<br>"+'Math.clz32()  applied to '+x+' is'+y3);
}
  //res.send('Math.atanh() applied to '+x+' is'+y2);
  //res.send('Math.cbrt() applied to ${x} is'+y3);
});

module.exports = router;