<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM</h2>
<p>Remove Child Element</p>

<div id="div1">
<p id="p1">This is a paragraph.</p>
<p id="p2">This is another paragraph.</p>
</div>

<script>
const parent = document.getElementById("div1");
const child = document.getElementById("p1");
parent.removeChild(child);
</script>

</body>
</html>