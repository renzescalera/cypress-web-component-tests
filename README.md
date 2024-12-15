#### Folder Structure

1. **cypress/e2e**: Contains the spec files written in Javascript for the e2e tests of the given task.

2. **cypress/fixtures**: Storage of the static data files which is in JSON format. But in this challenge, this is not currently used.

3. **cypress/screenshots**: This is where the screenshots are stored for the task - visual-comparison.cy.js e2e tests.

4. **cypress/support**: This contains the important commands and functions for the e2e tests

   **cypress/commands**: This contains the generic reusable cypress custom commands. In addition, the commands that are written here are used in all e2e tests.

   **cypress/page-objects**: This contains the selectors and functions that are used in the e2e tests. Each e2e tests has its own page-objects file. It also contains the PageIndex.js file which serves as a centralized entry point for importing, exporting and creating instances of the page-objects.

#### Other Global Files

1. **cypress.config.js**: This is the main configuration file in Cypress. It defines global settings and behavior for tests, such as: Base URL for test runs, viewportWidth and viewportHeight that defines the screen size in the tests.

2. **cypress.env.json**: This file is used to store environment-specific variables, such as username and password which is used in authentication.cy.js e2e tests.

#### How to run this Cypress tests

1. Install Node.js - Download and install Node.js from https://nodejs.org. - After installation, verify that Node.js and npm are installed by running these commands in your terminal:
   `node -v`
   `npm -v`

2. Navigate to the Project Directory - Open a terminal or command prompt, and navigate to the folder where you cloned this repository. - Example:
   `cd C:\Users\your-computer\your-folder\Renz_Storyteq_Test_Engineer_Tech_Challenge`

3. Install Dependencies - Once inside the project folder, install all dependencies (including Cypress) by running:
   `npm install` - Note: Cypress is already listed in devDependencies in the package.json file, so you don’t need to install it manually with npm install cypress --save-dev.

4. Install Cypress plugin for snapshot for visual-comparison tests by running:
   `npm install --save-dev cypress-image-snapshot`

5. Run the test - To run the test you can simply run the below command in the command prompt:
   `npx cypress open`

   OR

   Run the below command to run the test in headless mode:
   `npx cypress run`
