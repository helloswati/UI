<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Arrays</h1>
<h2>The fill() Method</h2>

<p>fill() fills specified elements in an array with a value.</p>

<p>Fill the last two array elements with "Kiwi":</p>

<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.fill("Kiwi",2,4);
</script>

<p>The fill() method is not supported in Internet Explorer (or earlier).</p>

</body>
</html>