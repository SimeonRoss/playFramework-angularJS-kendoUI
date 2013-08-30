var brewingTools = angular.module('BrewingTools', ['ngResource', 'kendo.directives', 'BrewingTools.controllers', 'BrewingTools.controllers.recipe', 'BrewingTools.factories'])
						.run(function($rootScope) {
							$rootScope.dataHops = new kendo.data.DataSource({
						      transport: {
						        read: "/assets/data/hops.json"
						      },
						      schema: {
						        model: { id: "id" }
						      }
						    });
						    $rootScope.roundNumber = function(number, places) {
						    	return (Math.round(number * 100) / 100).toFixed(places);
						    }
						})
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
							    when('/recipe', {
							      controller: 'RecipeController',
							      templateUrl: '/assets/partial/recipe.html'
							    }).
							    otherwise({
							      redirectTo: '/'
							    });
  }]);