/*
	@license Angular Snackbar version 1.0.0
	ⓒ 2015 AHN JAE-HA http://github.com/eu81273/angular.snackbar
	License: MIT

	<div class="snackbar-container" data-snackbar="true" data-snackbar-duration="3000" data-snackbar-remove-delay="200"></div>
*/

(function ( angular ) {
	"use strict";

	var module = angular.module( "angular.snackbar", [] );

	//스낵바 서비스
	module.factory("snackbar", ['$rootScope', function ($rootScope) {

		return {
			create : function ( message, timeout ) { 

				$rootScope.$broadcast('createSnackbar', { 'message': message, 'timeout': timeout });
			}
		}
	}]);

	//다이렉티브
	module.directive( "snackbar", ["$rootScope", "$compile", "$timeout", function($rootScope, $compile, $timeout) {

		//스낵바가 보이는 시간
		var snackbarDuration = 3000;

		//스낵바 엘리먼트 제거 시간
		var snackbarRemoveDelay = 200;

		return function ( scope, element, attrs ) {

			//초기화
			snackbarDuration = attrs.snackbarDuration || 3000;
			snackbarRemoveDelay = attrs.snackbarRemoveDelay || 200;

			$rootScope.$on('createSnackbar', function(event, received) {

				//스낵바 템플릿
				var template = "<div class=\"snackbar snackbar-opened\"><span class=\"snackbar-content\">" + received.message + "</span></div>";

				//스택바 템플릿 컴파일
				var snackbar = $compile(template)(scope);

				//스낵바 추가
				angular.element(element).append(snackbar);

				//스낵바 제거 타임아웃
				$timeout(function () {
					//스냅바 감추기
					return angular.element(snackbar).removeClass("snackbar-opened");

				}, received.timeout || snackbarDuration).then(function (element) {

					//스낵바 제거
					$timeout( function () { element.remove(); }, snackbarRemoveDelay);
				});
			
			});
		};
	}]);

})(angular);