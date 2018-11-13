var fs = require('fs'); 

exports.randomPick = function() {
 var sample = JSON.parse(fs.readFileSync('../ex-gen-app/public/json/sample.json', 'utf8'))
 console.log(sample);
 var key =Object.keys(sample);
 console.log(key);
 var i =key[Math.floor(Math.random()*key.length)];
 console.log(i);
 return sample;
 return i;
};