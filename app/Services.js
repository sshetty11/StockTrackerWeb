angular.module('StockTrackerApp.services', [])
.factory('stockAPIservice',  ['$rootScope', '$http', '$q', '$log',
  function($rootScope, $http, $q, $log) {
    var stockAPI = {};
    var env = 'http://localhost:9000'
    stockAPI.getStockResponse = function(search_param) {
      id_arr = search_param.split(",");
      id = id_arr[id_arr.length - 1];
      return $http({
        method: 'JSONP',
        url: env + '/stock/'+id+'?callback=JSON_CALLBACK'
      });
    }

    stockAPI.autoComplete = function(txtValue) {
      return $http({
        method: 'JSONP',
        url: env + '/stock/autocomplete/'+ txtValue +'?callback=JSON_CALLBACK'
      });
    }
    return stockAPI;
  }
]);
