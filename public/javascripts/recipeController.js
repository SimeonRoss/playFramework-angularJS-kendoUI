angular.module('BrewingTools.controllers.recipe', [])

  .controller('RecipeController', ['$scope', function($scope) {
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

    $scope.brewName = '';

  }])




;