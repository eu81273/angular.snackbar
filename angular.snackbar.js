/*
	@license Angular Snackbar version 1.0.0
	ⓒ 2015 AHN JAE-HA http://github.com/eu81273/angular.snackbar
	License: MIT

	<div class="snackbar-container" data-snackbar="true" data-snackbar-duration="3000" data-snackbar-remove-delay="200"></div>
*/

(function ( angular ) {
	"use strict";

	var module = angular.module( "angular.snackbar", [] );

	//snackbar service
	module.factory("snackbar", ['$rootScope', function ($rootScope) {

		return {
			create : function ( message, timeout ) { 

				$rootScope.$broadcast('createSnackbar', { 'message': message, 'timeout': timeout });
			}
		}
	}]);

	//snackbar directive
	module.directive( "snackbar", ["$rootScope", "$compile", "$timeout", function($rootScope, $compile, $timeout) {

		//snackbar duration time (ms)
		var snackbarDuration = 3000;

		//delay time to remove from DOM after hide (ms)
		var snackbarRemoveDelay = 200;

		return function ( scope, element, attrs ) {

			//initialize
			snackbarDuration = attrs.snackbarDuration || 3000;
			snackbarRemoveDelay = attrs.snackbarRemoveDelay || 200;

			$rootScope.$on('createSnackbar', function(event, received) {

				//snackbar template
				var template = "<div class=\"snackbar snackbar-opened\"><span class=\"snackbar-content\">" + received.message + "</span></div>";

				//template compile
				var snackbar = $compile(template)(scope);

				//add snackbar
				angular.element(element).append(snackbar);

        //snackbar duration timeout
				var $snackbar = angular.element(snackbar);
				$timeout(function () {
					//hide snackbar
					$snackbar.removeClass("snackbar-opened");

					//remove snackbar
					$timeout( function () { $snackbar.remove(); }, snackbarRemoveDelay, false);
        }, received.timeout || snackbarDuration, false);
			
			});
		};
	}]);

})(angular);
