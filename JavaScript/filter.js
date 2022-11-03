<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Arrays</h1>
<h2>The filter() Method</h2>

<p>Click "Test" to get every element in the array that has a value above this number:</p>

<p><input type="number" id="ageToCheck" value="30"></p>
<button onclick="myFunction()">Test</button>

<p id="demo"></p>

<script>
const ages = [32, 33, 12, 40];

function checkAge(age) {
  return age > document.getElementById("ageToCheck").value;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.filter(checkAge);
}
</script>

</body>
</html>
