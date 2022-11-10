<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Math</h1>
<h2>The Math.abs() Method</h2>
<p>Math.abs() returns the absolute value of a number:</p>

<p id="demo"></p>

<script>
let a = Math.abs(7.25);
let b = Math.abs(-7.25);
let c = Math.abs(null);
let d = Math.abs("Hello");
let e = Math.abs(2-3);
document.getElementById("demo").innerHTML = 
a + "<br>" + b + "<br>" + c + "<br>" + d + "<br>" + e;
</script>

</body>
</html>