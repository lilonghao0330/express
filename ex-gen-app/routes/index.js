var express = require('express');
var router = express.Router();
var j = require('./judge.js');
var pc = require('./pc.js');
var sm = require('./samplename.js');

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
 var msg = req.body['select'];
 if(msg == "グー" ) {
  cpunum = 0;
} else if(msg == "チョキ") {
  cpunum = 1;
} else if(msg == "パー") {
  cpunum = 2;
};
 pc.randomPick();
 var sample = pc.randomPick();
 var i = pc.randomPick();
 
 sm.sampleName(sample);
 var data= sm.sampleName();
 j.judgement(i);

  res.render('result.ejs',
  {title:'決戦！！',
  content1:'あなたは「'+ msg +'」を選んだ！',
  content2:'相手が「'+ data + '」を選んだ！',
  content3:'なんと' + judge +'!',
   link:{herf:"/",text:'※もう一回'},
  });
});

module.exports = router;
