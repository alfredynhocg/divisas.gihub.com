/*
 Author: Alfredo Callizaya Gutierrez<alfredynho.cg@gmail.com>
 Final Test: Bases de javascript
 Date: 23/07/2023
 University: USIP - DIPLOMADO
*/
const btn = document.getElementById('calcular');

btn.addEventListener('click', () => {
  
  var monto = parseFloat(document.getElementById('monto').value);
  
  function validarMonto(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  ans = validarMonto(monto);

  if(!ans)
  {
    alert('Ingrese un monto valido ...');
  }

  var valord = document.getElementById('de').value;
  var valora = document.getElementById('a').value;
  const pos = [10,20,30,40,50,60];
  const div = [1,118.60,2.63,30.41,0.14];
  let enta = 0;
  let entb = 0;

  var resultado = 0;
  let cont = 0;
  
  pos.forEach(item => {
    if (valord == item){
      enta = div[cont];
    };
    cont++;
  });

  cont = 0; 
  pos.forEach(item => {
    if (valora == item){
      entb = div[cont];
    };
    cont++;
  });

  resultado = monto * (entb/enta);
  console.log(entb);
  console.log(enta);
  console.log("Resultado" + resultado);

  document.getElementById('respuesta').value = resultado.toFixed(2);  
})