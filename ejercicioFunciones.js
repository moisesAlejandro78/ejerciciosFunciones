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
let n1 = 0, n2 = 0, signo = "", resultado = "", advertencia = "";
function calcular() {
  n1 = parseInt(document.getElementById("num1").value);
  n2 = parseInt(document.getElementById("num2").value);
  signo = document.getElementById("signo").value;
  resultado = document.getElementById("resultado");
  advertencia = document.getElementById("advertencia");
  if (signo === "+") {
    resultado.innerText = n1 + n2;
  }
  else if (signo === "-") {
    resultado.innerText = n1 - n2;
  }
  else if (signo === "*") {
    resultado.innerText = n1 * n2;
  }
  else if (signo === "/") {
    if (n2 != 0) {
      resultado.innerText = n1 / n2;
    }
    else {
      advertencia.innerText = "No se puede dividir entre cero.";
    }
  }
  else {
    advertencia.innerText = "Signo, invalido.";
  }
}
let tamMatriz = 0, filas = 0, columnas = 0, matriz = [], divMatriz = "";
function generarMatriz() {
  tamMatriz = parseInt(document.getElementById("matrizNXN").value);
  divMatriz = document.getElementById("matriz");
  for (let index = 0; index < tamMatriz; index++) {
    matriz[index] = [];
    for (let index2 = 0; index2 < tamMatriz; index2++) {
      matriz[index][index2] = 0;
      divMatriz.innerText += matriz[index][index2] + " ";
    }
    divMatriz.innerText += "\n";
  }
  console.table(matriz);
}
function limpiarCampos() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("signo").value = "";
  document.getElementById("advertencia").innerText = "";
  document.getElementById("resultado").innerText = "";
}
let numero = 0, convertidoTxt = "", pResultado = "";
function transformar() {
  numero = parseInt(document.getElementById("numero").value);
  pResultado = document.getElementById("resultadoTransformacion");
  if (numero >= 0 && numero <= 20) {
      if (numero == 0) {
        pResultado.innerText += "cero";
      }
      else if (numero == 1) {
        pResultado.innerText += "uno";
      }
      else if (numero == 2) {
        pResultado.innerText += "dos";
      }
      else if (numero == 3) {
        pResultado.innerText += "tres";
      }
      else if (numero == 4) {
        pResultado.innerText += "cuatro";
      }
      else if (numero == 5) {
        pResultado.innerText += "cinco";
      }
      else if (numero == 6) {
        pResultado.innerText += "seis";
      }
      else if (numero == 7) {
        pResultado.innerText += "siete";
      }
      else if (numero == 8) {
        pResultado.innerText += "ocho";
      }
      else if (numero == 9) {
        pResultado.innerText += "nueve";
      }
      else if (numero == 10) {
        pResultado.innerText += "diez";
      }
      else if (numero == 11) {
        pResultado.innerText += "once";
      }
      else if (numero == 12) {
        pResultado.innerText += "doce";
      }
      else if (numero == 13) {
        pResultado.innerText += "trece";
      }
      else if (numero == 14) {
        pResultado.innerText += "catorce";
      }
      else if (numero == 15) {
        pResultado.innerText += "quince";
      }
      else if (numero == 16) {
        pResultado.innerText += "dieciseis";
      }
      else if (numero == 17) {
        pResultado.innerTexto += "diecisiete";
      }
      else if (numero == 18) {
        pResultado.innerText += "dieciocho";
      }
      else if (numero == 19) {
        pResultado.innerText += "diecinueve";
      }
      else if (numero == 20) {
        pResultado.innerText += "veinte";
      }
  }
  else {
    pResultado.innerText = "Introduzca un numero entre 0 y 20"
  }
}

