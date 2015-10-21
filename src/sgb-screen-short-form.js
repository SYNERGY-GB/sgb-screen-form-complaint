'use strict';

angular.module('sgb-screen-short-form', ['megazord'])
	.controller('sgb-screen-short-form-controller',
              ['_screen', '_screenParams','$stateParams', '$scope','$ionicPopup','$translate',
              function(_screen, _screenParams, $stateParams, $scope, $ionicPopup, $translate){

        	//pull request
	       _screen.initialize($scope, _screenParams);
	    $scope.form = $stateParams.data;
	    //$scope.form.combobox_2 = $scope.form.combobox_2?$scope.form.combobox_2:['default_1','default_2'];

		$scope.resetContent = function() {
			$scope.content = {
			    selection_1: $scope.form.combobox_1? $scope.form.combobox_1[0]: undefined,
			  	selection_2: $scope.form.combobox_2? $scope.form.combobox_2[0]: undefined,
			 	input_text: ''
			}
		};

		$scope.resetContent(); 

		$scope.send = function() {
			$translate('popup_msg').then(function(msg) {
				var alertPopup = $ionicPopup.alert({
		    		title: msg,
  				});
  				alertPopup.then(function(res) {
     				$scope.resetContent();
   				});
			});
 		};

	}]); 

