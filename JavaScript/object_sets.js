/*Passing an Array to new Set()
Create a new Set and use add() to add values
Create a new Set and use add() to add variables*/

<!DOCTYPE html>
<html>
<body>
<h2>JavaScript Sets</h2>
<p>Add values to a Set:</p>

<p id="demo"></p>

<script>
// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

// Display set.size
document.getElementById("demo").innerHTML = letters.size;
</script>

</body>
</html>

