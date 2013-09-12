angular.module('BrewingTools.controllers', [])

  .controller('MenuController', ['$scope', '$location', function($scope, $location) {
    $scope.menuItems = [{url: '/', name: 'About'},
                        {url: '/abv',       name: 'ABV Calculator'},
                        {url: '/recipes',   name: 'Recipes'}];


    $scope.isActive = function(url)
    {
      return url === $location.path();
    };
  }])

  .controller('AboutController', ['$scope', function($scope) {       
    
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
  }]);