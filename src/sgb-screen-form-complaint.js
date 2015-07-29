'use strict';

angular.module('sgb-screen-form-complaint', ['megazord'])


	.controller('sgb-screen-form-complaint-controller',
              ['_screen', '_screenParams','$stateParams', '$scope',
              function(_screen, _screenParams, $stateParams, $scope){

        
	    _screen.initialize($scope, _screenParams);
	    $scope.form = $stateParams.data;
	    $scope.form.combobox_2 = $scope.form.combobox2_?$scope.form.combobox_2:['default_1','default_2']);

		$scope.content = {
		 	selection_1: $scope.form.combobox_1[0],
		 	selection_2: $scope.form.combobox_2[0],
		 	input_text: ''
		};

	}]); 


