'use strict';

var _ = require('lodash');

// Get list of downloads
exports.index = function(req, res) {
  var query = req.body.dl
  // 'mbvMh7l5NtIB8f4.pdf'
  if(query === 'mbvMh7l5NtIB8f4'){
    res.download('./server/api/download/mbvMh7l5NtIB8f4.pdf', 'acethecfa-25-practice-questions.pdf')
  }else{
    res.sendStatus(302)
  }
  
};