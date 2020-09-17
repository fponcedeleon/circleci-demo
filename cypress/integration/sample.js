describe("Form test", () => {
    beforeEach(() => {
        cy.visit('https://demo-circleci-dev-ed.lightning.force.com')
        cy.get('input[name="username"]')
            .type("federico.poncedeleon@nimacloud.com.production")
        cy.get('input[name="pw"]')
            .type("test")

        // cy.wait(10000);
        // cy.get('form[name="login"]').submit();
        cy.url().should('include', 'demo')
    })

    it("Can fill the form", () => {
        
        // cy.visit("/");
        cy.get("form");
        cy.get('input[name="pw"]')
            .type("test")
        // cy.get('input[name="Name__c"]')
        //   .type("Molly")
        //   .should("have.value", "Molly");
    
        // cy.get('input[name="Email__c"]')
        //   .type("molly@dev.dev")
        //   .should("have.value", "molly@dev.dev");
    
        // cy.get("form").submit();
    });
});

// cy.createAccount({ Name: 'My Account #1' })
//     .then((newAccount) => {
//       cy.wrap(newAccount.id).as('newAccountId')
// })
