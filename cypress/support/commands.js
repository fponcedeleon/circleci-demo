// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// Cypress.Commands.add('login', () => {
//     const loginUrl = Cypress.env("salesforce").loginUrl
//     const username = Cypress.env("salesforce").username
//     const password = Cypress.env("salesforce").password
//     cy.visit('/')
//     cy.get('form');
//     cy.get('input[name="username"]')
//         .type("federico.poncedeleon@nimacloud.com.production")
//     cy.get('input[name="pw"]')
//         .type("nimacloud030619")

//     cy.get('form[name="login"]').submit();

//     // cy.request(`${loginUrl}/?un=${username}&pw=${password}`)
//     //     .then(() => {
//     //       cy.visit('https://demo-circleci-dev-ed.lightning.force.com/')
//     //     })
// })

//  Cypress.Commands.add('createAccount', (obj) => {
//     cy.task('salesforceCreate', ({objectType: 'Account', object: obj}))
//  })
