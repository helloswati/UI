/*To create a class inheritance, use the extends keyword.
A class created with a class inheritance inherits all the methods from another class
The super() method refers to the parent class.
By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.
To add getters and setters in the class, use the get and set keywords.*/

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Class Gettter/Setter</h2>

<p>A demonstration of how to add getters and setters in a class, and how to use the getter to get the property value.</p>

<p id="demo"></p>

<script>
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

let myCar = new Car("Ford");

document.getElementById("demo").innerHTML = myCar.cnam;
</script>

</body>
</html>
