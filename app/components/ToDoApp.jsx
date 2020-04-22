var React = require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');

var ToDoApp = React.createClass({
    getInitialState: function() {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Walk the Dog'
                }, 
                {
                    id: 2,
                    text: 'Clean the yard'
                }, 
                {
                    id: 3,
                    text: 'Wash the Dishes'
                },
                , 
                {
                    id: 4,
                    text: 'Create an Application'
                }
            ]
        };
    },
    handleAddToDo: function(text) {
        alert('New To Do: ' + text);
    }, 
    render: function() {
        var {todos} = this.state;

        return (
            <div>
                <ToDoList todos={todos} />
                <AddToDo onAddToDo={this.handleAddToDo} />
            </div>
        ) 
    }

});

module.exports = ToDoApp;