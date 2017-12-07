var todosService = {
	todos: [
		new Todo('first todo'),
		new Todo('second todo'),
		new Todo('third todo')	
	],
	
	getAll: function() {
		return this.todos;
	},
	
	add: function (todo) {
		this.todos.push(todo);
    },
    
    remove: function (index) {
        this.todos.splice(index, 1);
    }
};