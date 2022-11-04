<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Arrays</h1>
<h2>The Array.from() Method</h2>

<p>The Array.from() method returns an array from any iterable object.</p>
<p>Create an array from a string:</p>

<p id="demo"></p>

<script>
let text = "ABCDEFG"
const myArr = Array.from(text);

document.getElementById("demo").innerHTML = myArr;
</script>

<p>The Array.from() method is not supported in Internet Explorer 11 (or earlier).</p>

</body>
</html>
