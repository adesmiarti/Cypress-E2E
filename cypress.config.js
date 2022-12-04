// const { defineConfig } = require('cypress')

const {defineConfig} = require('cypress')
module.exports = defineConfig({
    e2e: {
        baseUrl : 'https://parabank.parasoft.com/parabank/index.htm',
        specPattern : "cypress/support/e2e",
        supportFile : false,
    },
    env:{
        username : "my-skill-12345",
        password : "12345"
    }
})