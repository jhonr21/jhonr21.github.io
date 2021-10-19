//cambiar datos de productos

function CallProducto(id){
  
  let str = id;
  const myArr = str.split("_");

  let nombre = myArr[0];
  let precio = myArr[1];
  let imagen = myArr[2];
  let descripcion = myArr[3];

 

  localStorage.setItem("nombre", nombre);
  localStorage.setItem("precio", precio);
  localStorage.setItem("imagen", imagen);
  localStorage.setItem("descripcion", descripcion);
   
      window.location.replace("producto.html");


}


//Guardar datos registro local storage

let array=[];

function capturadatos(){
  const usuario= document.getElementById('inputusuario').value;
  const nombre= document.getElementById('inputnombre').value;
  const correo= document.getElementById('inputcorreo').value;
  const contrasena= document.getElementById('inputcontrasena').value;
  const confirmar= document.getElementById('inputconfirmar').value;
  console.log(usuario, nombre,correo,contrasena,confirmar );

  if(contrasena=== confirmar){
    guardarLocalStoraage(usuario, nombre,correo,contrasena,confirmar );
    alert("usuario registrado")

  }

  else{
    alert("verifique contrasena")
  }
}

let form= document.querySelector('.formulario');

//controlar error
form.addEventListener('submit', (e) => {
    e.preventDefault();
    capturadatos();
})

//Almacenar local storage

const guardarLocalStoraage = (usu,nom,corr,contra,confir) =>{
  
 const objeto = {
  usuario: usu,
  nombre: nom,
  correo: corr,
  contrasena: contra,
  confirmar:confir
 }
 console.log(objeto);


//Guardar objeto arrays
array.push(objeto);

//7. Almacenar en el local storage
    localStorage.setItem('array',JSON.stringify(array));}

    //funcion del carrito
    function compra(params) {
      window.open(carrito.html)
    }
    