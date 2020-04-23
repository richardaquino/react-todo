var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

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
                todo.completedAt = todo.completed ? moment().unix() : undefined;
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
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
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
        var {todos, showCompleted, searchText} = this.state;
        var filterToDos = ToDoAPI.filterToDos(todos, showCompleted, searchText);

        return (
           <div className="container__main">
               <h1 className="page-title">To Do App</h1>
               <h5 className="page-title__author">by Richard Aquino</h5>
               <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div>
                            <div className="container">
                                <Search onSearch={this.handleSearch} />
                                <ToDoList todos={filterToDos} onToggle={this.handleToggle}/>
                                <AddToDo onAddToDo={this.handleAddToDo} />
                            </div>
                        </div>
                    </div>
               </div>
           </div>
        ) 
    }

});

module.exports = ToDoApp;