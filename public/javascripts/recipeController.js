angular.module('BrewingTools.controllers.recipe', [])

  .controller('RecipeController', ['$scope', 'AbvCalculator', function($scope, AbvCalculator) {
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

    $scope.brewName = '';
    $scope.boilVolume = 23.0;
    $scope.boilLength = 60;
    $scope.mashLength = 60;
    $scope.og = '1.040';
    $scope.fg = '1.010';
    $scope.ibus = 0; 
    $scope.efficiency = 70;

    $scope.$watch('hopAdditions', function() {
      $scope.ibus = 0; 
      angular.forEach($scope.hopAdditions.data(), function(value, key) {
        $scope.ibus += +value.ibu;        
      });
      $scope.ibus = $scope.roundNumber($scope.ibus, 2);
    }, true);

    $scope.$watch('og + fg + efficiency', function() {
      $scope.abv = AbvCalculator.calculate($scope.og, $scope.fg, false);
    });    
  }])

  .controller('RecipeHopAdditionCtrl', ['$scope', 'IbuCalculator', function($scope, IbuCalculator) {
    $scope.formActive = false;
    // $scope.selectedHop = null;
    $scope.hopQuantity = 10;
    $scope.hopBoilTime = 60;  
    $scope.hopAdditionIbus = 0;

    $scope.showForm = function() {
      $scope.formActive = true;
    };

    $scope.done = function() {
      $scope.formActive = false;
    };

    $scope.updateIBU = function() {
      if ($scope.selectedHop > 0 && $scope.hopQuantity > 0 && $scope.hopBoilTime > 0)
      {
        $scope.hopAdditionIbus = IbuCalculator.calculate($scope.og, $scope.hopBoilTime, $scope.dataHops.get($scope.selectedHop).alphaAcid, $scope.hopQuantity, $scope.boilVolume);
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