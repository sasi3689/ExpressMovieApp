var React =require('react');

var Home=React.createClass({
  render:function(){
    return(
            <div className="container" id="about">
               <h2>MovieBox Home Page:</h2>
                <a className="btn btn-default" role="button">Go to Movie box for movies</a>
           </div>
    )
  }
});
module.exports=Home;
