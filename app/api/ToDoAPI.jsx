var $ = require('jquery');

module.exports = {
    setToDos: function (toDos) {
        if($.isArray(toDos)) {
            localStorage.setItem('toDos', JSON.stringify(toDos));
            return toDos;
        }

    },

    getToDos: function() {
        var StringToDos = localStorage.getItem('toDos');
        var toDos = [];

        try {
            toDos = JSON.parse(StringToDos);
        } catch(e) {

        }

        return $.isArray(toDos) ? toDos : [];

    },
    filterToDos: function(toDos, showCompleted, searchText) {
        var filteredToDos = toDos;

        //Filter by showCompleted
        filteredToDos = filteredToDos.filter((toDo) => {
            return !toDo.completed || showCompleted;

        });
        //Filter by searchText
        filteredToDos = filteredToDos.filter((toDo) => {
            var text = toDo.text.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });

        //Filter by non-Completed first
        filteredToDos.sort((a, b) => {
            if(!a.completed && b.completed) {
                return -1;
            } else if(a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });

        return filteredToDos; 
    }

}