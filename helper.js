var fs = require('fs');
var q = require('q');
var FirefoxProfile = require('firefox-profile');

exports.getFirefoxProfile = function() {
  var deferred = q.defer();

  var firefoxProfile = new FirefoxProfile();

  firefoxProfile.addExtensions(['./plugins/canvasblocker-0.2.0-Release-fx+an.xpi'], function() {
    firefoxProfile.encoded(function(encodedProfile) {
      var multiCapabilities = [{
        browserName: 'firefox',
        firefox_profile : encodedProfile
      }];
      deferred.resolve(multiCapabilities);
    })
  });
  return deferred.promise;
};