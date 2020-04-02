
var brandList =

var allBrands = document.getElementByID("all-brands");

allBrands.addEventListener("change", function() {
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET', 'http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make');
  myRequest.onload = function() {
    var ourData = JSON.parse(myRequest.responseText);
    renderHTML(ourData);
  };
  myRequest.send();
});

function renderHTML(data) {
  data
}
