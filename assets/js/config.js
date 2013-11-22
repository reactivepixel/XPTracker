var App = angular.module('AppCore', ['ngRoute'])
	
	.config(['$routeProvider', function (r) {

		//Routes
		r
			// Index
			.when('/', {
				templateUrl: 	'assets/views/core.tpl',
				controller: 	'CtrlCore'
			})

			// Student Detail Page
			.when('/student/:name', {
				templateUrl: 	'assets/views/detail.tpl',
				controller: 	'CtrlStudent'
			})


	}])