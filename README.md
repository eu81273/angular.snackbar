Angular Snackbar
================

Pure [AngularJS](http://www.angularjs.org) based Snackbar Component.



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

Creating snackbar also very simple. Inject snackbar service to your app then call the service method like below.


```javascript
var app = angular.module('angularApplication', ['angular.snackbar']);

app.controller('defaultController', function($scope, snackbar) {

	snackbar.create("Hello World!!");

});

```

## Examples

#### Basic example

[jsFiddle - http://jsfiddle.net/eu81273/wtfdzehr/](http://jsfiddle.net/eu81273/wtfdzehr/)


## Browser Compatibility

Report me please. I just tested on Chrome 39.0.2171.95 m.

## Changelogs

#### version 1.0.0


## License

The MIT License.

Copyright ⓒ 2015 AHN JAE-HA.

See [LICENSE](https://github.com/eu81273/angular.snackbar/blob/master/LICENSE)