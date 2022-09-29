/*A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished
You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) */


<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Functions</h2>

<p>Do a calculation and then display the result.</p>

<p id="demo"></p>

<script>
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result);
</script>

</body>
</html>



