/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// /**
//  * @type {Cypress.PluginConfig}
//  */
// module.exports = (on, config) => {
//   // `on` is used to hook into various events Cypress emits
//   // `config` is the resolved Cypress config
// }

const jsforce = require('jsforce');
/**
*
* @param {string} objectType Type of the object to be created, e.g., 'Account', 'Opportunity', 'Product2'
* @param {*} object Salesforce object specificification, e.g., { Name: 'Test Account', Phone: '0123456789' }
* @param {*} config
*/
function createObject(objectType, object, config) {
  const username = config.env.salesforce.username
  const password = config.env.salesforce.password
                + config.env.salesforce.accessToken
  const loginUrl = config.env.salesforce.loginUrl
  return new Promise((resolve, reject) => {
    var conn = new jsforce.Connection({loginUrl: loginUrl})
    conn.login(username, password, err => {
      if (err) reject(err)
      conn.sobject(objectType).create(object, (err, ret) => {
        if (err || !ret.success) { return console.error(err, ret) }
        console.log(`Created ${objectType} with id : ${ret.id}`)
        return resolve(ret)
      })
    })
  })
}
module.exports = (on, config) => {
   on('task', {
      salesforceCreate ({objectType, object}) {
         return createObject(objectType, object, config)
      },
      // Add new tasks created here
   })
}