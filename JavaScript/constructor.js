<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Arrays</h1>
<h2>The constructor Property</h2>

<p>The constructor property returns the function that created the Array prototype:</p>

<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.constructor;

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
