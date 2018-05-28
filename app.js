//Crea dos funciones, add y multiply.
//Cada una debe tomar dos argumentos.
//La función add debe sumar sus argumentos y
//devolver el resultado. La funcion multiply
//debe multiplicar sus argumentos. Usando solamente estas dos funciones,
//resuelva este simple problema matemático: 36325 * (9824 + 777).

const add = function (x , y) {
    const suma_argumentos = (x + y);
    return suma_argumentos;
  }
  
  const multiply = function (a , b) {
    const multiplicacion_argumentos = (a * b);
    return multiplicacion_argumentos;
  }
  
  const sum = add(9824, 777);
  const mul = multiply(sum, 36325);
  console.log( 'el resultado de 36325 * (9824 + 777) es: ', mul);
  
  