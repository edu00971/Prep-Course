// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}

var nombres = ['eduardo', 'ana' , 'meliza' , 'estefany'];

console.log(nombres[0]);
// respuesta = 'eduardo'

nombres[0];
//// respuesta = 'eduardo'




function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

var nombres = ['eduardo', 'ana' , 'meliza' , 'estefany'];

console.log(nombres[nombres.length - 1]);
// respuesta = 'estefany'

nombres[nombres.length -1];
//respuesta = 'estefany'




function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

var nombres = ['eduardo', 'ana' , 'meliza' , 'estefany'];

console.log(nombres.length);
// respuesta = 4

nombres.length;
/// respuesta = 4




function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevoArray = [];
  for(var i = 0; i < array.length; i++) {
    nuevoArray[i] = array[i] + 1;
  }

  return nuevoArray;

}

var nombres = ['eduardo', 'ana' , 'meliza' , 'estefany'];

incrementarPorUno(nombres);
//respuesta =['eduardo1', 'ana1', 'meliza1', 'estefany1']

function aumentar(array) {
  var nuevoarray = [];
  for(var n=0; n<array.length; n++) {
    nuevoarray[n] = array[n] + 'hola';
  }
  
  return nuevoarray;
  
}

aumentar(nombres);
// respuesta= ['eduardohola', 'anahola', 'melizahola', 'estefanyhola']


 

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array[array.length] = elemento;
  return array;
}

var nombres = ['eduardo', 'ana' , 'meliza' , 'estefany'];

agregarItemAlFinalDelArray(nombres,'hola');
// respuesta=['eduardo', 'ana', 'meliza', 'estefany', 'hola']


nombres.push('mamu');
// respuesta = ['eduardo', 'ana', 'meliza', 'estefany', 'mamu']


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift('mileny');
  return array 
}

var nombres = ['eduardo', 'ana' , 'meliza' , 'estefany'];

nombres.unshift('pilar');
// respuesta=['pilar' , 'eduardo', 'ana' , 'meliza' , 'estefany']




function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  console.log('hello '+ palabras); {
    return palabras;
  }
}
 

dePalabrasAFrase('juan');
// respuesta= 'hello juam'

function saludar(nombre) {
  console.log( 'hola bienvenido ' + nombre); {
    return nombre;
  }
}

saludar('pedro');
//respuesta= 'hola bienvenido pedro'



function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0 ; i  <array.length ; i++) {
    if (array[i] === elemento) {
      return true;
    }
  }
  return false;
}

var nombres = ['eduardo', 'ana' , 'meliza' , 'estefany'];

arrayContiene(nombres, 'ana');
// true

arrayContiene(nombres, 'juan');
//false


  function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    var suma = 0;
    for (var i = 0; i < numeros.length; i++) {
      suma = suma + numeros[i];
    }
    return suma;

  }

  

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  return agregarnumeros(resultadosTest) / resultadosTest.length;
}



function numeroMasGrande(numeros) {
  var maximo = numeros[0];
  for (var i = 1; i<numeros.length; i++) {
    if(numeros[1]> maximo) {
      maximo=numeros[i];
    }
  }
  return maximo;
}


function puedetomar(edad) {
  if (edad>18) {
    return true;
  }
  else {
    return false;
  }
}

puedetomar(15);
//respuesta = 'false'

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(argumentos.length < 1) return 0;
  var total =1;
  for (var i= 0; i <argumentos.length; i++) {
    total=total*agumentos[i];
  }
  return total;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let contador = 0;
  for(let i=0; i<arreglo.length; i++) {
    if (arreglo[i] >18) {
      contador++
    }
  }
  return contador
}

function puedetomar(edad) {
  if (edad>18) {
    return true;
  }
  else {
    return false;
  }
}

puedetomar(15);
//respuesta = 'false'

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7){
    return 'es fin de semana';
  }
  return 'es dia laboral';
}


diaDeLaSemana('lunes');
// respuesta = 'es dia laboral'


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let num=n.toString()
  if (num.charAt(0) === "9") {
    return true;
  }
  return false;
}



function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (var i =0 ; i < arreglo.length - 1; i++) {
    if(arreglo[i] !== arreglo[i+1]){
      return false
    }
  }
  return true
} 
  

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = [];
  for(let i= 0; i<array.length; i++) {
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      nuevoArray.push(array[i]);
    }
  }
  if(nuevoArray.length < 3) {
    return "No se encontraron los meses pedidos";
  }
  else {
      return nuevoArray;
  }
}

function meses(array){
  var nuevoarray = [];
  for (let i=0; i<array.length; i++) {
    if (array[i] === 'enero'||array[i] === 'marzo' || array[i] === 'noviembre' ) {
      nuevoarray.push(array[i]);
    }
  }
  if (nuevoarray.length <3) {
    return 'no se encontraron los meses pedidos';
  }
  else {
    return nuevoarray;
  }
}

var mes=['enero', 'febrero', 'marzo', 'abril' , 'mayo', 'junio', 'julio', 'agosto', 'setiembre', 'octubre' , 'noviembre', 'diciembre'];

meses(mes);
// ['enero', 'marzo', 'noviembre']



function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArray = [];
  for(let i= 0; i < array.length; i++) {
    if(array[i] > 100) {
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
}



function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    suma = suma + 2;
    if(suma === i) break;
    else {
      array.push(suma);
    }
  }
  if(i < 10) {
    return 'Se interrumpió la ejecución';
  }
  else {
      return array;
  }
}

}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    if(i === 5) continue;
    else {
      suma = suma + 2;
      array.push(suma);
    }
  }
  return array;
}

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
