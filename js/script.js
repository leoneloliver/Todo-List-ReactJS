var TodoList = React.createClass({
  getInitialState:function(){
    return{
      list:[]
    }
  },
  addTodo:function(){
    var todo = $("#addedTodo").val();
    if(todo && todo.length > 0){
      this.state.list.push(todo);
      console.log("Inserting: "+todo);
      this.dynamicEntry();
      return this.setState({list:this.state.list});  
    }return true;
  },
  dynamicEntry:function(){
    $("#addedTodo").val("");
  },
  render:function(){
    return(
      <div id="todolist">
        <div id="addtodo_area">
          <h6>My Todo List</h6>
          <input type="text" id="addedTodo" placeholder="Type something nice =)"/>
          <button className="btn-floating btn-large waves-effect waves-light " onClick={this.addTodo}>
            <i className="fa fa-plus" arial-hidden="true"></i>
          </button>
        </div>
        <div id="displaytodo_list">
          <p id="today">TODAY</p>
          <ul>
          {this.state.list.map(function(todo){
              return <li>- {todo} </li>
          })}
          </ul>
        </div>
        <div className="rights">Made with&nbsp;&nbsp;<i className="fa fa-heart-o" aria-hidden="true"></i>&nbsp;&nbsp;by Leonel</div>
      </div>
      
    )
  }
});
ReactDOM.render(<TodoList/>,document.getElementById("space"))
