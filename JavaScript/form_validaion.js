function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

//
Data Validation
Data validation is the process of ensuring that user input is clean, correct, and useful.

Typical validation tasks are:

has the user filled in all required fields?
has the user entered a valid date?
has the user entered text in a numeric field?
Most often, the purpose of data validation is to ensure correct user input.

Validation can be defined by many different methods, and deployed in many different ways.

Server side validation is performed by a web server, after input has been sent to the server.

Client side validation is performed by a web browser, before input is sent to a web server.

HTML Constraint Validation
HTML5 introduced a new HTML validation concept called constraint validation.

HTML constraint validation is based on:

Constraint validation HTML Input Attributes
Constraint validation CSS Pseudo Selectors
Constraint validation DOM Properties and Methods

//