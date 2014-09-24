angular.module('tableApp', ['tablefilters'])

.controller('tableCtrl', ['$scope', '$http', '$timeout',
	  function($scope, $http) {
	     $http.get('tableData/tabledata.json').success(function(data){
	       $scope.securityData = data;		   
		});
	  $scope.selectedStock = function(row) {
       $scope.selectedRow = row;
        };
	  }
  ])
  
  .directive('dollarChangeDirective', function ($timeout) {
    return {
        link: function ($scope, element, attrs) { 		   
			$timeout(function(){ 			   
			   if (element.html().charAt(0) == '-'){
			   	  element.css('color', 'red');
			   }else{
			   	  element.css('color', 'green');
			   }				
			});
        }
    };
   });

	