<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Arrays</h1>
<h2>The indexOf() Method</h2>

<p>indexOf() returns the position of a specified value in an array.</p>

<p>Search for "Apple", starting at position 3:</p>

<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
let index = fruits.indexOf("Apple", 3);

document.getElementById("demo").innerHTML = index;
</script>

</body>
</html>