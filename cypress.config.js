const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  execTimeout: 120000,
  pageLoadTimeout: 120000,
  requestTimeout: 120000,
  responseTimeout: 120000,

  viewportWidth: 1920,
  viewportHeight: 1080,

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    overwrite: false,
    charts: true,
    reportPageTitle: 'Automation Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    videoOnFailOnly: false,
    reportDir: 'cypress/reports',
  },

  e2e: {

    specPattern: 'cypress/**/**/*.cy.{js,jsx,ts,tsx}',

    experimentalModifyObstructiveThirdPartyCode: true,

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    testIsolation: true,
    experimentalStudio: true,
    experimentalRunAllSpecs: true,
    video: true,
    chromeWebSecurity: false,
    trashAssetsBeforeRuns: false,
    screenshotOnRunFailure: false,
  },
});