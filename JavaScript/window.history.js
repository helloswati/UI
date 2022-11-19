The window.history object contains the browsers history.
history.back() - same as clicking back in the browser
history.forward() - same as clicking forward in the browser

Window History Back

<html>
<head>
<script>
function goBack() {
  window.history.back()
}
</script>
</head>
<body>

<input type="button" value="Back" onclick="goBack()">

</body>
</html>



Window History Forward


<html>
<head>
<script>
function goForward() {
  window.history.forward()
}
</script>
</head>
<body>

<input type="button" value="Forward" onclick="goForward()">

</body>
</html>
