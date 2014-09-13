var express = require('express');
var router = express.Router();

var request = require('request');
var Lame = require('lame');
var Speaker = require('speaker');

var fs = require('fs');
var spawn = require('child_process').spawn;
var out = fs.openSync('../out.log', 'a');
var err = fs.openSync('../out_err.log', 'a');

var child = spawn(
  '/usr/bin/sound_start',
  [],
  {
    detached: true,
    stdio: [ 'ignore', out, err ]
  }
);

/* POST sayit */
router.post('/', function(req, res) {
  var text = req.param('text')
  var url = 'http://translate.google.com/translate_tts?tl=en&q=' + encodeURIComponent(text);
  request(url).pipe(new Lame.Decoder).pipe(new Speaker);

  res.redirect('/');
});

module.exports = router;
