function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var myLatlng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatlng,
        zoom: 12,
        streetViewControl: false
      });
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Vous êtes ici'
      });
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: myLatlng,
        radius: 10000,
        type: ['car_repair']
      }, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            var place = results[i];
            var marker = new google.maps.Marker({
              position: place.geometry.location,
              map: map,
              title: place.name
            });
          }
        }
      });
    });
  }
}
