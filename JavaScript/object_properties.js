<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Properties</h2>
<p>Looping object property values:</p>

<p id="demo"></p>

<script>
const person = {
  fname:"John",
  lname:"Doe",
  age:25
}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

document.getElementById("demo").innerHTML = txt;
</script>

</body>
</html>