The window.screen object contains information about the user's screen.
The window.screen object can be written without the window prefix.


document.getElementById("demo").innerHTML =
"Screen Width: " + screen.width;

document.getElementById("demo").innerHTML =
"Screen Height: " + screen.height;


document.getElementById("demo").innerHTML =
"Available Screen Width: " + screen.availWidth;


document.getElementById("demo").innerHTML =
"Available Screen Height: " + screen.availHeight;


document.getElementById("demo").innerHTML =
"Screen Color Depth: " + screen.colorDepth;


<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 
"Screen color depth is " + screen.colorDepth;
</script>

</body>
</html>