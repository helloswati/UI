/*Declaring Strict Mode

Strict mode is declared by adding "use strict"; to the beginning of a script or a function.

Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode):*/


<!DOCTYPE html>
<html>
<body>

<h2>Global "use strict" declaration.</h2>

<p>Activate debugging in your browser (F12) to see the error report.</p>

<script>
"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will cause an error (y is not defined)
}
</script>

</body>
</html>