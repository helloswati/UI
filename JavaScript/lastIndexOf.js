<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Arrays</h1>
<h2>The lastIndexOf() Method</h2>

<p>lastIndexOf() returns the last index (position) of a specified value:</p>

<p id="demo"></p>

<script>
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let index = fruits.lastIndexOf("Apple");

document.getElementById("demo").innerHTML = index;
</script>

</body>
</html>