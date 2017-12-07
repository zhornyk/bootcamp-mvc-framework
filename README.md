# JS Bootcamp simple MVC framework

This lightweight MVC framework used only for learning purposes. 

# Features

  - Attach to DOM element controller by adding class "js-controller"
  - Controller that will be used defined in data attribute "data-controller"
  - Provide interface for defining controllers and views

## Examples

Simple TODO List app written using this framework can be found in folder examples.

### Controller

```javascript
mvcFramework.controller('TodosController', function(controllerContext) {

	controllerContext.$element.on('click', '.add-todo', function () {
	     // do something here
	});
	
});
```

### View

```javascript
mvcFramework.view('AddTodo', function($element, data) {
	var todoHtml = '<div>' + data.todo.title + '</div>';
	
	$element.find('.todos-list').append(todoHtml);
});
```

### Installation

Install npm package and save as dependency

```sh
$ npm install bootcamp-mvc-framework --save
```
In code include it for views
```javascript
const mvcFramework = require('bootcamp-mvc-framework');

mvcFramework.view('AddTodo', function($element, data) {
    // view code here
});
```
for controllers
```javascript
const mvcFramework = require('bootcamp-mvc-framework');

// Init view
require('../views/AddTodo');

mvcFramework.controller('TodosController', function(controllerContext) {
    // controller code here
});
```
and for main app.js to bootstrap framework
```javascript
const mvcFramework = require('bootcamp-mvc-framework');

// Init controllers
require('./controllers/TodosController');

document.addEventListener("DOMContentLoaded", function() {
	mvcFramework.bootstrap();
});
```