const { defineConfig } = require("cypress");
const {
  addMatchImageSnapshotPlugin,
} = require("cypress-image-snapshot/plugin");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qa-practice.netlify.app",
    viewportWidth: 1600,
    viewportHeight: 1200,
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);
      return config;
    },
  },
});
