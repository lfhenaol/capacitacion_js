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
