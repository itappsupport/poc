var expect = require("chai").expect;
var request = require("request");

describe("HelloWorld API", function() {

  describe("Helloworld", function() {

    var url = "http://localhost:3000/";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
});
});