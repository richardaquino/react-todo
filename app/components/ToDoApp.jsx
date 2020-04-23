var React = require('react');
var uuid = require('node-uuid');

var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var Search = require('Search');
var ToDoAPI = require('ToDoAPI');

var ToDoApp = React.createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: '',
            todos: ToDoAPI.getToDos()
        };
    },
    componentDidUpdate: function() {
        ToDoAPI.setToDos(this.state.todos);
    },
    handleToggle: function(id) {
        var updatedToDos = this.state.todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({todos: updatedToDos});
    },
    handleAddToDo: function(text) {
       this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
                }
                
            ]
       });
    }, 
    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function() {
        var {todos} = this.state;

        return (
            <div>
                <Search onSearch={this.handleSearch} />
                <ToDoList todos={todos} onToggle={this.handleToggle}/>
                <AddToDo onAddToDo={this.handleAddToDo} />
            </div>
        ) 
    }

});

module.exports = ToDoApp;