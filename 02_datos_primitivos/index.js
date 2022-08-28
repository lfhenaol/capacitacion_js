// undefined

const value1 = undefined;
console.log(value1);

// null

const value2 = null;
console.log(value2);

// string
const value3 = 'Hola mundo!';
console.log(value3.includes('o'));

// number, separador de miles _
const value4 = 6_234_232;
console.log(value4);

// Boolean
const value5 = true;
console.log(Boolean(1));

// Symbol ES6

const value6 = Symbol('Hola mundo');
console.log(value6);

// Modulo de tokens
const PI = Symbol();

// Otro Modulo 1
// importo el token PI

const mapping = new Map();
mapping.set(PI, Math.PI);

// Otro modulo 2
// importo mapping
// importo PI
const pi = mapping.get(PI);

// BigInt ES2021
const value7 = 6234876287468736487246856234856734637467364n;
console.log(value7 + 7n);

const value8 = 763248623874632846283746827364823642638476237846;
console.log(BigInt(value8) + BigInt(5));
