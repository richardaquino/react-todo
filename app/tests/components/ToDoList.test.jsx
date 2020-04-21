var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUltils = require('react-addons-test-utils');

var ToDoList = require('ToDoList');
var ToDo = require('ToDo');

describe('ToDoList', () => {

    it('should-exist', () => {

        expect(ToDoList).toExist();
    });

    it('should render one ToDo component for each todo item', () => {
        var todos = [{
            id: 1,
            text: 'Do something'
        },
        {
            id: 2,
            text: 'Check mail'
        }];

        var todoList = TestUltils.renderIntoDocument(<ToDoList todos={todos} />);
        var todosComponents = TestUltils.scryRenderedComponentsWithType(todoList, ToDo);

        expect(todosComponents.length).toBe(todos.length);
    });
});