<!DOCTYPE html>
<html>
<body>

<h1>The JavaScript <i>this</i> Keyword</h1>

<p>In a function, by default, <b>this</b> refers to the global object.</p>

<p>Strict mode does not allow default binding, so <b>this</b> is:</p>
<p id="demo"></p>

<script>
"use strict";
document.getElementById("demo").innerHTML = myFunction();

function myFunction() {
  return this;
}
</script>

</body>
</html>