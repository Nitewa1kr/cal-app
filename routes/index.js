var express = require('express');
var router = express.Router();

/*----------------------CREATING RECORD--------------*/
router.get('/', function(req,res){
    res.send('index.html');//this will change
});


module.exports = router;