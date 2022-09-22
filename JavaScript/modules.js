/*JavaScript modules allow you to break up your code into separate files.
JavaScript modules rely on the import and export statements.
Let us create a file named person.js, and fill it with the things we want to export.*/

const name = "Jesse";
const age = 40;

export {name, age};

/*Let us create another file, named message.js, and use it for demonstrating default export.
You can only have one default export in a file.*/

<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Modules</h1>

<p id="demo"></p>

<script type="module">

import { name, age } from "./person.js";

let text = "My name is " + name + ", I am " + age + ".";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
