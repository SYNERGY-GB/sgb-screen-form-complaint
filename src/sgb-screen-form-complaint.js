'use strict';

angular.module('sgb-screen-form-complaint', ['megazord'])

  .controller('sgb-screen-form-complaint-controller',
              ['_screen', '_screenParams','$stateParams', '$scope',
              function(_screen, _screenParams, $stateParams, $scope){
   			  _screen.initialize($scope, _screenParams);
   			  $scope.items = $stateParams.data; 

  }]); 

