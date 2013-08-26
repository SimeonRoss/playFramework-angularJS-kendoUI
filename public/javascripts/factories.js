angular.module('BrewingTools.factories', ['ngResource'])
  .factory('AbvCalculator', [ function() {
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
  }])
  .factory('IbuQueryCalc', ['$resource', function($resource) {
    return $resource('/rest/ibu/calc');
  }]);