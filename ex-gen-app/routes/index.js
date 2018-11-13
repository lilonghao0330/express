var express = require('express');
var router = express.Router();
var j = require('./judge.js');
var pc = require('./pc.js');
var smn = require('./samplename.js');
var sm = require('./sample.js');



/* GET home page. */
router.get('/', function(req, res, next) {
  var msg ='「グー」か「チョキ」か「パー」を選んで';
  res.render('index.ejs',
  {title:'じゃんけんで勝負だよ',
   content:msg,
   link:{herf:"/result",text:'※決戦へ'}
  });
  });

router.post('/result',function(req, res, next) {
 //ユーザー入力
  var msg = req.body['select'];
  var cpunum;
 if(msg == "グー" ) {
  cpunum = 0;
　} else if(msg == "チョキ") {
  cpunum = 1;
　} else if(msg == "パー") {
  cpunum = 2;
　};

 //json読み込み
 var sample = sm.sample();

//PC側値抽出
 var i = pc.randomPick(sample);
 
 //データネーム
 var data= smn.sampleName(sample,i);

 //決戦ジャージ
 var judge= j.judgement(i,cpunum);

  res.render('result.ejs',
  {title:'決戦！！',
  content1:'あなたは「'+ msg +'」を選んだ！',
  content2:'相手が「'+ data + '」を選んだ！',
  content3:'なんと' + judge +'!',
   link:{herf:"/",text:'※もう一回'},
  });
});

module.exports = router;
