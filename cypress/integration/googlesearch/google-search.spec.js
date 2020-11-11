import { GoogleSearchPage } from "../../integration-testbase/pageobjects/google-search-testbase";
context('Google Search', () => {
  var _googleSearchPage;

  before(() => {
    _googleSearchPage = new GoogleSearchPage();
  });

  beforeEach(() => {
    cy.log("*** ***These tests are designed to pass searching of google*** ***");
    _googleSearchPage.navigateToHomePage();
  });

  it('google search - currency rates', () => {
    _googleSearchPage.searchWithKeyword("currency rates");
    _googleSearchPage.verifyCurrencyConverterAppearsInTheFirstNode();
  });

  it('google search - weather', () => {
    _googleSearchPage.searchWithKeyword("weather");
    _googleSearchPage.verifyMetServiceAppearsInTheFirstNode();
  });

  it('google search - map', () => {
    _googleSearchPage.searchWithKeyword("map");
    _googleSearchPage.verifyGoogleMapAppearsInTheFirstNode();
  });

  after(() => {
  });
})
