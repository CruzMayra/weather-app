// condicional para verificar si el navegador soporta la geolocaliación
if(navigator.geolocation){
  getLocation()
} else {
  console.log('error');
}

// función que obtiene la geolocaliación
function getLocation(){
  function localization(posicion){
    let latitude = posicion.coords.latitude;
    let longitude = posicion.coords.longitude;
    let time = Math.round((Date.now()/1000));
    console.log(latitude,longitude);
    $.ajax({
      url: 
    }).done(getForecast);
  }
  function error(){
    console.log('no se puedo obtener tu ubicación');
  }
  let posicion = navigator.geolocation.getCurrentPosition(localization,error);
}

function getForecast(data){
  console.log(data);
}
