# Applitools Example: Cypress in JavaScript

This is the example project for the [Cypress JavaScript tutorial](https://applitools.com/tutorials/sdks/cypress/quickstart).
It shows how to start automating visual tests
with [Applitools Eyes](https://applitools.com/platform/eyes/)
and [Cypress](https://www.cypress.io/) in JavaScript.

It uses:

* [Cypress](https://www.cypress.io/) for browser automation
* [Google Chrome](https://www.google.com/chrome/downloads/) as the local browser for testing
* [npm](https://www.npmjs.com/) for dependency management
* [Applitools Eyes](https://applitools.com/platform/eyes/) for visual testing
* [Applitools Ultrafast Grid](https://applitools.com/platform/ultrafast-grid/) for cross-browser execution

To run this example project, you'll need:

1. An [Applitools account](https://auth.applitools.com/users/register), which you can register for free
2. [Node.js](https://nodejs.org/en/download/) version 16 or higher
3. A good JavaScript editor like [Visual Studio Code](https://code.visualstudio.com/docs/languages/javascript)

To install project dependencies and set up Applitools Eyes, run:

```
npm install
npx eyes-setup
```

The Applitools config file is [`applitools.config.js`](applitools.config.js).
The main test spec is [`simple-example.cy.js`](cypress/e2e/simple-example.cy.js).

To execute tests, set the `APPLITOOLS_API_KEY` environment variable
to your [account's API key](https://applitools.com/tutorials/getting-started/retrieve-api-key).

* Note: If you are not using the Eyes public cloud, you will need to update the `serverUrl` to your Eyes server URL in the **applitools.config.js** configuration file or set via an `APPLITOOLS_SERVER_URL` environment variable. See our [documentation](https://applitools.com/tutorials/sdks/cypress/advanced#available-configuration-properties) for more information on these settings.

Then, to open the Cypress window for launching tests, run:

```
npx cypress open
```

If you want to run tests directly from the command line, run this instead:

```
npx cypress run
```

**For full instructions on running this project, take our
[Cypress JavaScript tutorial](https://applitools.com/tutorials/sdks/cypress/quickstart)!**
