//mocha gives us a suite for describing, running, and building tests, but it doesn't give us a way to check values. That is where we might want to consider using Chai.

//We can use "expect", "should", or "assert"
const expect = require('chai').expect;
//Load the file that we want to test against
const tools = require('../lib/tools');

const nock = require('nock');
//Describe methods are handy for organizing our tests into groups. Describes can be nested, we'll start with Tools because we're workign with the tools file.
describe("Tools", function() {
  //Then we'll describe sections within the Tools file, such as methods.
  describe("printName()", function() {
    //We can just use the it() statement to stub our tests. it() and test() do the same thing.
    //it("should print the last name first");

    it("should print the last name first", function() {
      var results = tools.printName({ first: "Allen", last: "Mackley" });
      expect(results).to.equal("Mackley, Allen");
    });

  });

  describe("loadWiki()", function() {
    //Don't fail the test until waiting at least 5 seconds (vs the default of 2 seconds).
    // this.timeout(5000);

    before(function() {
      //Create a mock using a fake nock server that requests this URL. This way, we don't actually have to rely on an internet connection or this Wikipedia page being up for our test to pass. Now, any code that requests this server location will go to our mocked server instead of the actual one. This will pass the test much faster than actually going out to Wikipedia and waiting for the response page.
      nock("https://en.wikipedia.org")
        .get("/wiki/Abraham_Lincoln")
        .reply(200, "Mock Abraham Lincoln Page");
    });
    //Adding "done" to the function, means that we need to call done in order to finish the test.
    it("Load Abraham Lincoln's Wikipedia page", done => {
      tools.loadWiki({ first: "Abraham", last: "Lincoln" }, html => {
        //Checks that html is defined
        expect(html).to.equal("Mock Abraham Lincoln Page");
        //Since this is an asychronous callback, we need to tell Mocha that the test is finished.
        done();
      });
    });

  });

});