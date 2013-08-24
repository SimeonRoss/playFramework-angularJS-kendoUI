
var brewingTools = angular.module('BrewingTools', ['ngResource', 'kendo.directives']);

brewingTools.factory('AbvCalculator', function() {
    var abvCalculator = {};
    
    abvCalculator.calculate = function (sg, fg, bottleConditioned) {
      var alcFactor = 100.3 * (sg - fg) + 125.65;
      var abv = alcFactor * (sg - fg);
      if (bottleConditioned)
      {
        abv += 0.005 * alcFactor;
      }
      abv = this.simpleRound(abv);
      return abv;
    };

    abvCalculator.simpleRound = function (number)
    {
      return (Math.round(number * 100) / 100).toFixed(2);
    }

    return abvCalculator;
});

brewingTools.factory('IbuQueryCalc', ['$resource', function($resource) {
    return $resource('/rest/ibu/calc');
}]);

// Set up our mappings between URLs, templates, and controllers
function routeConfig($routeProvider) {
  $routeProvider.
    when('/abv', {
      controller: AbvController,
      templateUrl: '/assets/partial/abv.html'
    }).
    when('/ibu', {
      controller: IbuController,
      templateUrl: '/assets/partial/ibu.html'
    }).
    when('/ibuRecipe', {
      controller: IbuRecipeController,
      templateUrl: '/assets/partial/ibuRecipe.html'
    }).
    when('/', {
      controller: AboutController,
      templateUrl: '/assets/partial/about.html'
    }).
    otherwise({
      redirectTo: '/'
    });
}
brewingTools.config(routeConfig);

function MenuController( $scope, $location ) {

  $scope.menuItems = [{url: '/', name: 'About'},
                      {url: '/abv',       name: 'ABV Calculator'},
                      {url: '/ibu',       name: 'Hop Addition IBU Calculator'},
                      {url: '/ibuRecipe', name: 'Recipe IBU Calculator'}];

  $scope.isActive = function(url)
  {
    return url === $location.path();
  };
}

function AboutController( $scope ) {  
}

function AbvController( $scope, AbvCalculator ) {

  $scope.sg = 1.040;
  $scope.fg = 1.010;
  $scope.abv = 0;
  $scope.bottleConditioned = false;

  $scope.calcAbv = function(e) {
    $scope.abv = AbvCalculator.calculate($scope.sg, $scope.fg, $scope.bottleConditioned) + '%';
  };

  $scope.calcAbv();
}

function IbuController( $scope, IbuQueryCalc ) {

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
          console.log( data.ibu);
      });
  };

}

function IbuRecipeController( $scope ) {
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
}

function AddHopToRecipeFormController( $scope, IbuQueryCalc ) {
  // $scope.selectedHop = null;
  $scope.hopQuantity = 10;
  $scope.hopBoilTime = 1;  
  $scope.hopAdditionIbus = 0;
  $scope.alpaAcid = '';

  $scope.setAlphaAcid = function() {
    var hop = $scope.hops.get($scope.selectedHop);
    if (hop == null)
    {
      $scope.alpaAcid = '';
    } else {
      $scope.alpaAcid = hop.alphaAcid + '% alpha acid';
    }
  };

  $scope.addHop = function(additionForm) {

    var selHop = $scope.hops.get($scope.selectedHop);
    if (selHop != null) {
      var addition = { quantity: $scope.hopQuantity, additionTime: $scope.hopBoilTime, hop: selHop};
      $scope.hopAdditions.add(addition);
    } 
  };

  $scope.onChanges = function() {
    console.log('sigh');
    if ($scope.selectedHop > 0 && $scope.hopQuantity > 0 && $scope.hopBoilTime > 0)
    {
        IbuQueryCalc.get({openingGravity: $scope.sg,
              alphaAcidLevel: $scope.hops.get($scope.selectedHop).alphaAcid,
              hopsAddedTimeInMins: $scope.hopBoilTime,
              hopsInGms: $scope.hopQuantity,
              boilVolume: $scope.boilVolume,
              boilDuration: $scope.boilTime },

          function (data) {
         $scope.hopAdditionIbus = data.ibu;
          console.log( data.ibu);
      });
    } else
    {
      $scope.hopAdditionIbus = 0;
    }
  };

  $scope.$watch('selectedHop', function() {
    $scope.setAlphaAcid(); 
  });

}