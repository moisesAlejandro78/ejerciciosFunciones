/*let opAritmeticas=document.getElementById("Aritmetica");
let resultado=0;
opAritmeticas.addEventListener("submit", function (e) {
    e.preventDefault();
    let resultado=document.getElementById("resultado");
    let datos=new FormData(opAritmeticas);
    let n1=Number(datos.get("num1"));
    let n2=Number(datos.get("num2"));
    let selectOperaciones=datos.get("operaciones");
    if (selectOperaciones==="suma") {
      resultado.innerText=n1+n2;  
    }
});*/
let n1=0, n2=0, signo="", resultado="", advertencia="";
function calcular() {
  n1=parseInt(document.getElementById("num1").value);
  n2=parseInt(document.getElementById("num2").value);
  signo=document.getElementById("signo").value;
  resultado=document.getElementById("resultado");
  advertencia=document.getElementById("advertencia");
  if (signo==="+") {
    resultado.innerText=n1+n2;
  }
  else if (signo==="-") {
    resultado.innerText=n1-n2;
  }
  else if (signo==="*") {
    resultado.innerText=n1*n2;
  }
  else if (signo==="/") {
    if (n2!=0) {
      resultado.innerText=n1/n2;
    }
    else{
      advertencia.innerText="No se puede dividir entre cero.";
    }
  }
  else{
    advertencia.innerText="Signo, invalido.";
  }
}
let tamMatriz=0, filas=0, columnas=0, matriz=[], divMatriz="";
function generarMatriz() {
  tamMatriz=parseInt(document.getElementById("matrizNXN").value);
  divMatriz=document.getElementById("matriz");
  for (let index = 0; index < tamMatriz; index++) {
    matriz[index]=[];
    for (let index2 = 0; index2 < tamMatriz; index2++) {
      matriz[index][index2]=0;
      divMatriz.innerText+=matriz[index][index2]+ " "; 
    }
    divMatriz.innerText+="\n";
  }
  console.table(matriz);
}
function limpiarCampos() {
  document.getElementById("num1").value="";
  document.getElementById("num2").value="";
  document.getElementById("signo").value="";
  document.getElementById("advertencia").innerText="";
  document.getElementById("resultado").innerText="";
}

