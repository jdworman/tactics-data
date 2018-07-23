function getClothes() {
 var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
       var myClothes = JSON.parse(this.responseText);
       console.log(myClothes);

       document.getElementById("t-shirt-name").innerHTML = 'The t-shirt cost ' + t-shirt.cost;
       document.getElementById("pants-hp").innerHTML = 'The pants cost ' + pants.cost;
       document.getElementById("hat-attack").innerHTML = 'The hat cost ' + hat.cost;
       document.getElementById("socks-defense").innerHTML = 'The socks cost ' + socks.cost;
       document.getElementById("shoes-ability").innerHTML = 'The shoes cost ' + shoes.cost;
       document.getElementById("belt-ability").innerHTML = 'The belt cost ' + belt.cost;
     }
   };
   xhttp.open('GET','https://raw.githubusercontent.com/jdworman/tactics-data/master/tactics.json', true);
   xhttp.send();
 }
