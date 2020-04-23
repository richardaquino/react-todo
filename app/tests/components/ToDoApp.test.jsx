var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUltils = require('react-addons-test-utils');

var ToDoApp = require('ToDoApp');

describe('ToDoApp', () => {

    it('should-exist', () => {

        expect(ToDoApp).toExist();
    });

    it('should add "To Do" to the "To Dos" state on handleAddToDo', () => {
        var toDoText = 'To Do Text';
        var toDoApp = TestUltils.renderIntoDocument(<ToDoApp />);

        toDoApp.setState({todos: []});
        toDoApp.handleAddToDo(toDoText);

        expect(toDoApp.state.todos[0].text).toBe(toDoText);

    });

});