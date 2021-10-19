
  function validar(){

  let edad = document.getElementById("edad").value 
  let peso = document.getElementById("peso").value 
  let  altura= document.getElementById("altura").value;
  let  genero= document.getElementById("genero").value;

  
  if(edad ==="" || peso ===""||altura ==="" ||genero ===""){
alert("comperte los campos")
  }
else{
  altura=altura/100
  altura= Math.pow(altura, 2);
  console.log(altura)

};


}