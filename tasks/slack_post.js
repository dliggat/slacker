var config  = require('config');
var request = require('request');
var util    = require('util');

module.exports = function(grunt) {
  grunt.registerTask('slack_post', 'Post to slack', function() {

    var done = this.async();

    var payload = {
      "text": config.get("slack.message"),
      "channel": config.get("slack.channel"),
      "username": config.get("slack.username"),
      "icon_emoji": config.get("slack.icon_emoji")
    };

    var requestOptions = {
      url: config.get('slack.webhookUrl'),
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    };

    request.post(requestOptions, function(error, response, body) {
      if (error) {
        grunt.fail.fatal(error);
      } else {
        grunt.log.write(util.inspect(response, {showHidden: false, depth: 1, colors: true})).ok();
      }
      done();
    });

  });
};
