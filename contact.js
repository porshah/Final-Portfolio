function validateForm() {
    var x = document.forms["container"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }