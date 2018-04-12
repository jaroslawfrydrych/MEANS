'use strict';

var utils = require('../utils/writer.js');
var Security = require('../service/SecurityService');

module.exports.asdHandler = function asdHandler (req, res, next) {
  Security.asdHandler()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginHandler = function loginHandler (req, res, next) {
  var content = req.swagger.params['content'].value;
  Security.loginHandler(content)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
