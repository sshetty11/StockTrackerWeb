angular.module('F1FeederApp.services', [])

  .factory('ergastAPIservice',  ['$rootScope', '$http', '$q', '$log',
    function($rootScope, $http, $q, $log) {

    var ergastAPI = {};
    ergastAPI.getDrivers = function(id) {
      //console.log("id "+id);
      return $http({
        method: 'JSONP',
        url: 'http://localhost:9000/stock/'+id+'?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.autoComplete = function(txtValue){
      //console.log(txtValue);
      return $http({
        method: 'JSONP',
        url: 'http://localhost:9000/stock/autocomplete/'+txtValue +'?callback=JSON_CALLBACK'
      });
    }
    return ergastAPI;
  }]);
