var express = require('express');
var router = express.Router();

var data = [
    {name:'グー', value:'gu'},
    {name:'チョキ', value:'choki'},
    {name:'パー', value:'pa'},
];

router.get('/', function(req, res, next) {
    var n = res.query.id;
    res.json(data[n]);
});
module.exports = router;