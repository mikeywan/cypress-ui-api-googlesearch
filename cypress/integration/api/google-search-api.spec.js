import { GoogleSearchAPIPage } from "../../integration-testbase/pageobjects/google-search-api-testbase";
context('Google Search', () => {
  var _googleSearchAPIPage;

  before(() => {
    _googleSearchAPIPage = new GoogleSearchAPIPage();
  });

  beforeEach(() => {
    cy.log("*** ***These tests are designed to pass searching of google api*** ***");
  })

  it('google search api - currency rates', () => {
    _googleSearchAPIPage.requestCurrencyRates("currency rates");
  })

  it('google search api - weather', () => {
    _googleSearchAPIPage.requestWeather("weather");
  })

  it('google search api - map', () => {
    _googleSearchAPIPage.requestMap("map");
  })

  after(() => {
  });
})
