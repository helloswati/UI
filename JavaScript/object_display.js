<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Objects</h2>
<p>Display object properties:</p>

<p id="demo"></p>

<script>
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

document.getElementById("demo").innerHTML = person.name + ", " + person.age + ", " + person.city;
</script>

</body>
</html>
