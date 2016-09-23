var React=require('react')

var Display=React.createClass({
getInitialState:function(){
  return ({data:[],url:"http://localhost:8080/movie/favmovie"})
},
  CreateAjax:function()
  {
    $.ajax({
      url: this.state.url,
      dataType: 'json',
      type: 'POST',
      data: this.props.search1,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render:function(){

    return(
     <div className="container" id="movielist">
       <div className="content">
         <div className="row" >
            <div className="col-sm-3">
              <div className="thumbnail">
                <img src={this.props.search1.Poster} alt="image"/>
              </div>
            </div>
            <div className="col-sm-6">
            <div className="pannel">
              <div className="pannel-heading">
                <h3 className="pannel-title">
                  Movie Details
                </h3>
              </div>
              <div className="list-group">
                <div className="list-group-item">
                  <h4 className="list-group-item-heading">Movie Title :</h4>
                  <p className="list-group-item-text">
                  {this.props.search1.Title}
                  </p>
                </div>
                <div className="list-group-item">
                  <h4 className="list-group-item-heading">Year :</h4>
                  <p className="list-group-item-text">
                  {this.props.search1.Year}
                  </p>
                </div>
                <div className="list-group-item">
                  <h4 className="list-group-item-heading">ID :</h4>
                  <p className="list-group-item-text">
                    {this.props.search1.imdbID}
                  </p>
                </div>
              <button type="submit" className="btn btn-large btn-default" onClick={this.CreateAjax}>Add Movie</button>
              </div>
            </div>

            </div>
         </div>
      </div>
    </div>
    )

    }

})
module.exports=Display;
