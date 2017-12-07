var todosUtils = {
	isTitleValid: function(title) {
		return /\w{5,}/.test(title);
	}
}