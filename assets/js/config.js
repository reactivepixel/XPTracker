var App = angular.module('AppCore', ['ngRoute', 'firebase'])
	
	.config(['$routeProvider', function (r) {

		//Routes
		r
			// Index
			.when('/', {
				templateUrl: 	'assets/views/core.tpl',
				controller: 	'CtrlStudent'
			})

			// Student Detail Page
			.when('/student/:name', {
				templateUrl: 	'assets/views/detail.tpl',
				controller: 	'CtrlStudent'
			})


	}])