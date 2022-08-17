# Applitools Example: Cypress JavaScript with the Ultrafast Grid

This is the example project for the [Cypress JavaScript tutorial](https://applitools.com/tutorials/cypress.html).
It shows how to start automating visual tests
with [Applitools Eyes](https://applitools.com/platform/eyes/)
and the [Ultrafast Grid](https://applitools.com/platform/ultrafast-grid/)
using [Cypress](https://www.cypress.io/) in JavaScript.

It uses:

* [JavaScript](https://www.javascript.com/) as the programming language
* [Cypress](https://www.cypress.io/) for browser automation
* [Google Chrome](https://www.google.com/chrome/downloads/) as the local browser for testing
* [npm](https://www.npmjs.com/) for dependency management
* [Applitools Eyes](https://applitools.com/platform/eyes/) for visual testing
* [Applitools Ultrafast Grid](https://applitools.com/platform/ultrafast-grid/) for cross-browser execution

To run this example project, you'll need:

1. An [Applitools account](https://auth.applitools.com/users/register), which you can register for free
2. [Node.js](https://nodejs.org/en/download/) version 16 or higher
3. A good JavaScript editor like [Visual Studio Code](https://code.visualstudio.com/docs/languages/javascript)
4. Up-to-date versions of the following browsers:
   * [Google Chrome](https://www.google.com/chrome/)
   * [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)
   * [Microsoft Edge](https://www.microsoft.com/en-us/edge)

To install project dependencies and set up Applitools Eyes, run:

```
npm install
npx eyes-setup
```

The Applitools config file is [`applitools.config.js`](applitools.config.js).
The main test spec is [`acme-bank.spec.js`](cypress/integration/acme-bank.spec.js).

To execute tests, set the `APPLITOOLS_API_KEY` environment variable
to your [account's API key](https://applitools.com/tutorials/getting-started/setting-up-your-environment.html).

Then, to open the Cypress window for launching tests, run:

```
npx cypress open
```

If you want to run tests directly from the command line, run this instead:

```
npx cypress run
```

**For full instructions on running this project, take our
[Cypress JavaScript tutorial](https://applitools.com/tutorials/cypress.html)!**