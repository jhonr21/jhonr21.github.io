//cambiar datos de productos
// (function() {
    

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


//Almacenar local storage

function guardarLocalStoraage(usu, nom, corr, contra, confir) {

  const objeto = {
    usuario: usu,
    nombre: nom,
    correo: corr,
    contrasena: contra,
    confirmar: confir
  };
  


  //Guardar objeto arrays
  array.push(objeto);

  //7. Almacenar en el local storage
  localStorage.setItem('array', JSON.stringify(array));
}

var myList = [];

    //funcion del carrito

    function outputIt() {
      var restoredFruits = JSON.parse(localStorage.getItem('nombres'));
     
    }


function compra() {
  const formato = document.getElementById('formato').value;

  console.log(formato)

  if (formato === "0") {
    alert("selccione el formato")
  }
  else {
    

    

 

    if (localStorage.getItem("nombres") === null) {

      var fruits =
      { 
        queue: 
        [
        
        ]
      };
      localStorage.setItem('nombres', JSON.stringify(fruits));
    }
    
    
      var restoredFruits = JSON.parse(localStorage.getItem('nombres'));
      
      restoredFruits.queue.push({
        id:  Math.floor(Math.random() * (100 - 1 + 1)) + 1,
        name: window.localStorage.getItem('nombre'),
        imagen: window.localStorage.getItem('imagen'),
        descripcion: window.localStorage.getItem('descripcion'),
        precio: window.localStorage.getItem('precio')
      });
      localStorage.setItem('nombres', JSON.stringify(restoredFruits));
    

      
      window.open("../ecommerce.html");
      window.close("../ecommerce.html");



  }


}


  
function comprar(){
  window.open("../compra.html");
  window.close("../compra.html.html");
}

function finalizar(){
  nombre= document.getElementById('input1').value;
  correo= document.getElementById('input2').value;
  tarjeta= document.getElementById('input3').value;
  vencimiento= document.getElementById('vencimiento').value;
  cvv= document.getElementById('CVV').value;
  
    if (nombre  === ""|| correo  === ""|| tarjeta === ""|| vencimiento === ""|| cvv === "" ) {
   alert("Complete los campos")
} else {
   alert("Gracias por su compra")
   sessionStorage.clear()
}
  }
