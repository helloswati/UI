<!DOCTYPE html>
<html>
<body>

<h1>Using the <em>replacer</em> Function</h1>

<p>Uppercase the value of "city":</p>

<p id="demo"></p>

<script>
var obj = { "name":"John", "age":"39", "city":"New York"};
var text = JSON.stringify(obj, function (key, value) {
  if (key == "city") {
    return value.toUpperCase();
  } else {
    return value;
  }
});

document.getElementById("demo").innerHTML = text; 
</script>

</body>
</html>
