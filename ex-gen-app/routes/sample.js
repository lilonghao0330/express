var fs = require('fs'); 

exports.sample = function() { 
    var sample = JSON.parse(fs.readFileSync('../ex-gen-app/public/json/sample.json', 'utf8'))
    return sample;
}