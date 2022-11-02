<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Arrays</h1>
<h2>The copyWithin() Method</h2>

<p>copyWithin() copies array elements to another position in an array, overwriting existing values.</p>

<p>Copy the first two array elements to the third and fourth position:</p>

<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];

document.getElementById("demo").innerHTML = fruits.copyWithin(4,2);
</script>

<p>The copyWithin() method is not supported in Internet Explorer.</p>

</body>
</html>
