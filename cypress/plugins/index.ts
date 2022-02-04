// cypress/plugins/index.ts

/// <reference types="cypress" />

module.exports = (on, config) => {
  // @ts-ignore
  on('before:browser:launch', ({ family, name } = {}, launchOptions) => {
    console.log(launchOptions.args); // print all current args

    if (family === 'chromium' && name !== 'electron') {
      // auto open devtools
      launchOptions.args.push('--auto-open-devtools-for-tabs');
    }

    if (family === 'firefox') {
      // auto open devtools
      launchOptions.args.push('-devtools');
    }

    if (name === 'electron') {
      // auto open devtools
      launchOptions.preferences.devTools = true;
    }

    // whatever you return here becomes the launchOptions
    return launchOptions;
  });
};