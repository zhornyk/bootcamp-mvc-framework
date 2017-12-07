mvcFramework.controller('TodosController', function(controllerContext) {
	function showTodos() {
		var todos = todosService.getAll();
		
		controllerContext.renderView('TodosList', {
			todos: todos
		});
	}
	
	function addTodo() {
		var todoTitle = controllerContext.$element.find('.todo-title').val();
		
		if (todosUtils.isTitleValid(todoTitle)) {
			var todo = new Todo(todoTitle);
		
			todosService.add(todo);
			
			controllerContext.renderView('AddTodo', {
				todo: todo
			});
		} else {
			controllerContext.renderView('AddTodoError');
		}
	}
	
	controllerContext.$element.on('click', '.add-todo', addTodo);
	
	showTodos();
});