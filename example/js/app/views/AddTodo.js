mvcFramework.view('AddTodo', function($element, viewModel) {
	var todoHtml = '<div>' + viewModel.todo.title + '</div>';
	
	$element.find('.todos-list').append(todoHtml);
	
	// clear error and title
	$element.find('.todo-title').val('');
	$element.find('.add-todo-error').remove();
	
});