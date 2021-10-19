
   
  (function() {

    let precio = 0;
    var detallesp = JSON.parse(localStorage.getItem("nombres"));
    
    console.log(detallesp.queue);
    var ppf = detallesp.queue

    
    


    for (i = 1; i < (detallesp.queue).length; i++) {
     //mostrar en carrito
      document.getElementById('productosguardados').innerHTML += "<tr>" + "<th class='texto-1' scope='row'>" + i +"</th><td class='table__productos'>"+ "<img id='imagencarrito' src='"+ detallesp.queue[i].imagen +"' alt=''>"+ "<br><br>" + "<h4 id='descripcion' class=''>"+detallesp.queue[i].descripcion + "</h4></td><td id='precio' class='table__price'><p id='preciocarrito'>"+ detallesp.queue[i].precio  +"</p></td><td class='table__cantidad'><button class='delete btn btn-danger deletemas' id='borrar"+i+"'  >x </button></td></tr>" ;
     // obtener percio
    var a = parseInt(detallesp.queue[i].precio)

    precio += a;
    precio
//borrar datos
    document.getElementById('borrar'+[i]).onclick = function(){

      var borrarnombre  = JSON.parse(localStorage.getItem('nombres'));  
      borrarnombre.queue.shift();
      localStorage.setItem('nombres', JSON.stringify(borrarnombre));
      outputIt();
      location.reload();

    }



    };


    document.getElementById('totalFinal').innerHTML += "TOTAL "+precio;
    // precifinal = precio


  
  })();



  function outputIt() {
    var restoredFruits = JSON.parse(localStorage.getItem('nombres'));
  
  }

