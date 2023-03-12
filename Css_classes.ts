<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>  
<style>
input.ng-invalid {
    background-color:pink;
}
input.ng-valid {
    background-color:lightgreen;
}
</style>
<body ng-app="">

<p>Try writing in the input field:</p>

<form name="myForm">
<input name="myName" ng-model="myName" required>
</form>

<p>The input field requires content, and will therefore become green when you write in it.</p>

</body>
</html>