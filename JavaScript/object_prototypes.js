<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Objects</h2>

<p>Using an object constructor:</p>

<p id="demo"></p>

<script>
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

document.getElementById("demo").innerHTML =
"My father is " + myFather.age + ". My mother is " + myMother.age; 
</script>

</body>
</html>
