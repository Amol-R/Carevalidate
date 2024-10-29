const { defineConfig } = require("cypress");

module.exports = defineConfig({

  video : true,
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
