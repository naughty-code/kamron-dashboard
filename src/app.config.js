angular.module('app')
	.config(['$locationProvider', '$routeProvider', '$mdThemingProvider',
		function config($locationProvider, $routeProvider, $mdThemingProvider) {
		$locationProvider.hashPrefix('!');
		$mdThemingProvider.theme('default').primaryPalette('blue-grey');

		$routeProvider.
			when('/', {
				controller: "singleTableController",
				templateUrl: "single-table/single-table.template.html"
			}).
			when('/:view', {
				controller: "singleTableController",
				templateUrl: "single-table/single-table.template.html"
			}).
			otherwise({
				templateUrl: "404.html"
			});
		}
	]);