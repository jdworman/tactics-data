
function getClothes() {
  var xhttp = new XMLHttpRequest();
  console.log(xhttp); {
    if (this.readyState == 4 && this.status == 200) {
      var myClothes = JSON.parse(this.responseText);
      document.getElementById('info').src = myObj.sprites.front_default;
      console.log(this.responseText);
    }
    };
    xhttp.open("GET","https://github.com/jdworman/tactics-data.git", true);
    console.log(xhttp);
    xhttp.send();
