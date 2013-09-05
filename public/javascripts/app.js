var brewingTools = angular.module('BrewingTools', ['ngResource', 'kendo.directives', 'BrewingTools.controllers', 'BrewingTools.controllers.recipe', 'BrewingTools.factories'])
	.run(function($rootScope, $location) {
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
	    };
	    $rootScope.getAsHtmlLink = function(text, link)
	    {
	    	return '<a href="' + link + '">' + text + '</a>';
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

// brewingTools.directive('kendolist', function() {		
// 	    return {
// 	        restrict: 'E',
// 	        replace: true,
// 	        scope:{source:'=source', temp: '=temp'},
// 	        template: '<div></div>',
// 	        link: function(scope,element,attrs)
// 	        {
// 	            element.kendoListView({
// 	                        dataSource: scope.source,
// 	                        template: kendo.template($(scope.temp).html())
// 	                    });
//         	}
//         }
//     });

