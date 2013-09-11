angular.module('BrewingTools.controllers.recipe', [])

  .controller('RecipeListCtrl', ['$scope','$location', function ($scope, $location) {
    $scope.recipes = new kendo.data.DataSource({
        transport: {
          read: "/rest/recipes"
        }
      });

    $scope.createNewRecipe = function() {
      $location.path($location.path() + '/new');
    };

    $scope.onSelection = function(e) {          
      var grid = e.sender;
      var selectedRows = grid.select();
      $location.path($location.path() + '/' + grid.dataItem(selectedRows[0]).id);      
    };

    $scope.getThis = function (f) {
      console.log(f);
      return 'mary';
    }
  }])

  .controller('RecipeController', ['$scope', '$routeParams', 'AbvCalculator', 'RecipeService', 'Hops', function($scope, $routeParams, AbvCalculator, RecipeService, Hops) {
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

    $scope.saving = false;
    $scope.recipe = {};
    if ($routeParams.recipeId == 'new') {
      $scope.saveAction = 'Create';
      $scope.recipe = {};
      $scope.recipe.style = {code: null};
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
      $scope.saveAction = 'Update';
      RecipeService.get({id: $routeParams.recipeId}, function (data) {
        $scope.recipe = data;
        // console.log(data.hops);
        // console.log($scope.recipe);
        $scope.hopAdditions.data(data.hops);

      });
    }


    $scope.$watch('recipe.style', function() {
      console.log($scope.recipe);
    }, true);
    
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
      $scope.saveAction = 'Saving...';
      $scope.saving = true;
      
      if ($scope.recipe.id == null)
      {
        RecipeService.post($scope.recipe, function (data) {
          $scope.navigate('/recipes');
        });  
      } else 
      {
        RecipeService.put($scope.recipe, function (data) {
          $scope.navigate('/recipes');
        });
      }     
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