<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>  
<body ng-app="">

<p>Try writing an E-mail address in the input field:</p>

<form name="myForm">
<input type="email" name="myInput" ng-model="myInput">
</form>

<p>The input's valid state is:</p>
<h1>{{myForm.myInput.$valid}}</h1>
<p>Note that the state of the input field is "true" before you start writing in it, even if it does not contain an e-mail address.</p>

</body>
</html>