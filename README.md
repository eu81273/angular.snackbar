Angular Snackbar
================

Pure [AngularJS](http://www.angularjs.org) based Snackbar Component.
(css based on https://github.com/FezVrasta/snackbarjs)

Forked from [eu81273/angular.snackbar.js](https://github.com/eu81273/angular.snackbar)

## Example

[jsFiddle - http://jsfiddle.net/eu81273/wtfdzehr/](http://jsfiddle.net/rockwotj/1h0rctcy/)




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

## Create snackbar

Creating a snackbar is also very simple. Inject snackbar service to your app then call the service method like below.


```javascript
var app = angular.module('angularApplication', ['angular.snackbar']);

app.controller('defaultController', function($scope, snackbar) {

	//create snackbar with an id of 1
	snackbar.create("Hello World!!", 1);

	//remove snackbar with id 1
	snackbar.remove(1);

	//create snackbar with a duration
snackbar.createWithTimeout("Hello World!!");
});

```

## Browser Compatibility

Report me please. I just tested on Chrome.

## Changelogs

#### version 1.1.0
- Added the ability to manually toggle the snackbar

#### version 1.0.1
- Reduce extra digest loops when hide (Thanks to codef0rmer)

#### version 1.0.0


## License

The MIT License.

Copyright ⓒ 2015 Tyler Rockwood.

See [LICENSE](https://github.com/rockwotj/angular.snackbar/blob/master/LICENSE)
