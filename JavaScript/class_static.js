/*Static class methods are defined on the class itself.
You cannot call a static method on an object, only on an object class.*/


<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Class Static Methods</h2>

<p>A static method is created with the "static" keyword, and you can only call the method on the class itself.</p>

<p id="demo"></p>

<script>
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

let myCar = new Car("Ford");

//You can call 'hello()' on the Car Class:
document.getElementById("demo").innerHTML = Car.hello();

// But NOT on  a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.
</script>

</body>
</html>
