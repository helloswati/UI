<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Arrays</h1>
<h2>The includes() Method</h2>

<p>Check if fruit[] contains "Banana", starting the search from position 3:</p>

<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.includes("Banana", 3);
</script>

<p>includes() is not supported in Internet Explorer or Edge 13 (and earlier versions).</p>

</body>
</html>