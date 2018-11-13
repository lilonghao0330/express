
exports.randomPick = function(sample) {
console.log('pc:',sample);
 var key =Object.keys(sample);
 console.log(key);
 var i =key[Math.floor(Math.random()*key.length)];
 console.log(i);
 return i;
};