<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>

<div ng-app="myApp" ng-controller="myCtrl"> 

<p>Data : {{content}}</p>
<p>Status : {{statuscode}}</p>
<p>StatusText : {{statustext}}</p>

</div>

<p>The response object has many properties. This example demonstrate the value of the data, status, and statusText properties.</p>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $http.get("welcome.htm")
  .then(function(response) {
      $scope.content = response.data;
      $scope.statuscode = response.status;
      $scope.statustext = response.statusText;            
  });
});
</script>

</body>
</html>

// .config the object used to generate the request.
.data a string, or an object, carrying the response from the server.
.headers a function to use to get header information.
.status a number defining the HTTP status.
.statusText a string defining the HTTP status. //