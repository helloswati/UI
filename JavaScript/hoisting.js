/*JavaScript Declarations are Hoisted

In JavaScript, a variable can be declared after it has been used.

In other words; a variable can be used before it has been declared.*/

<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = x;           // Display x in the element

var x; // Declare x
</script>

</body>
</html> 
