// AJAX = Asynchronous JavaScript And XML
// Example
// From Free code camp

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open(
    "GET",
    "https://cors-anywhere.herokuapp.com/http://carnes.cc/code/ajax_example.txt",
    true
  );
  xhttp.send();
}

/* 
  Adding "https://cors-anywhere.herokuapp.com/" prevents the following error:
  
  XMLHttpRequest cannot load http://carnes.cc/code/ajax_example.txt. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'https://s.codepen.io' is therefore not allowed access.
  */

// From Free code camp
