function findDepanneurs() {
  // Récupérer la position actuelle de l'utilisateur
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getDepanneurs);
  } else {
    alert("La géolocalisation n'est pas supportée par ce navigateur.");
  }
}

function getDepanneurs(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  // Récupérer les dépanneurs dans un rayon défini autour de la position actuelle
  var service = new google.maps.places.PlacesService(document.createElement('div'));
  service.nearbySearch({
    location: {lat: latitude, lng: longitude},
    radius: 10000,//distance en metre (10km)
    type: ['car_repair']
  }, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      var viewDepanneur = document.getElementById("view-depanneur");
      viewDepanneur.innerHTML = "";

      // Ajouter un bloc pour chaque dépanneur trouvé
      for (var i = 0; i < results.length; i++) {
        var place = results[i];

        var depanneurElement = document.createElement("div");
        depanneurElement.classList.add("depanneur-element");

        var name = document.createElement("p");
        name.classList.add('name');
        name.innerHTML = place.name;
        depanneurElement.appendChild(name);

        var address = document.createElement("p");
        address.classList.add('address');
        address.innerHTML = place.vicinity;
        depanneurElement.appendChild(address);

        viewDepanneur.appendChild(depanneurElement);
      }
    }
  });
}


function getSinistre(event){
  event.preventDefault();

  var xhrSinistre = new XMLHttpRequest();
  var dataSinistre = new FormData(this);

  xhrSinistre.open('POST','controller/function/sinistre.php?task=sinistre');
  xhrSinistre.send(dataSinistre);

  xhrSinistre.onreadystatechange = function(){
    if (xhrSinistre.readyState == 4 && xhrSinistre.status ==200 ){
      var result = JSON.parse(this.responseText);
      if(result.error == 0){
        findDepanneurs();
        console.log('sinistre execution');
        sinistreResponse.classList.remove('hidden');
      }
    }else if(xhrSinistre.readyState == 4){
      console.log('error sinistre');
    }
  }
  return false;
}

sinistre.addEventListener('submit',getSinistre);