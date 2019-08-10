// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
// const Jasmine2ScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
const Jasmine2ScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

// export const jasmine2ScreenshotReporter = new Jasmine2ScreenshotReporter({
//   dest: 'screenshots',
//   filename: 'index.html',
//   userCss: 'reporter.css',
//   reportFailedUrl: true,
//   showQuickLinks: true
// })

// export const setupJasmine2ScreenshotReport = () => jasmine.getEnv().addReporter(jasmine2ScreenshotReporter)

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    jasmine.getEnv().addReporter(new Jasmine2ScreenshotReporter({
      dest: 'e2e/screenshots',
      filename: 'index.html',
      userCss: 'reporter.css',
      reportFailedUrl: true,
      showQuickLinks: true
  }));
  }
};