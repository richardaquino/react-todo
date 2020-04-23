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

    }

}