const a = 10;
const b = 20;

function somar(a,b) {

    return a + b;
}

document.querySelector("#Calcular").addEventListener("click",function(){

let valorA = document.querySelector("#valorA").value;
let valorB = document.querySelector("#valorB").value;
if (valorA.length > 0 && valorB > 0){
alert(parseInt(valorA)+ parseInt(valorB));
}else{
  alert("informe o valor o seu calculo");
}
document.getElementById("valorA,valorB").value = "";
});

