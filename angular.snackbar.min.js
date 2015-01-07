/*
	@license Angular Snackbar version 1.0.1
	ⓒ 2015 AHN JAE-HA http://github.com/eu81273/angular.snackbar
	License: MIT
*/

(function(a){var b=a.module("angular.snackbar",[]);b.factory("snackbar",["$rootScope",function(a){return{create:function(e,d){a.$broadcast("createSnackbar",{content:e,duration:d})}}}]);b.directive("snackbar",["$rootScope","$compile","$timeout",function(b,e,d){return function(g,h,c){var k=a.element(h),l=c.snackbarDuration||3E3,m=c.snackbarRemoveDelay||200;b.$on("createSnackbar",function(b,c){var f=a.element(e('<div class="snackbar snackbar-opened"><span class="snackbar-content">'+c.content+"</span></div>")(g));
k.append(f);d(function(){f.removeClass("snackbar-opened");d(function(){f.remove()},m,!1)},c.duration||l,!1)})}}])})(angular);
