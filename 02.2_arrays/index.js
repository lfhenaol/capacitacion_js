// Creación de arrays
const array1 = new Array();
console.log(array1);

const array2 = [];
console.log(array1);

const array3 = Array.from([1, 2, 3]);
console.log(array3);

// Transformación de los elementos de un array
let lista1 = [1, 2, 3, 4, 5];
lista1 = lista1.map((x) => x * 2);
console.log(lista1);

let lista2 = lista1.reduce((prev, curr) => {
  return prev + curr;
});
console.log(lista2);

let lista4 = [
  [1, 2, 3],
  [4, 5, 6],
]
  .flatMap((item) => item.map((x) => x * 2))
  .reduce((prev, curr) => prev + curr);

// Método includes
let ref1 = ['Granadilla'];
const lista5 = ['Banana', 'Mango', 'Piña', 'Cereza', ref1];

console.log(lista5.includes(ref1));

// Filtrado de datos

const lista6 = ['Ferrari', 'Mazda', 'Toyota', 'KIA', 'Lexus'];
console.log(lista6);
let lista7 = lista6.filter((item) => ['Mazda', 'KIA'].includes(item));
console.log(lista7);
console.log(lista6);

// Reducción de datos

let lista8 = [
  [1, 2, 3],
  [4, 5, 6],
]
  .flatMap((item) => item.map((x) => x * 2))
  .reduce((prev, curr) => prev + curr);

console.log('REDUCE', lista4);

let lista9 = [{ cantidad: 2 }, { cantidad: 3 }, { cantidad: 5 }];

const sumaCantidades = lista9.reduce((prev, curr) => {
  console.log(`PREV ${prev} CURR ${curr.cantidad}`);
  if (prev.cantidad) {
    return prev.cantidad + curr.cantidad;
  } else {
    return prev + curr.cantidad;
  }
}, 0);

/*
const sumaCantidades = lista9.reduce((x, y) => {
  return { cantidad: x.cantidad + y.cantidad };
});
*/
console.log('SUMA CANTIDADES', sumaCantidades);

// Encontrar un dato específico y regresarlo

let lista10 = [{ name: 'Luis' }, { name: 'Jorge' }, { name: 'Carlos' }];
const jorge = lista10.find((item) => item.name === 'Jorge');

console.log(jorge);

let carlos = lista10.filter((item) => item.name === 'Carlos');
carlos = carlos[0];
console.log(carlos);

// Aplanar listas y mapear con deep 1
const lista11 = [[1, 2, 3], [4, 5, 6], [[7, 8]]];
console.log(lista11.flat(2));

console.log(lista11.flatMap((x) => x));

// Paso de listas por referencia y por valor

// Lista por referencia
const objeto = [1, 3, 4, 5, 6];

objeto.push(7);

function alterarObjeto(obj) {
  obj.push(8);
}

alterarObjeto(objeto);

console.log('Referencia de lista mutada', objeto);

// Lista por valor

const objeto2 = [
  'Hello',
  [1, 3, 4],
  { a: 1 },
  function () {
    console.log('Hola');
  },
];
const copiaObjeto2 = JSON.parse(JSON.stringify(objeto2));
console.log('COPIA DE LISTA', copiaObjeto2);

function crearNuevoCampo(objeto) {
  objeto.push(2);
  return objeto;
}

let nuevoObjeto = crearNuevoCampo(copiaObjeto2);
console.log('OBJETO ORIGINAL', objeto2);
console.log('COPIA PARCIAL OBJETO ORIGINAL', nuevoObjeto);

// Librería Lodash
//https://lodash.com/docs/4.17.15
