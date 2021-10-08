
 

(function() {

  // Agregas el nombre
  let nombre = window.localStorage.getItem('nombre');
  const list = document.getElementById("titulopelicula");
  list.innerHTML += nombre;

  
  // Agregas la descripcion
  let descripcion = window.localStorage.getItem('descripcion');
  const agregardescripcion = document.getElementById("descripcion");
  agregardescripcion.innerHTML += descripcion;
  
  // Agregas la precio
  let precio = window.localStorage.getItem('precio');
  const agregarprecio = document.getElementById("precio");
  agregarprecio.innerHTML += precio;

  
  // Agregas la imagen
  let imagen = window.localStorage.getItem('imagen');
  // const agregarimagen = document.getElementById("imagen");
  document.getElementById("imagen").src=imagen;

  // agregardescripcion.innerHTML += descripcion;



})();