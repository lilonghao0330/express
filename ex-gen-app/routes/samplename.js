
exports.sampleName = function(sample) {
    console.log(sample);
    
    var datalist = JSON.parse(sample);
    var len = datalist.length; 
    for(var i=0; i<len; i++) {
         var data=datalist[i].name;
    }
    return data;
}
