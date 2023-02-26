<!DOCTYPE html>
<html>
<style>
@keyframes myChange {
  from {
      height: 100px;
  } to {
      height: 0;
  }
}

div {
  height: 100px;
  background-color: lightblue;
}

div.ng-hide {
  animation: 0.5s myChange;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-animate.js"></script>

<body ng-app="ngAnimate">

Hide the DIV: <input type="checkbox" ng-model="myCheck">

<div ng-hide="myCheck">
</div>


</body>
</html>
