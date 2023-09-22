const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com',
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomNumber = Math.floor(Math.random(1000) * 1000);
          return {
            newUsername: `user${randomNumber}`,
            password: '12345Qwert!'
          };
        }
      });
    }
  }
});
