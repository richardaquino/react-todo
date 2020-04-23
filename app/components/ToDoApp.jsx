var React = require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var Search = require('Search');
var uuid = require('node-uuid');

var ToDoApp = React.createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the Dog'
                }, 
                {
                    id: uuid(),
                    text: 'Clean the yard'
                }, 
                {
                    id: uuid(),
                    text: 'Wash the Dishes'
                },
                {
                    id: uuid(),
                    text: 'Create an Application'
                }
            ]
        };
    },
    handleAddToDo: function(text) {
       this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text
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
                <ToDoList todos={todos} />
                <AddToDo onAddToDo={this.handleAddToDo} />
            </div>
        ) 
    }

});

module.exports = ToDoApp;