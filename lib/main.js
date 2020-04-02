var brandList = document.getElementByID("all-brands");

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
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<option>" + data[i].name + "</option>";
  }
  brandList.insertAdjacentHTML("beforeend", htmlString);
}
