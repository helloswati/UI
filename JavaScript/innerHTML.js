/*JavaScript Display Possibilities

JavaScript can "display" data in different ways:

1.Writing into an HTML element, using innerHTML.
2.Writing into the HTML output using document.write().
3.Writing into an alert box, using window.alert().
4.Writing into the browser console, using console.log(). */


<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>

</body>
</html> 
