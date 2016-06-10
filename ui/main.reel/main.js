/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },

    handleNewTodoAction: {
        value: function (event) {
            var newTodo = { title: event.target.value };
            this.todoController.add(newTodo);
            event.target.value = null;
        }
    }

});
