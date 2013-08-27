angular.module('BrewingTools.controllers', [])
  .controller('MenuController', ['$scope', '$location', function($scope, $location) {
    $scope.menuItems = [{url: '/', name: 'About'},
                        {url: '/abv',       name: 'ABV Calculator'},
                        {url: '/ibu',       name: 'Hop Addition IBU Calculator'},
                        {url: '/ibuRecipe', name: 'Recipe IBU Calculator'}];


    $scope.isActive = function(url)
    {
      return url === $location.path();
    };
  }])

  .controller('AboutController', [function() {

  }])

  .controller('AbvController', ['$scope', 'AbvCalculator', function($scope, AbvCalculator) {
    $scope.sg = 1.040;
    $scope.fg = 1.010;
    $scope.abv = 0;
    $scope.bottleConditioned = false;

    $scope.calcAbv = function(e) {
      $scope.abv = AbvCalculator.calculate($scope.sg, $scope.fg, $scope.bottleConditioned) + '%';
    };

    $scope.calcAbv();
  }])

  .controller('IbuController', ['$scope', 'IbuQueryCalc', function($scope, IbuQueryCalc) {
    $scope.sg = 1.040;
    $scope.boilTime = 60;
    $scope.hopAlphaAcid = 11.9;
    $scope.hopQuantity = 15;
    $scope.hopBoilTime = 45;
    $scope.ibus = 0;
    $scope.boilVolume = 22.0;

    $scope.calculate = function() {
        IbuQueryCalc.get({openingGravity: $scope.sg,
                alphaAcidLevel: $scope.hopAlphaAcid,
                hopsAddedTimeInMins: $scope.hopBoilTime,
                hopsInGms: $scope.hopQuantity,
                boilVolume: $scope.boilVolume,
                boilDuration: $scope.boilTime },

            function (data) {
           $scope.ibus = data.ibu;
        });
    };
  }])

  .controller('IbuRecipeController', ['$scope', function($scope) {
    $scope.hops = new kendo.data.DataSource({
      transport: {
        read: "/assets/data/hops.json"
      },
      schema: {
        model: { id: "id" }
      }
    });
    $scope.hopAdditions = new kendo.data.DataSource({
      data: [ ]
    });
    

    $scope.boilTime = 60;
    $scope.boilVolume = 22.0;
    $scope.sg = 1.040;  
  }])

  .controller('AddHopToRecipeFormController', ['$scope', 'IbuCalculator', function($scope, IbuCalculator) {
    // $scope.selectedHop = null;
    $scope.hopQuantity = 10;
    $scope.hopBoilTime = 60;  
    $scope.hopAdditionIbus = 0;
    $scope.alpaAcid = '';

    $scope.setDefaults = function() {
      $scope.selectedHop = null;
      $scope.hopQuantity = 10;
      $scope.hopBoilTime = 60;  
      $scope.hopAdditionIbus = 0;
      $scope.alpaAcid = '';
    };

    $scope.setAlphaAcid = function() {
      var hop = $scope.hops.get($scope.selectedHop);
      if (hop == null)
      {
        $scope.alpaAcid = '';
      } else {
        $scope.alpaAcid = hop.alphaAcid + '% alpha acid';
      }
    };

    $scope.addHop = function() {
      var selHop = $scope.hops.get($scope.selectedHop);
      if (selHop != null) {
        var addition = { quantity: $scope.hopQuantity, additionTime: $scope.hopBoilTime, hop: selHop, ibu: $scope.hopAdditionIbus};
        $scope.hopAdditions.add(addition);
        $scope.setDefaults();
        $scope.additionForm.$setPristine();
      } 
    };

    $scope.updateIBU = function() {
      if ($scope.selectedHop > 0 && $scope.hopQuantity > 0 && $scope.hopBoilTime > 0)
      {
        $scope.hopAdditionIbus = IbuCalculator.calculate($scope.sg, $scope.hopBoilTime, $scope.hops.get($scope.selectedHop).alphaAcid, $scope.hopQuantity, $scope.boilVolume);        
      } else
      {
        $scope.hopAdditionIbus = 0;
      }
    };

    $scope.$watch('selectedHop + hopQuantity + hopBoilTime', function() {
      $scope.setAlphaAcid();
      $scope.updateIBU();
    });

  }]);