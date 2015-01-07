Angular Snackbar
================

Pure [AngularJS](http://www.angularjs.org) based Snackbar Component.
(css based on https://github.com/FezVrasta/snackbarjs)


## Example

[jsFiddle - http://jsfiddle.net/eu81273/wtfdzehr/](http://jsfiddle.net/eu81273/wtfdzehr/)




## Installation

Copy the script and css into your project and add a script and link tag to your page.

```html
<script type="text/javascript" src="/angular.snackbar.js"></script>
<link rel="stylesheet" type="text/css" href="css/angular.snackbar.css">
```

Add a dependency to your application module.

```javascript
angular.module('myApp', ['angular.snackbar']);
```

And add snackbar container tag to your application.

```html
<div class="snackbar-container" data-snackbar="true"></div>
```

This is all.

some attributes of angular snackbar are below.

- snackbar: snackbar directive.
- snackbar-duration : snackbar duration time (ms).
- snackbar-remove-delay : delay time to remove from DOM after hide (ms).


## Create snackbar

Creating snackbar also very simple. Inject snackbar service to your app then call the service method like below.


```javascript
var app = angular.module('angularApplication', ['angular.snackbar']);

app.controller('defaultController', function($scope, snackbar) {

	//create snackbar with default duration(3000ms)
	snackbar.create("Hello World!!");
	
	//create snackbar with custom duration
	snackbar.create("This is snackbar!!", 5000);

});

```

## Browser Compatibility

Report me please. I just tested on Chrome 39.0.2171.95 m.

## Changelogs

#### version 1.0.1
- Reduce extra digest loops when hide (Thanks to codef0rmer)

#### version 1.0.0


## License

The MIT License.

Copyright ⓒ 2015 AHN JAE-HA.

See [LICENSE](https://github.com/eu81273/angular.snackbar/blob/master/LICENSE)
