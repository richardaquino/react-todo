var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUltils = require('react-addons-test-utils');

var Search = require('Search');

describe('Search', () => {

    it('should-exist', () => {

        expect(Search).toExist();
    });

    it('should call onSearch with entered input text', () => {
        var searchText = 'Cat';
        var spy = expect.createSpy();
        var todoSearch = TestUltils.renderIntoDocument(<Search onSearch={spy} />);

        todoSearch.refs.searchText.value = searchText;
        TestUltils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false, 'Cat');

    });

    it('should call onSearch with proper checked value', () => {
        var spy = expect.createSpy();
        var todoSearch = TestUltils.renderIntoDocument(<Search onSearch={spy} />);

        todoSearch.refs.showCompleted.checked = true;
        TestUltils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true, '');
        
    });  


});