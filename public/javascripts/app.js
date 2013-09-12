var brewingTools = angular.module('BrewingTools', ['ngResource', 'kendo.directives', 'BrewingTools.controllers', 'BrewingTools.controllers.recipe', 'BrewingTools.factories'])
	.run(function($rootScope, $location) {
		$rootScope.dataHops = new kendo.data.DataSource({
	        transport: {
	          read: '/rest/hops'
	        },
	        schema: {
	          model: { id: 'id' }
	        },
	        sort: {
	          field: 'name',
	          dir: 'asc'
	        }
    	});
	    $rootScope.roundNumber = function(number, places) {
	    	return (Math.round(number * 100) / 100).toFixed(places);
	    };
	    $rootScope.navigate = function(url) {
	    	$location.path(url);
	    }
	})
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/abv', {
		      controller: 'AbvController',
		      templateUrl: '/assets/partial/abv.html'
		    }).
		    when('/', {
		      controller: 'AboutController',
		      templateUrl: '/assets/partial/about.html'
		    }).
		    when('/recipes', {
		      controller: 'RecipeListCtrl',
		      templateUrl: '/assets/partial/recipeList.html'
		    }).
		    when('/recipes/:recipeId', {
		      controller: 'RecipeController',
		      templateUrl: '/assets/partial/recipe.html'
		    }).
		    otherwise({
		      redirectTo: '/'
		    });

  }]);