var brewingTools = angular.module('BrewingTools', ['ngResource', 'kendo.directives', 'BrewingTools.controllers', 'BrewingTools.factories'])
						.config(['$routeProvider', function($routeProvider) {
							$routeProvider.
								when('/abv', {
							      controller: 'AbvController',
							      templateUrl: '/assets/partial/abv.html'
							    }).
							    when('/ibu', {
							    	controller: 'IbuController',
							    	templateUrl: '/assets/partial/ibu.html'
							    }).
							    when('/ibuRecipe', {
							    	controller: 'IbuRecipeController',
							    	templateUrl: '/assets/partial/ibuRecipe.html'
							    }).
							    when('/', {
							      controller: 'AboutController',
							      templateUrl: '/assets/partial/about.html'
							    }).
							    otherwise({
							      redirectTo: '/'
							    });
  }]);