var express = require('express');
var app = express.Router();
var Movie2=require('../model/movie');//impoting schema here


app.post('/favmovie',function(req,res)//post methode to add movies to db
{
  var Mov=new Movie2();
  Mov.Title=req.body.Title;
  Mov.Year=req.body.Year;
  Mov.Poster=req.body.Poster;
  Mov.imdbID=req.body.imdbID;
  Mov.save(function(err){
             if(err){
                 res.send(err);
                   }
             else{
                  res.send('movie created');
            }
      });
  });


app.get('/getMovies',function(req,res,next)//sending json from db
{
  Movie2.find({},function(err,docs){
    res.json(docs);
  });
});


app.delete('/delete',function(req,res,next)//delete movies
{
Movie2.findOneAndRemove({ imdbID: req.body.imdbID }, function(err) {
  if (err) {
    res.send(err);

  }
  else{
  // we have deleted the movie
  res.send("movie deleted");
  //res.send({redirect: '/getMovies'});
}
 })
});


app.put('/update',function(req,res,next)//updating
{

   Movie2.findOneAndUpdate({imdbID: req.body.imdbID }, { Title: req.body.t}, function(err, docs) {
  if (err) throw err;
  // we have the updated movie returned to us
  res.send("movie updated");
  res.json(docs);
});
});


module.exports = app;
