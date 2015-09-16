/*
	@license Angular Snackbar version 1.0.1
	ⓒ 2015 Tyler Rockwood https://github.com/rockwotj/angular.snackbar
	License: MIT
*/

/*
@license Angular Snackbar version 1.0.1
ⓒ 2015 Tyler Rockwood https://github.com/rockwotj/angular.snackbar
License: MIT

<div class="snackbar-container" data-snackbar="true" data-snackbar-duration="3000" data-snackbar-remove-delay="200"></div>
<!-- With custom delay -->
<div class="snackbar-container" data-snackbar="true"></div>
*/

(function (angular) {
    "use strict";

    var module = angular.module("angular.snackbar", []);

    //snackbar service
    module.factory("snackbar", ['$rootScope', function ($rootScope) {
        return {
            createWithTimeout: function (content, duration) {

                $rootScope.$broadcast('createSnackbarWithTimeout', {
                    'content': content,
                        'duration': duration
                });
            },
            create: function (content, id) {
                $rootScope.$broadcast('createSnackbar', {
                    'content': content,
                        'id': id
                });
            },
            remove: function (id) {
                $rootScope.$broadcast('removeSnackbar', {
                    'id': id
                });
            }
        }
    }]);

    //snackbar directive
    module.directive("snackbar", ["$rootScope", "$compile", "$timeout", function ($rootScope, $compile, $timeout) {
        return function (scope, element, attrs) {
            //snackbar container
            var snackbarContainer = angular.element(element);
            //snackbar duration time (ms)
            var snackbarDuration = attrs.snackbarDuration || 3000;
            //delay time to remove from DOM after hide (ms)
            var snackbarRemoveDelay = attrs.snackbarRemoveDelay || 20;
            //receive broadcating
            $rootScope.$on('createSnackbarWithTimeout', function (event, received) {
                //snackbar template
                var template = "<div class=\"snackbar snackbar-opened\"><span class=\"snackbar-content\">" + received.content + "</span></div>";
                //template compile
                var snackbar = angular.element($compile(template)(scope));
                //add snackbar
                snackbarContainer.append(snackbar);
                //snackbar duration time
                $timeout(function () {
                    //hide snackbar
                    snackbar.removeClass("snackbar-opened");
                    //remove snackbar
                    $timeout(function () {
                        snackbar.remove();
                    }, snackbarRemoveDelay, false);
                }, received.duration || snackbarDuration, false);
            });
            $rootScope.$on('createSnackbar', function (event, received) {
                //snackbar template
                var template = "<div class=\"snackbar snackbar-opened snackbar-id-" + received.id + "\"><span class=\"snackbar-content\">" + received.content + "</span></div>";
                //template compile
                var snackbar = angular.element($compile(template)(scope));
                //add snackbar
                snackbarContainer.append(snackbar);

            });
            $rootScope.$on('removeSnackbar', function (event, received) {
                var snackbar = angular.element(snackbarContainer[0].getElementsByClassName('snackbar-id-' + received.id));
                //hide snackbar
                snackbar.removeClass("snackbar-opened");
                //remove snackbar
                snackbar.remove();
            });
        };
    }]);

})(angular);
