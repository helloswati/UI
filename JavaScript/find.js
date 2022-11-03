<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Arrays</h1>
<h2>The find() Method</h2>

<p>Click "Test" to return the value of the first element in the array that has a value above this number:</p>

<p><input type="number" id="ageToCheck" value="18"></p>

<button onclick="myFunction()">Test</button>

<p id="demo"></p>

<script>
const ages = [4, 12, 16, 20];

function checkAge(age) {
  return age > document.getElementById("ageToCheck").value;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAge);
}
</script>

<p>The find() method is not supported in Internet Explorer (or earlier).</p>

</body>
</html>