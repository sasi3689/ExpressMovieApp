var React=require("react");
var ReactDOM=require("react-dom")
var Display=require("./Display.js")

var Content=React.createClass({

     render:function(){
      console.log(this.props.data);
          var result = this.props.data.map(function(search) {
        return (
          <Display  search1={search}/>
        );
      });
       return(
           <div>
               <h3>movies list SAIGURUPOONDISWAMI</h3>
               {result}
           </div>
       );
   }
})
module.exports=Content;
