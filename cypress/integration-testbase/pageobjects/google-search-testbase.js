export class GoogleSearchPage {
    constructor() {
    }

    input_keyword = 'input[name=q]';

    searchWithKeyword(keyword){
        cy.get(this.input_keyword).type(keyword + "\n");
    }
    
    navigateToHomePage(){
        cy.visit(Cypress.env('FRONTEND_URL'))
    }

    verifyGoogleMapAppearsInTheFirstNode(){
        cy.get("div > cite").first().contains("www.google.co.nz");
        cy.get("div > cite > span").first().contains("maps");
    }

    verifyCurrencyConverterAppearsInTheFirstNode(){
        const runout = ['currency-converter', 'www.bnz.co.nz']
        const regex = new RegExp(`${runout.join('|')}`, 'g')
        cy.get("div > cite").first().contains(regex);
    }

    verifyMetServiceAppearsInTheFirstNode(){
        cy.get("div > cite").first().contains("www.metservice.com");
    }
}
