
var brewingTools = angular.module('BrewingTools', []);

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
    otherwise({
      redirectTo: '/abv'
    });
}
brewingTools.config(routeConfig);

function MenuController( $scope, $location ) {

  $scope.menuItems = [{url: '/abv', name: 'ABV Calculator'},
                      {url: '/ibu', name: 'Hop Addition IBU Calculator'}];

  $scope.isActive = function(url)
  {
    return url === $location.path();
  };
}

function AbvController( $scope, AbvCalculator ) {

  $scope.sg = 1.040;
  $scope.fg = 1.010;
  $scope.abv = 0;
  $scope.bottleConditioned = false;

  $scope.calcAbv = function() {
    $scope.abv = AbvCalculator.calculate($scope.sg, $scope.fg, $scope.bottleConditioned) + '%';
  };

  $scope.calcAbv();
}

function IbuController( $scope ) {

  $scope.sg = 1.040;
  $scope.boilTime = 60;
  $scope.hopAlphaAcid = 11.9;
  $scope.hopQuantity = 15;
  $scope.hopBoilTime = 45;
  $scope.ibus = 0;

  $scope.calculate = function() {
    
  };



}
