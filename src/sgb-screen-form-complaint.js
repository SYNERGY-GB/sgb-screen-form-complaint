'use strict';

angular.module('sgb-screen-form-complaint', ['megazord'])

	.controller('sgb-screen-form-complaint-controller',
              ['_screen', '_screenParams','$stateParams', '$scope',
              function(_screen, _screenParams, $stateParams, $scope){

	    _screen.initialize($scope, _screenParams);
	    $scope.form_msg   = _screenParams.form_msg?_screenParams.form_msg:false; 
	    $scope.combobox_1 = _screenParams.combobox_1?_screenParams.combobox_1:false;
	    $scope.combobox_2 = _screenParams.combobox_2?_screenParams.combobox_2:['default_1','default_2'];

		$scope.content = {
		 	selection_1: $scope.combobox_1[0],
		 	selection_2: $scope.combobox_2[0],
		 	input_text: ''
		};

 /* $scope.send = function() {
  	$scope.content.type =
  }*/

}]); 


}]); 

