// Creación( de objetos
const obje = Object();
console.log(obje);

const obje1 = { b: 1 };
console.log(obje1);

// Obtener claves de objetos
const obje2 = { value1: 1, value2: 2, value3: 3, other: { b: 1 } };
console.log(obje2);

console.log(Object.keys(obje2));
console.log(Object.keys(obje2.other));

// Obtener valores de objetos
console.log(Object.values(obje2));
console.log(Object.values(obje2.other));

// Obtener entradas de objetos
console.log(Object.entries(obje2));
console.log(Object.entries(obje2.other));

// Creación de objetos a partir de listas de entradas
console.log(Object.fromEntries([['valor2', 5]]));

// Date y la librería date-fns(https://date-fns.org/)
const timestamp = new Date();
console.log(timestamp.toISOString());
console.log(timestamp.toString());
console.log(timestamp.toLocaleDateString());

// Paso de objetos por referencia y por valor

// Objetos por referencia
const objeto = { valor1: 1 };

objeto.valor2 = 3;

function alterarObjeto(obj) {
  obj.valor5 = 6;
}

alterarObjeto(objeto);

console.log(objeto);

// Copia de objetos y paso de argumentos por valor

const objeto2 = {
  valor1: 'Hello',
  lista: [1, 3, 4],
  objeto: { a: 1 },
  metodo: function () {
    console.log('Hola');
  },
};
const copiaObjeto2 = JSON.parse(JSON.stringify(objeto2));
console.log(copiaObjeto2);

function crearNuevoCampo(objeto) {
  objeto.nuevoCampo = 2;
  return objeto;
}

let nuevoObjeto = crearNuevoCampo(copiaObjeto2);
console.log(objeto2);
console.log(nuevoObjeto);
