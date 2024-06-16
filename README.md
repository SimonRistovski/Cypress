# Cypress Testing

Cypress is an automation web testing tool that's fast, easy, and reliable for testing the things (web components) that run in a browser. It's an open-source test automation framework for testing JavaScript web and enables you to perform unit, integration, and end-to-end tests.
## Installation needed
-> Open the project in VS Code. You can do that by opening the folder of your project, right click and select open command prompt here, type code . and then enter.

-> When the project is open, open the terminal and write 
npm init -y
and then 
npm install cypress --save-dev
and finally 
npx cypress install


## Usage
In this project there is cypress/integration folder where all the tests are written. 

to open the cypress test runner
npx cypress open

or to test specific file go 

npx cypress run --spec "cypress/integration/forgot.spec.js"
"cypress/integration/index.spec.js"
"cypress/integration/login.spec.js"
"cypress/integration/register.spec.js"
"cypress/integration/reset.spec.js"
 


## Authors
Simon Ristovski ID: 128470