var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUltils = require('react-addons-test-utils');

var AddToDo = require('AddToDo');

describe('AddToDo', () => {

    it('should-exist', () => {

        expect(AddToDo).toExist();
    });

    it('should call onAddToDo when input is a valid data', () => {
        var todoText = 'Check Mail';
        var spy = expect.createSpy();
        var addToDo = TestUltils.renderIntoDocument(<AddToDo onAddToDo={spy} />);
        var $el = $(ReactDOM.findDOMNode(addToDo));

        addToDo.refs.todoText.value = (todoText);
        TestUltils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(todoText);
    });

    it('should not call onAddToDo when input is invalid data', () => {
        var todoText = '';
        var spy = expect.createSpy();
        var addToDo = TestUltils.renderIntoDocument(<AddToDo onAddToDo={spy} />);
        var $el = $(ReactDOM.findDOMNode(addToDo));

        addToDo.refs.todoText.value = (todoText);
        TestUltils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

});