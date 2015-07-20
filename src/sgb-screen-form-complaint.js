'use strict';

angular.module('sgb-screen-form-complaint', ['megazord'])

  .controller('sgb-screen-form-complaint-controller',
              ['_screen', '_screenParams','$stateParams', '$scope',
              function(_screen, _screenParams, $stateParams, $scope){

 _screen.initialize($scope, _screenParams);
 $scope.services = _screenParams.services?_screenParams.services:['NA'];
 $scope.types = _screenParams.types?_screenParams.types:['NA'];
 
 $scope.content = {
  	service: $scope.service[0],
  	type: $scope.type[0],
  	details: ''
 };

 /* $scope.send = function() {
  	$scope.content.type =
  }*/

}]); 

