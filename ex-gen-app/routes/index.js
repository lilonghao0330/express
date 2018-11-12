var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  var msg ='「グー」か「チョキ」か「パー」を選んで';
  res.render('index.ejs',
  {title:'じゃんけんで勝負だよ',
   content:msg,
   link:{herf:"/",text:''},
  });
});

//router.post('/',function(req, res, next) {
  //var msg = req.body['select'];
  //console.log(msg);
//});

router.post('/post',function(req, res, next) {
  //var msg = req.body['select'];
  //var data={
    //title:"じゃんけんで勝負だよ",
    //content:'あなたは「'　+ msg +'」を選んだ、決戦Pageにて結果を見よう',
    //link:{herf:"/result",text:'※決戦へ'}
  //};
  //res.render('index.ejs',data);
  var response = {
    "name":req.body['select'],
   };
  console.log(response);
  res.end(JSON.stringify(response));
  exports.response = response;
});
//postpageのFormに結果を反映、
//決戦リンクでコンテンツを送信
//router.post('/post/response',function(req, res, next) {
  //var response = {
    //"name":req.body['select'],
  //};
  //console.log(response);
  //res.end(JSON.stringify(response));
  //var data={
    //content:'あなたは「'　+ select +'」を選んだ、決戦開始を押して！',
  //};
  //res.render('index.ejs',data);
//});
module.exports = router;
