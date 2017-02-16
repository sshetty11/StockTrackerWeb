angular.module('StockTrackerApp.controllers', [ 'ngMaterial' ]).
  controller('stockController', function($scope, $http, $log, $q, stockAPIservice) {
    $scope.nameFilter = null;
    $scope.update = function(stockname) {
      $scope.stockname = stockname;
      $scope.loading = true;
      $scope.listVisibility = false;
      $scope.divVisibility = false;
      stockAPIservice.getStockResponse($scope.stockname).success(function (response) {
        $scope.stockResponse = response;
        $scope.listVisibility = true;
        $scope.divVisibility = true;
        $scope.loading = false;
        $scope.error = false;
      }).error(function (data, status) {
        $scope.error = true;
        $scope.loading = false;
      });
    };
    var self = this;
    self.simulateQuery = false;
    self.isDisabled = false;
    self.querySearch = querySearch;

    function querySearch (query) {
      deferred = $q.defer();
      stockAPIservice.autoComplete(query).success(function (response) {
        $scope.error = false;
        deferred.resolve(response);
      }).error(function (data, status) {
        $scope.error = true;
        $scope.loading = false;
        $scope.listVisibility = false;
        $scope.divVisibility = false;
      });;
      return deferred.promise;
    }
});
