'use strict';

angular.module('sgb-screen-form-complaint', ['megazord'])

  .controller('sgb-screen-form-complaint-controller',
              ['_screen', '_screenParams','$stateParams', '$scope',
              function(_screen, _screenParams, $stateParams, $scope){

 _screen.initialize($scope, _screenParams);
 $scope.requests = _screenParams.requests?_screenParams.requests:['NA'];
 $scope.recipients = _screenParams.recipients?_screenParams.recipients:['NA'];
 
 $scope.content = {
  	type: $scope.requests[0],
  	recipient: $scope.recipients[0],
  	comment: ''
 };

 /* $scope.send = function() {
  	$scope.content.type =
  }*/

}]); 

