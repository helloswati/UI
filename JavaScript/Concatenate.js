<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Arrays</h1>
<h2>The concat() Method</h2>

<p>The concat() method concatenates (joins) two or more arrays:</p>

<p id="demo"></p>

<script>
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];

const children = arr1.concat(arr2, arr3); 
document.getElementById("demo").innerHTML = children;
</script>

</body>
</html>