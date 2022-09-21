// Acceso a parámetros de una función empleando shorthand
const config = {
  url: 'google',
  nombreServidor: 'linux',
  environment: 'prod',
  accesos: 2,
  usuarios: 4,
  aplicaciones: 5,
  estaActivo: true,
  usuariosConectado: 3,
};

function setConfig(config) {
  console.log(config.url);
  console.log(config.nombreServidor);
  console.log(config.environment);
}

function shortSetConfig({ url, nombreServidor, environment, ...otrasConfig }) {
  console.log(url);
  console.log(nombreServidor);
  console.log(environment);
}

// Creación de objetos empleando shorthand

// Creación de funciones dentro de objetos empleando shorthand

// Retornando shorthands en funciones

// Creación de propiedades en objetos empleando propiedades computadas

// Evaluaciones con Operador de encadenamiento opcional

// Evaluaciones con Nullish coalescing operator ("Operador de funsión nulo")

// Evaluaciones con operadores lógicos
