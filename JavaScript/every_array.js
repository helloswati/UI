<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Arrays</h1>
<h2>The every() Method</h2>
<p>every() returns true if all elements in an array pass a test (provided as a function).</p>

<p>Click the button to check if every element in the array has a value above this number:</p>

<p><input type="number" id="ageToCheck" value="18"></p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
const ages = [32, 33, 12, 40];

function checkAge(age) {
  return age > document.getElementById("ageToCheck").value;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.every(checkAge);
}
</script>

</body>
</html>