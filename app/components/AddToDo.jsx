var React = require('react');

var AddToDo = React.createClass ({
    onTextSubmit: function (e) {
        e.preventDefault();
 
        var todoText = this.refs.todoText.value; 

       //this.props.onAddToDo(todoText);
       if(todoText.length > 0) {
           this.refs.todoText.value = '';
           this.props.onAddToDo(todoText);
       } else {
           this.refs.todoText.focus();
       }
    },

    render: function () {
        return (
            <div className="container__footer"> 
                <form ref="form" onSubmit={this.onTextSubmit}>
                    <input type="text" placeholder="What Do you Need to Do?"></input>
                    <button className="button expanded">Add To Do</button>
                </form>                
            </div>
        )
    }
});


module.exports = AddToDo;