angular.module('BrewingTools.controllers.recipe', [])

  .controller('RecipeListCtrl', ['$scope','$location', function ($scope, $location) {
    // $scope.recipes = new kendo.data.DataSource({
    //   data: [ {'brewName': 'rage', 'style': 'ale'}, {'brewName': 'rage2', 'style': 'ale'}, {'brewName': 'rage3', 'style': 'pale'}, {'brewName': 'rage4', 'style': 'pale'} ]
    // });
    // $scope.recipes = [ {'brewName': 'rage', 'style': 'ale'}, {'brewName': 'rage2', 'style': 'ale'}, {'brewName': 'rage3', 'style': 'pale'}, {'brewName': 'rage4', 'style': 'pale'}];
    $scope.recipes = new kendo.data.DataSource({
        transport: {
          read: "/rest/recipes"
        }
      });

    $scope.createNewRecipe = function() {
      $location.path($location.path() + '/new');
    };

    $scope.onSelection = function(e) {
      $location.path($location.path() + '/' + e.sender._data[0].id);
    };
  }])

  .controller('RecipeController', ['$scope', '$routeParams', 'AbvCalculator', 'RecipeService', function($scope, $routeParams, AbvCalculator, RecipeService) {
    $scope.styles = new kendo.data.DataSource({
      transport: {
        read: "/assets/data/styles.json"
      },
      schema: {
        model: { id: "Code" }
      },
      sort: {
        field: "SubCategory",
        dir: "asc"
      }
    });
    $scope.hopAdditions = new kendo.data.DataSource({
      data: [ ],
      aggregate: [
        {field: 'quantity', aggregate: 'sum'},
        {field: 'ibu', aggregate: 'sum'}],
      sort: {
        field: 'additionTime',
        dir: 'desc'
      }
    });

    $scope.recipe = {};
    if ($routeParams.recipeId == 'new') {
      $scope.recipe = {};
      $scope.recipe.brewName = '';
      $scope.recipe.boilVolume = 23.0;
      $scope.recipe.boilLength = 60;
      $scope.recipe.mashLength = 60;
      $scope.recipe.og = '1.040';
      $scope.recipe.fg = '1.010';
      $scope.recipe.ibus = 0; 
      $scope.recipe.efficiency = 70;  
    } else 
    {
      RecipeService.get({id: $routeParams.recipeId}, function (data) {
        $scope.recipe = data;
        console.log(data);
        console.log($scope.recipe);

      });
    }
    
    $scope.$watch('hopAdditions', function() {
      $scope.recipe.ibus = 0; 
      angular.forEach($scope.hopAdditions.data(), function(value, key) {
        $scope.recipe.ibus += +value.ibu;        
      });
      $scope.recipe.ibus = $scope.roundNumber($scope.recipe.ibus, 2);
    }, true);

    $scope.$watch('recipe.og + recipe.fg + recipe.efficiency', function() {
      $scope.recipe.abv = AbvCalculator.calculate($scope.recipe.og, $scope.recipe.fg, false);
    });

    $scope.saveRecipe = function()
    {
      $scope.recipe.hops = $scope.hopAdditions.data();
      RecipeService.post($scope.recipe, function (data) {
        console.log(data);
      });
    };
  }])

  .controller('RecipeHopAdditionCtrl', ['$scope', 'IbuCalculator', function($scope, IbuCalculator) {
    $scope.formActive = false;
    // $scope.selectedHop = null;
    $scope.hopQuantity = 10;
    $scope.hopBoilTime = 60;  
    $scope.hopAdditionIbus = 0;

    $scope.showForm = function() {
      $scope.formActive = true;
      console.log($scope.recipe);
    };

    $scope.done = function() {
      $scope.formActive = false;
    };

    $scope.updateIBU = function() {
      if ($scope.selectedHop > 0 && $scope.hopQuantity > 0 && $scope.hopBoilTime > 0)
      {
        $scope.hopAdditionIbus = IbuCalculator.calculate($scope.recipe.og, $scope.hopBoilTime, $scope.dataHops.get($scope.selectedHop).alphaAcid, $scope.hopQuantity, $scope.recipe.boilVolume);
      } else
      {
        $scope.hopAdditionIbus = 0;
      }
    };

    $scope.addHop = function() {
      var selHop = $scope.dataHops.get($scope.selectedHop);
      if (selHop != null) {
        var addition = { quantity: $scope.hopQuantity, additionTime: $scope.hopBoilTime, hop: selHop, ibu: $scope.hopAdditionIbus};
        $scope.hopAdditions.add(addition);
        $scope.hopAdditionForm.$setPristine();
      } 
    };

    $scope.$watch('selectedHop + hopQuantity + hopBoilTime', function() {
      $scope.updateIBU();
    });

  }])

;