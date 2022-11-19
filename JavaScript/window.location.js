The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.

document.getElementById("demo").innerHTML =
"Page location is " + window.location.href;

document.getElementById("demo").innerHTML =
"Page hostname is " + window.location.hostname;

document.getElementById("demo").innerHTML =
"Page path is " + window.location.pathname;


document.getElementById("demo").innerHTML =
"Page protocol is " + window.location.protocol;

document.getElementById("demo").innerHTML =
"Port number is " + window.location.port;


<html>
<head>
<script>
function newDoc() {
  window.location.assign("https://www.w3schools.com")
}
</script>
</head>
<body>

<input type="button" value="Load new document" onclick="newDoc()">

</body>
</html>