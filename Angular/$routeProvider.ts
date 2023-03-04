<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.js"></script>

<body ng-app="myApp">

<p><a href="#/!">Main</a></p>

<a href="#!london">City 1</a>
<a href="#!paris">City 2</a>

<p>Click on the links to read about London and Paris.</p>

<div ng-view></div>

<script>
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/london", {
        templateUrl : "london.htm"
    })
    .when("/paris", {
        templateUrl : "paris.htm"
    });
});
</script>

</body>
</html>