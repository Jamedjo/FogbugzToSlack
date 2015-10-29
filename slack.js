var variables = require('./variables');
var request = require('request');
var _ = require('underscore-node');

var message = function(options){
  var defaults = {username: 'FogBugz', icon_url: "http://www.fogcreek.com/images/fogbugz/pricing/kiwi.png"};
  return _.extend(defaults, options);
}

var plainMessage = function(text) {
  return message({text: text});
};

request.json = function(url, data, callback){
  return request.post({url: url, json: data}, callback);
};

var default_callback = function(error, response, body){
  if (error) {
    console.error(error);
  } else {
    console.log(body);
  }
}

exports.sendMessage = function(text, callback) {
  return request.json(variables.slackUrl, message(text), callback || default_callback);
};
