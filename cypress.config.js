const { defineConfig } = require("cypress");
// setup env
const dotenv = require('dotenv');
dotenv.config();


module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports'
    // overwrite: false,
    // html: true,
    // json: true
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotOnRunFailure: true,
  video: true, // fungsi buat rekam saat running
  videoCompression: 32,
  watchForFileChanges: false, // fungsi buat otomatis jalan saat di save
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  e2e: {
    defaultCommandTimeout: 10000,
    env: {
      ...process.env
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
