
function datos() {
  var datosForm={
    latitud: document.getElementById('latitud').value,
    longitud: document.getElementById('longitud').value,
    tipo: document.getElementById('tipo').value,
    titulo: document.getElementById('titulo').value
  }
  localStorage.setItem("latitud", datosForm.latitud);
  localStorage.setItem("longitud", datosForm.longitud);
  localStorage.setItem("tipo", datosForm.tipo);
  localStorage.setItem("titulo", datosForm.titulo);
  localStorage.setItem("pagina", 'mapa.html');
}

function mapa() {
    //mostramos el mapa
    var mapa= document.createElement('div');
    mapa.id = 'mapa';
    mapa.style.width = '700px';
    mapa.style.height= '500px';
    document.getElementById("contenedor").appendChild(mapa);
    //objeto de google maps formado por la longitud y la latitud
    var coordenadas = new google.maps.LatLng(localStorage.getItem("latitud"), localStorage.getItem("longitud"));
    //opciones de visualizacion del mapa.
    var tipo=localStorage.getItem("tipo");
    var opciones = {
      zoom: 15,
      center: coordenadas,
      mapTypeId: tipo
    };

    //creamos un objeto mapa de google con el div y las opciones
    var objetoMapa= new google.maps.Map(mapa, opciones);

    var marcador = new google.maps.Marker({
      position: coordenadas,
      map: objetoMapa,
      title: localStorage.getItem("titulo")
    });
}

function borrarOpciones() {
  localStorage.clear();
  window.location='index.html';
}
