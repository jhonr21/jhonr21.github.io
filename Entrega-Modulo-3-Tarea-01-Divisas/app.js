let monedainic;
let monedaConv;
let valortotal;
let cantidad;
let valorarray;
let valorfinal;


let dolar = [
  3790.00,
  20.45,
  0.86,
  0.74
]

let Euro = [
    4410.28,
    23.88,
    1.16,
    0.74
  ]

  let libras = [
    5136,
    27.79,
    1.35,
    1.16
  ]  

  let PesosCol = [
    0.00019,
    0.0054,
    0.00026,
    0.00023  
  ]  

  let mexicanPesos = [
    0.036,
    184.73,
    0.048,
    0.042
  ]
  
  


  function validar(){

  monedainic = Number(document.getElementById("monedaIni").value)
  monedaConv = Number(document.getElementById("monedaConv").value)
  cantidad = Number(document.getElementById("cantidad").value)
    
  //valor 1
    if (monedainic == 1 & monedaConv ==2){
      Euro.forEach( function(valor, indice, array) {
         valorarray = Euro[Euro.length - 3]
         
      });

      
      valorfinal= cantidad * valorarray;
      document.getElementById("resultado").value="El resultado es: "+valorfinal +" MXN "
    
  }

    else if (monedainic == 1 & monedaConv ==3){
      Euro.forEach( function(valor, indice, array) {
         valorarray = Euro[Euro.length - 2]
         document.getElementById("resultado").value="El resultado es: "+valorfinal +" USD "
      });
      valorfinal= cantidad * valorarray;
      

    }
    else if (monedainic == 1 & monedaConv ==5){
      Euro.forEach( function(valor, indice, array) {
         valorarray = Euro[Euro.length - 1]
        document.getElementById("resultado").value="El resultado es: "+valorfinal +" GBP "
      });
      valorfinal= cantidad * valorarray;
      

    }

    else if (monedainic == 1 & monedaConv ==4){
      Euro.forEach( function(valor, indice, array) {
         valorarray = Euro[0]
        document.getElementById("resultado").value="El resultado es: "+valorfinal +" COP "
      });
      valorfinal= cantidad * valorarray;
      

    }
    else{
      document.getElementById("resultado").value="Los datos son incorrectos revise"
    }



    //VALOR 2
    if (monedainic == 2 & monedaConv ==1){
      mexicanPesos.forEach( function(valor, indice, array) {
         valorarray = mexicanPesos[mexicanPesos.length - 1]
         
      });
      valorfinal= cantidad * valorarray;
    
      document.getElementById("resultado").value="El resultado es: "+valorfinal +" EUR "
    }

    else if (monedainic == 2 & monedaConv ==3){
      mexicanPesos.forEach( function(valor, indice, array) {
         valorarray = mexicanPesos[mexicanPesos.length - 2]
         
      });
      valorfinal= cantidad * valorarray;
      document.getElementById("resultado").value="El resultado es: "+valorfinal +" USD "

    }
    else if (monedainic == 2 & monedaConv ==4){
      mexicanPesos.forEach( function(valor, indice, array) {
         valorarray = mexicanPesos[mexicanPesos.length - 3]
         
      });

      valorfinal= cantidad * valorarray;
      
      document.getElementById("resultado").value="El resultado es: "+valorfinal +" COP "
    }

    else if (monedainic == 2 & monedaConv ==5){
      mexicanPesos.forEach( function(valor, indice, array) {
         valorarray = mexicanPesos[0]
         
      });
      valorfinal= cantidad * valorarray;
      document.getElementById("resultado").value="El resultado es: "+valorfinal +" GBP "
    }



  //VALOR 3
  if (monedainic == 3 & monedaConv ==1){
    dolar.forEach( function(valor, indice, array) {
       valorarray = dolar[dolar.length - 2]
       
    });
    valorfinal= cantidad * valorarray;
    document.getElementById("resultado").value="El resultado es: "+valorfinal +" EUR "
  }

  else if (monedainic == 3 & monedaConv ==2){
    dolar.forEach( function(valor, indice, array) {
      valorarray = dolar[dolar.length - 3]
    });
    valorfinal= cantidad * valorarray;
    document.getElementById("resultado").value="El resultado es: "+valorfinal +" MXN "
  }
  else if (monedainic == 3 & monedaConv ==4){
    dolar.forEach( function(valor, indice, array) {
      valorarray = dolar[0]
       
    });
    valorfinal= cantidad * valorarray;
    document.getElementById("resultado").value="El resultado es: "+valorfinal +" COP "
  }

  else if (monedainic == 3 & monedaConv ==5){
    dolar.forEach( function(valor, indice, array) {
      valorarray = dolar[dolar.length - 1]
       
    });
    valorfinal= cantidad * valorarray;
    document.getElementById("resultado").value="El resultado es: "+valorfinal +" GBP "

  }
  //VALOR 4
  if (monedainic == 4 & monedaConv ==1){
    PesosCol.forEach( function(valor, indice, array) {
       valorarray = PesosCol[PesosCol.length - 1]
       
    });
    valorfinal= cantidad * valorarray;
    document.getElementById("resultado").value="El resultado es: "+valorfinal +" EUR "
  }

  else if (monedainic == 4 & monedaConv ==2){
    PesosCol.forEach( function(valor, indice, array) {
      valorarray = PesosCol[PesosCol.length - 3]
    });
    valorfinal= cantidad * valorarray;
    document.getElementById("resultado").value="El resultado es: "+valorfinal +" MXN"
  }
  else if (monedainic == 4 & monedaConv ==3){
    PesosCol.forEach( function(valor, indice, array) {
      valorarray = PesosCol[PesosCol.length - 2]
    });
    valorfinal= cantidad * valorarray;
    document.getElementById("resultado").value="El resultado es: "+valorfinal +" USD "
  }

  else if (monedainic == 4 & monedaConv ==5){
    PesosCol.forEach( function(valor, indice, array) {
      valorarray = PesosCol[0]
       
    });
    valorfinal= cantidad * valorarray;
    document.getElementById("resultado").value="El resultado es: "+valorfinal +" GBP "

  }

  //VALOR 5
  if (monedainic == 5 & monedaConv ==1){
    libras.forEach( function(valor, indice, array) {
       valorarray = libras[PesosCol.length - 1]
       
    });
    valorfinal= cantidad * valorarray;
    document.getElementById("resultado").value="El resultado es: "+valorfinal +" EUR "
  }

  else if (monedainic == 5 & monedaConv ==2){
    libras.forEach( function(valor, indice, array) {
      valorarray = libras[libras.length - 3]
    });
    valorfinal= cantidad * valorarray;
    document.getElementById("resultado").value="El resultado es: "+valorfinal +" MXN"
  }
  else if (monedainic == 5 & monedaConv ==3){
    libras.forEach( function(valor, indice, array) {
      valorarray = libras[libras.length - 2]
    });
    valorfinal= cantidad * valorarray;
    document.getElementById("resultado").value="El resultado es: "+valorfinal +" USD "
  }

  else if (monedainic == 5 & monedaConv ==4){
    libras.forEach( function(valor, indice, array) {
      valorarray = libras[0]
      document.getElementById("resultado").value="El resultado es: "+valorfinal +" USD "
    });
    valorfinal= cantidad * valorarray;
    document.getElementById("resultado").value="El resultado es: "+valorfinal +" COP "

  }


  }