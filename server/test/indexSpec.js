var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,
supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8080");


describe("Testing /movie/favmovie Method", function(err){
it("should respond", function(done){
url
   .post("/movie/favmovie")
   .send({"Title":"Shirdi Sai","Year":"2012","Id": "tt2397561"})
   .expect(200)
   .end(function(err,res){
     res.text.should.be.equal("movie created");
     done();
   });

});
});

describe("Testing /movie/getMovies Method ", function(err){
it("should respond", function(done){
url
   .get("/movie/getMovies")
   .expect(200)
   .expect('Content-Type', /json/)
   .end(function(err,res){
     var myObj = JSON.parse(res.text);
     console.log(myObj);
     myObj[0].Title.should.be.equal("Shirdi Sai");
     done();
   });

});
});
describe("Testing /movie/update Method ", function(err){
it("should resopnd", function(done){
url
   .put("/movie/update")
   .expect(200)
   .end(function(err,res){
     res.text.should.be.equal("movie updated");
     done();
   });
});
});

describe("Testing /movie/delete Method ", function(err){
it("should resopnd", function(done){
 url
     .delete("/movie/delete")
     .expect(200)
     .end(function(err,res){
       res.text.should.be.equal("movie deleted");
       done();
     });
});
})
