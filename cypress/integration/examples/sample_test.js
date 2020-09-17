describe("Form test", () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('form');
        cy.get('input[name="username"]')
            .type("federico.poncedeleon@nimacloud.com.production")
        cy.get('input[name="pw"]')
            .type("nimacloud030619")

        cy.get('form[name="login"]').submit();
    })

    it("Can fill the form", () => {
        
        cy.visit("/");
        // cy.get("form");
    
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
