export class GoogleSearchAPIPage {
    api_key = atob(Cypress.config('api-key'));

    api = {
        NormalSearch: Cypress.env('BACKEND_URL') + '/customsearch/v1?key=' + this.api_key + '&cx='
    }

    constructor() {
    }

    input_keyword = 'input[name=q]';

    requestCurrencyRates(keyword) {
        cy.request(this.api.NormalSearch + Cypress.config('currency-rates-search-engine-id') + '&q=' + keyword).then((response) => {
            expect(response.status).to.eq(200);
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
            this.verifyCurrencyConverterAppearsInTheResponseBody(response.body);
        });
    }

    requestWeather(keyword) {
        cy.request(this.api.NormalSearch + Cypress.config('weather-search-engine-id') + '&q=' + keyword).then((response) => {
            expect(response.status).to.eq(200);
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
            this.verifyMetServiceAppearsInTheResponseBody(response.body);
        });
    }

    requestMap(keyword) {
        cy.request(this.api.NormalSearch + Cypress.config('map-search-engine-id') + '&q=' + keyword).then((response) => {
            expect(response.status).to.eq(200);
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
            this.verifyGoogleMapAppearsInTheResponseBody(response.body);
        });
    }

    verifyGoogleMapAppearsInTheResponseBody(responseBody) {
        expect(responseBody.items[0].title).to.include('Google Maps');
    }

    verifyCurrencyConverterAppearsInTheResponseBody(responseBody) {
        expect(responseBody.items[0].htmlTitle).to.include('Currency Converter');
    }

    verifyMetServiceAppearsInTheResponseBody(responseBody) {
        expect(responseBody.items[0].displayLink).to.include('metservice');
    }
}