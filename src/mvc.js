var mvcFramework = {
	$document: $(document),
	
	components: {
		controllers: {},
		views: {}
	},
	
	bootstrap: function() {
		this.initPageControllers();
	},
	
	initPageControllers: function() {
		var controllers = this.components.controllers;
		
		this.$document.find('.js-controller').each(function() {
			var $this = $(this),
				controllerInitFn = controllers[$this.data('controller')];
			
			controllerInitFn(new ControllerContext($this));
		})
	},
	
	controller: function(name, initControllerFunction) {
		this.components.controllers[name] = initControllerFunction;
	},
	
	view: function(name, renderViewFunction) {
		this.components.views[name] = renderViewFunction;
	}
};


function ControllerContext($element) {
	this.$element = $element;
}

ControllerContext.prototype = {
	renderView: function(name, viewModel) {
		var renderViewFn = mvcFramework.components.views[name];
			
		return renderViewFn(this.$element, viewModel);
	}
}

// Check if it was included as CommonJS module
if (typeof module !== 'undefined' && module.exports) {
	module.exports = mvcFramework;
}


