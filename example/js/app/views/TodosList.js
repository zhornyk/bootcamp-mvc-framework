mvcFramework.view('TodosList', function($element, viewModel) {
	var todosHtml = viewModel.todos.map(function(todo) {
		return '<div>' + todo.title + '</div>';
	});
	
	$element.find('.todos-list').html(todosHtml.join(''));
});