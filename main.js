var fogbugz = require('./fogbugz');
var slack = require('./slack');

exports.handler = function(task, context) {
  console.log('Received case:', JSON.stringify(task));
  var message = fogbugz.slackMessage(task);
  console.log('Responding with:', JSON.stringify(message));
  slack.sendMessage(message, function(error, response, body){
    if(error){
      console.log(error, response, body);
      context.fail(error);
    } else {
      context.succeed(message);
    }
  });
};
