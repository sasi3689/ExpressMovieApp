var React=require('react');
var ReactDOM=require('react-dom');
var Display2=React.createClass({

  getInitialState: function(){
    return ({data1:[]},{id:"#"+this.props.search1.imdbID})
  },
  showResult: function(response) {
    this.setState({
      data1 : response
    });

    this.props.Ddata(this.state.data1);

  },
    CreateAjax2:function()
    {
      //this.props.s1data(this.props.search1.imdbID);
      $.ajax({
        url: "http://localhost:8080/movie/delete",
        dataType: 'json',
        type: 'DELETE',
        data: this.props.search1,
        success: function(response) {
          this.showResult(response);
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.state.url, status, err.toString());
        }.bind(this)
      });
    },

    CreateAjax:function()
     {
       var query = ReactDOM.findDOMNode(this.refs.query).value;
       this.props.search1.t=query;
       //this.props.s2data(this.props.search1.imdbID,query)
       $.ajax({
        url:"http://localhost:8080/movie/update",
        dataType: 'json',
        type: 'PUT',
        data: this.props.search1,
        success: function() {
          console.log("success");

        }.bind(this),
        error: function(xhr, status, err) {
          console.error(url1, status, err.toString());
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
            <div className="col-sm-9">
              <div className="list-group">
                <h3 className="list-group-item-heading">Movie Title :  {this.props.search1.Title}</h3>
                <h3 className="list-group-item-text">Year :  {this.props.search1.Year}</h3>
                <h3 className="list-group-item-text">Id :  {this.props.search1.imdbID}</h3>
                <button type="submit" className="btn btn-warning" onClick={this.CreateAjax2}>del</button>
                <a href={this.state.id} role="button"className="btn btn-warning" data-toggle="modal">Update</a>
                <div className="modal fade" id={this.props.search1.imdbID}>
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Update</h4>
                      </div>
                      <div className="modal-body">
                        <form className="form-horizontal">
                          <div className="form-group">
                            <label className="col-lg-2 control-label" id="inputName">Title</label>
                            <div className="col-lg-10">
                              <input className="form-control" id="inputName" placeholder={this.props.search1.Title} type="text" ref="query"/>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-lg-12">
                              <button className="btn btn-success pull-right" type="submit" onClick={this.CreateAjax}>Send</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
           </div>

        </div>
      </div>
    </div>
    )

    }

})
module.exports=Display2;
