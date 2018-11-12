var express = require('express');
var router = express.Router();


/* GET result page. */
router.get('/', function(req, res, next) {
    res.render('result.ejs',
    {title:'決戦！！',
    //content:'あなたは「」を選んだ、決戦開始を押して！',
     link:{herf:"/",text:'※もう一回'},
    });
    var index =require('./index.js');  
    console.log(index.response);
});

router.get('/post',function(req, res, next) {
    var msg = req.body['select'];
    console.log(msg);
  });
//router.get('/post', function(req, res, next) {
    //res.render('result.ejs',
    //{content:'あなたは「'　+ select +'」を選んだ、決戦開始を押して！',
    //});

//});


module.exports = router;