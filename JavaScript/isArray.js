<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Arrays</h1>
<h2>The Array.isArray() Method</h2>

<p>Array.isArray() returns true if a datatype is an arry, otherwise false:</p>

<p id="demo"></p>

<script>
let text = "W3Schools";
let result =  Array.isArray(text);

document.getElementById("demo").innerHTML = result;
</script>

</body>
</html>