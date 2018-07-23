function getClothes() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystagechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myClothes = JSON.parse(this.responseText);
      console.log(myClothes.clothes);

    }
    };
    xhttp.open("GET","https://raw.githubusercontent.com/jdworman/tactics-data/master/tactics.json", true);
    xhttp.send();
  }
