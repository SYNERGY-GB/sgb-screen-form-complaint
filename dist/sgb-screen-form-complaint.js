(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1]);

