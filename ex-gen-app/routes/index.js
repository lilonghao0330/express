var express = require('express');
var router = express.Router();
var fs = require('fs');


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
 var sample = JSON.parse(fs.readFileSync('../ex-gen-app/public/json/sample.json', 'utf8'))
 console.log(sample);
 var key =Object.keys(sample);
 console.log(key);
 var i =key[Math.floor(Math.random()*key.length)];
 console.log(i);
 if(msg == "グー" ) {
  cpunum = 0;
} else if(msg == "チョキ") {
  cpunum = 1;
} else if(msg == "パー") {
  cpunum = 2;
}
if(cpunum == 0 && i == 1) {
  judge = "あなたの勝ち";
} else if(cpunum == 1 && i == 2) {
  judge = "あなたの勝ち";
} else if(cpunum == 2 && i == 0) {
  judge = "あなたの勝ち";
} else if(cpunum == i) {
  judge = "ひきわけ";
} else {
  judge = "あなたの負け";
}
  res.render('result.ejs',
  {title:'決戦！！',
  content1:'あなたは「'+ msg +'」を選んだ！',
  content2:'相手が「'+ sample[i].name + '」を選んだ！',
  content3:'なんと' + judge +'!',
   link:{herf:"/",text:'※もう一回'},
  });
});

module.exports = router;
