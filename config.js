var helper = require('./helper.js');

exports.config = {

  onPrepare: function() {
    global.isAngularSite = function(flag) {
      browser.ignoreSynchronization = !flag;
    };
  },

  specs: [
    'vote.spec.js'
  ],

  framework: 'jasmine2',
  //jasmineNodeOpts: {defaultTimeoutInterval: 60 * 1000},

  getMultiCapabilities: helper.getFirefoxProfile,
  allScriptsTimeout: 20000,

  params: {
    url: '', // with http://
    autoSubmit: false
  }
};