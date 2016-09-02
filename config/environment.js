/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'tavern-tab',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    firebase: {
      apiKey: 'AIzaSyC65WCUTmUQYm7Q386OvwEo7Hd6mSbHo0o',
      authDomain: 'tavern-tab.firebaseapp.com',
      databaseURL: 'https://tavern-tab.firebaseio.com',
      storageBucket: 'tavern-tab.appspot.com',
    },

    EmberENV: {
      EXTEND_PROTOTYPES: {
        Date: false,
      },
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
