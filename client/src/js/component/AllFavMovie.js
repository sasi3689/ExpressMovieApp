var React =require('react');
var Display=require('./Display.js');


var Allbatches=React.createClass({
  getInitialState: function(){
    return ({data:[]})
  },

  //showResult Method will set the state
  showResult: function(response) {
    this.setState({
      data: response
    });
  },

  //making ajax call to get data from server
  getDataFromServer:function(){
    $.ajax({
      type:"GET",
      dataType:"json",
      url:"http://localhost:8080/form/getMovies",
      success: function(response) {
        this.showResult(response);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
componentDidMount:function(){
  this.getDataFromServer();
 },

render:function(){
    console.log(this.state.data);
          var result = this.state.data.map(function(search){
          return (
          <Display search1={search} Ddata={this.showResult} />
       );
    });

    return(
     <div>
        <div className="head">
           <h2>all batches</h2>
         </div>
         {result}
     </div>
    )
  }
});
module.exports=AllBatches;
