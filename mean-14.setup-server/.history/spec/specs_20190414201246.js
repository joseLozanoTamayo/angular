const Jasmine = require('jasmine');
const JasmineConsoleReporter = require('jasmine-console-reporter');

const jasmine = new Jasmine();
jasmine.loadConfigFile('spec/support/jasmine.json');