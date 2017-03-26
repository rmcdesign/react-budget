var uuid = require('node-uuid');

module.exports = {
    setItems: function(items) {
        if(Array.isArray(items)) {
            localStorage.setItem('items', JSON.stringify(items));
            return items;
        }
    },
    getItems: function() {

        var itemsStr = localStorage.getItem('items');
        var items = [];

        try {
            items = JSON.parse(itemsStr);
        } catch (e) {

        }

        if(Array.isArray(items)) {
            return items;
        } else {
            return [];
        }
    }
};