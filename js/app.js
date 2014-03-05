	App = Ember.Application.create();

	App.Router.map(function() {
	  // put your routes here
	});

	App.IndexRoute = Ember.Route.extend({
	  model: function() {
	    return ['red', 'yellow', 'blue'];
	  }
	});

	I18n.translations = {
	  en: {
	    hello: 'hello'
	  },

	  zh: {
	    hello: '你好'
	  }
	};

	I18n.locale = 'zh';	// 使用

	Ember.Handlebars.registerHelper('i18n', function(property, options) {
	  var params = options.hash,
	      self = this;

	  // Support variable interpolation for our string
	  Object.keys(params).forEach(function (key) {
	    params[key] = Em.Handlebars.get(self, params[key], options);
	  });

	  return I18n.t(property, params);
	});