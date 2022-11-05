<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Objects</h1>
<h2>The Object.keys() Method</h2>

<p>Object.keys() returns an Array Iterator object with the keys of an object:</p>

<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = Object.keys(fruits);

let text = "";
for (let x of keys) {
  text += x + "<br>";
}

document.getElementById("demo").innerHTML = text;
</script>

<p>Object.keys() is not supported in Internet Explorer 11 (or earlier).</p>

</body>
</html>