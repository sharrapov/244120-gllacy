function initMap() {
        var uluru = {lat: 59.938554, lng: 30.32248};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
		var image = 'img/pin2.png';
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
		  icon: image
        });
      }