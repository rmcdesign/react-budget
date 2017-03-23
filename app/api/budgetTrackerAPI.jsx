var uuid = require('node-uuid');
var $ = require('jQuery');

module.exports = {
    setItems: function(items) {
        if($.isArray(items)) {
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

        if($.isArray(items)) {
            return items;
        } else {
            return [];
        }
    }
};