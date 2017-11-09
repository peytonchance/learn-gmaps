


function initMap() {
  var homes = [
   {
     "location": "maryland",
     "latitude": 39.258539,
     "longitude": -75.837179
   },
   {
     "location": "carolina",
     "latitude": 35.908928,
     "longitude": -79.049317
   },
   {
     "location": "quito",
     "latitude": -0.141954,
     "longitude": -78.477764
   },
   {
     "location": "shenandoah",
     "latitude": 39.16644,
     "longitude": -78.162418
   }];

  for (i=0; i< homes.length; i++){
    var tempLatitude = homes[i]["latitude"];
    var tempLongitude = homes[i]["longitude"];
    var tempLocation = homes[i]["location"];
    console.log(tempLatitude);
  var LatLng = {lat: tempLatitude, lng: tempLongitude};
  var map = new google.maps.Map(document.getElementById(tempLocation), {
    zoom: 12,
    center: LatLng
  });
  var marker = new google.maps.Marker({
    position: LatLng,
    map: map
  });
  }
}
