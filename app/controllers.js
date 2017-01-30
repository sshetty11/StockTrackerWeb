angular.module('StockTrackerApp.controllers', [ 'ngMaterial' ]).
  controller('driversController', function($scope, $http, $log, $q, stockAPIservice) {
    $scope.nameFilter = null;
    $scope.listVisibility = false;
    $scope.divVisibility = false;

    $scope.update = function(stockname) {
      $scope.stockname = stockname;
      stockAPIservice.getStockResponse($scope.stockname).success(function (response) {
        //Dig into the responde to get the relevant data
        $scope.stockResponse = response;
        $scope.listVisibility = true;
        $scope.divVisibility = true;
      });
    };
    var self = this;
    self.simulateQuery = false;
    self.isDisabled = false;
    self.querySearch = querySearch;

    function querySearch (query) {
      deferred = $q.defer();
      stockAPIservice.autoComplete(query).success(function (response) {
        deferred.resolve(response);
      });
      return deferred.promise;
    }
});
