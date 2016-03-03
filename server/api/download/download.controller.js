'use strict';

var _ = require('lodash');

// Get list of downloads
exports.index = function(req, res) {
  var query = req.body.dl
  // 'mbvMh7l5NtIB8f4.pdf'
  ///server/api/download
  if(query === 'mbvMh7l5NtIB8f4'){
    res.download('./mbvMh7l5NtIB8f4.pdf')
  }else{
    res.sendStatus(302)
  }
  
};