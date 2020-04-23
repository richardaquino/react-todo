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

    describe('filterToDos', () => {
        var toDos = [{
            id: 10,
            text: 'Sample to Dos',
            completed: true
        }, {
            id: 20,
            text: 'Another to Dos Too',
            completed: true
        }, {
            id: 30,
            text: 'Sample to Dos Again',
            completed: false
        }];

        it('should return all items if showCompleted is true', () => {
            var filteredToDos = ToDoAPI.filterToDos(toDos, true, '');
            expect(filteredToDos.length).toBe(3);

        });

        it('should return non-completed items if showCompleted is false', () => {
            var filteredToDos = ToDoAPI.filterToDos(toDos, false, '');

            expect(filteredToDos.length).toBe(1);

        });

        it('should sort by completed status', () => {
            var filteredToDos = ToDoAPI.filterToDos(toDos, true, '');

            expect(filteredToDos[0].completed).toBe(false);
        });


        it('should filter To Dos by searchText', () => {
            var filteredToDos = ToDoAPI.filterToDos(toDos, true, 'sample');
            expect(filteredToDos.length).toBe(2);

        });

        it('should return All To Dos if searchText is Empty', () => {
            var filteredToDos = ToDoAPI.filterToDos(toDos, true, '');
            expect(filteredToDos.length).toBe(3);

        });
    });
});