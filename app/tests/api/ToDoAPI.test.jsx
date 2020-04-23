var expect = require('expect');

var ToDoAPI = require('ToDoAPI');

describe('ToDoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('toDos');
    })
    it('should-exist', () => {
        expect(ToDoAPI).toExist();
    });

    describe('setToDos', () => {
        it('should set valid To Dos value', () => {
            var toDos = [{
                id: 35,
                text: 'Test All Features',
                completed: true
            }];
            ToDoAPI.setToDos(toDos);

            var toDosData = JSON.parse(localStorage.getItem('toDos'));

            expect(toDosData).toEqual(toDos);
        });

        it('should not set invalid To Dos value', () => {
            var badToDos = {name: 'Bad'};
            ToDoAPI.setToDos(badToDos);

            expect(localStorage.getItem('toDos')).toBe(null);

        });

    });

    describe('getToDos', () => {
        it('should return empty array for bad localStorage value', () => {
            var toDosData = ToDoAPI.getToDos();
            expect(toDosData).toEqual([]);

        });

        it('should return To Dos data in for valid localStorage value', () => {
            var toDos = [{
                id: 45,
                text: 'Test All Features',
                completed: true
            }];
            localStorage.setItem('toDos', JSON.stringify(toDos));
            var toDosData = ToDoAPI.getToDos();

            expect(toDosData).toEqual(toDos);
        });
    });

});