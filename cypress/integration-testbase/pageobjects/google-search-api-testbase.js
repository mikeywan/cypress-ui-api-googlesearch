export class GoogleSearchAPIPage {
    api = {
        NormalSearch: Cypress.env('BACKEND_URL') + '/webhp?#q='
    }

    constructor() {
    }

    input_keyword = 'input[name=q]';

    requestCurrencyRates(keyword) {
        cy.request(this.api.NormalSearch + keyword).then((response) => {
            expect(response.status).to.eq(200);
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
            this.verifyCurrencyConverterAppearsInTheResponseBody(response.body);
        });        
    }

    requestWeather(keyword) {
        cy.request(this.api.NormalSearch + keyword).then((response) => {
            expect(response.status).to.eq(200);
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
            this.verifyMetServiceAppearsInTheResponseBody(response.body);
        });
    }

    requestMap(keyword) {
        cy.request(this.api.NormalSearch + keyword).then((response) => {
            expect(response.status).to.eq(200);
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
            this.verifyGoogleMapAppearsInTheResponseBody(response.body);
        });
    }

    verifyGoogleMapAppearsInTheResponseBody(responseBody) {
        // TODO:
    }

    verifyCurrencyConverterAppearsInTheResponseBody(responseBody) {
        // TODO:
    }

    verifyMetServiceAppearsInTheResponseBody(responseBody) {
        // TODO:
    }
}