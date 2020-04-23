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
        expect(toDoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('should Toggle completed value when handleToggle called', () => {
        var toDoData = {
            id: 17,
            text: 'Test Features',
            completed: false,
            createdAt: 0,
            completedAt: undefined
        };

        var toDoApp = TestUltils.renderIntoDocument(<ToDoApp />);
        toDoApp.setState({todos: [toDoData]});

        expect(toDoApp.state.todos[0].completed).toBe(false);
        toDoApp.handleToggle(17);
        expect(toDoApp.state.todos[0].completed).toBe(true);
        expect(toDoApp.state.todos[0].completedAt).toBeA('number');

    });

    it('should Toggle To Do from completed to incomplete', () => {
        var toDoData = {
            id: 17,
            text: 'Test Features',
            completed: true,
            createdAt: 0,
            completedAt: undefined
        };

        var toDoApp = TestUltils.renderIntoDocument(<ToDoApp />);
        toDoApp.setState({todos: [toDoData]});

        expect(toDoApp.state.todos[0].completed).toBe(true);
        toDoApp.handleToggle(17);
        expect(toDoApp.state.todos[0].completed).toBe(false);
        expect(toDoApp.state.todos[0].completedAt).toNotExist();

    });

});