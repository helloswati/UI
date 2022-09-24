/*The Symbol.iterator is a function that returns a next() function.

An iterable can be iterated over with the code: for (const x of iterable) { } */



<!DOCTYPE html>
<html>
<body>
<h2>JavaScript Iterables</h2>

<p id="demo"></p>

<script>
// Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}

let text = ""
for (const num of myNumbers) {
  text += num +"<br>"
}

document.getElementById("demo").innerHTML = text;
</script>
</body>
</html>
