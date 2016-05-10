var express = require('express');
var multer = require('multer');
var storage = multer.memoryStorage()
var upload = multer({ storage: storage });

var app = express();

app.use(express.static('public'));

app.post('/analyze', upload.single('file'), function(req, res, next){
  console.log("received request");
  var file = req.file;
  console.log('Received: ' + file.originalname);
  var message = "Your file is " + file.size + " bytes.";
  res.send(message);
});

app.listen(process.env.PORT || 3000, function(){
  console.log('Listening for files!');
});
