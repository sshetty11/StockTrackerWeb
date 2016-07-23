angular.module('F1FeederApp.controllers', [ 'ngMaterial' ]).
  controller('driversController', function($scope, $http, $log, $q, ergastAPIservice) {
    $scope.nameFilter = null;
    $scope.listVisibility = false;
    $scope.divVisibility = false;


    $scope.update = function(stockname) {
        $scope.stockname = stockname;
        ergastAPIservice.getDrivers($scope.stockname).success(function (response) {
            //Dig into the responde to get the relevant data
            $scope.stockResponse = response;
            $scope.listVisibility = true;
            $scope.divVisibility = true;
        });
      };
  
    $scope.handleSelection = function(item){
        $scope.stockname = item;
        $scope.autoValue = '';
        //console.log($scope.stockname);
      }

///////////////////////////
var self = this;
   self.simulateQuery = false;
   self.isDisabled    = false;
   // list of `state` value/display objects
   self.states        = loadAll();
   self.querySearch   = querySearch;
   self.selectedItemChange = selectedItemChange;
   self.searchTextChange   = searchTextChange;
   self.newState = newState;
   function newState(state) {
     alert("Sorry! You'll need to create a Constituion for " + state + " first!");
   }
   // ******************************
   // Internal methods
   // ******************************
   /**
    * Search for states... use $timeout to simulate
    * remote dataservice call.
    */
   function querySearch (query) {
     deferred = $q.defer();
     //console.log(query);
     //var results = ['Alaska', 'Alabama'];
     ergastAPIservice.autoComplete(query).success(function (response) {
         //console.log("Inside this  ");
         deferred.resolve(response);

     });
     return deferred.promise;
   }
    //  var results = query ? self.states.filter( createFilterFor(query) ) : self.states,
    //      deferred;
    //  if (self.simulateQuery) {
    //    deferred = $q.defer();
     //
    //   // ergastAPIservice.autoComplete('A').success(function (response) {
    //        //console.log("Inside this  ");
    //        //Dig into the responde to get the relevant data
    //         var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
    //                 Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
    //                 Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
    //                 Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
    //                 North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
    //                 South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
    //                 Wisconsin, Wyoming';
    //     //   $scope.autoValue = response;
    //         deferred.resolve( allStates.split(/, +/g).map( function (state) {
    //           return {
    //             value: state.toLowerCase(),
    //             display: state
    //           };
    //         }));
    //   // });
     //
    //    //$timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
    //    return deferred.promise;
    //  } else {
//       return results;
  //    }
  //  }
   function searchTextChange(text) {
     //$log.info('Text changed to ' + text);
   }
   function selectedItemChange(item) {
     //$log.info('Item changed to ' + JSON.stringify(item));
   }
   /**
    * Build `states` list of key/value pairs
    */
   function loadAll() {
   }
    //  var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
    //          Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
    //          Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
    //          Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
    //          North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
    //          South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
    //          Wisconsin, Wyoming';
    //ergastAPIservice.autoComplete('A').success(function (response) {
        //console.log("Inside this  ");
        //Dig into the responde to get the relevant data
        //  var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
        //          Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
        //          Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
        //          Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
        //          North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
        //          South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
        //          Wisconsin, Wyoming';
        // //$scope.autoValue = response;
        //  return allStates.split(/, +/g).map( function (state) {
        //    return {
        //      value: state.toLowerCase(),
        //      display: state
        //    };
        //  });
  //  });
    //  return allStates.split(/, +/g).map( function (state) {
    //    return {
    //      value: state.toLowerCase(),
    //      display: state
    //    };
    //  });


/**
 * Create filter function for a query string
 */
function createFilterFor(query) {
  var lowercaseQuery = angular.lowercase(query);
  return function filterFn(state) {
    return (state.value.indexOf(lowercaseQuery) === 0);
  };
}

});

angular.module('MyModule.directive',[]).directive('autoComplete',function($timeout){
    return function(scope, iElement, iAttrs){
      iElement.autocomplete({
        source: scope[iAttrs.uiItems],
        select: function() {
          $timeout(function(){
          iElement.trigger('input');
      },0)
    }
  });
};
});
