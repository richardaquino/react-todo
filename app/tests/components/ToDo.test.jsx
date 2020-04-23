var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUltils = require('react-addons-test-utils');

var ToDo = require('ToDo');

describe('ToDo', () => {

    it('should-exist', () => {

        expect(ToDo).toExist();
    });

    it('should call onToggle prop with id onClick', () => {
        var toDoData = {
            id: 24,
            text: 'Test Features',
            completed: false
        };

        var spy = expect.createSpy();
        var toDo = TestUltils.renderIntoDocument(<ToDo {...toDoData} onToggle={spy} />);
        var $el = $(ReactDOM.findDOMNode(toDo));

        TestUltils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(24);

    });

});