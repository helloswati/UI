<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body ng-app="myApp">

<div ng-include="'https://tryit.w3schools.com/angular_include.php'"></div>

<script>
var app = angular.module('myApp', [])

app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'https://tryit.w3schools.com/**'
  ]);
});

</script>

</body>
</html>