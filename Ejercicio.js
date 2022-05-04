// 1.  Ejercicios destructuring
// Dado el siguiente objeto:

// Extrae la empleada Ana con todos sus datos personales:
// Extrae el email del empleado Luis

const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];



console.log(empleados [1]);

const [ luisMail, ,  ] = empleados
const { email } = luisMail

console.log(email);


// Usa la desestructuración para intercambiar los valores de a y b
// Inicialmente
let a = 5;
let b = 3;
// Al final
// let a = 3;
// let b = 5;

// [a,b] = [b,a]
// console.log(a,b);
let nums=[a,b];

console.log(a);


// 2. Ejercicios spread/rest
// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
//   sumEveryOther(6, 8, 2, 3, 1); //20
//   sumEveryOther(11, 3, 12); //26 

const sumEveryOther=(...todos)=>{
    return todos.reduce((a,b)=> a+b) 
    }

console.log(sumEveryOther(2,4,8,10,33))

// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.

addOnlyNums = (...cosasRandom) => {
   numeros = cosasRandom.filter(num => typeof num === 'number')
   laSuma = numeros.reduce((a,b)=> a+b)
   return laSuma
};

// addOnlyNums(1, 'perro', 2, 4); //7
console.log(addOnlyNums(7, "gato", 3, 11))



// Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

counterTheArgs = (...Args) =>{
    return Args.length
}

console.log(counterTheArgs(21,'banana','pollo', 'pato', 'oso'))

// countTheArgs('gato', 'perro'); //2
// countTheArgs('gato', 'perro', 'pollo', 'oso'); //4

// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

arr1 = ['fistro','ataquerrr','nopuedorr','pecadorr'];
arr2 = [ 22, 66, 33, 88, 55]


combineTwoArrays =(a1,a2) => {
    mixArr = [...a1, ...a2];
    return mixArr;

}

console.log(combineTwoArrays(arr1,arr2));



// 3. Extras
// Dado el siguiente objeto:
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};
// Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana
// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow;

const { today:maximaHoy, tomorrow:maximaManana }= HIGH_TEMPERATURES;

console.log(maximaHoy)
console.log(maximaManana)
 
// Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
// ; 
// //['gato', 'pollo', 'cerdo']
// onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

onlyUniques = (...values) => {
  var noRep = [...new Set(values)]
  return noRep
  
}

console.log(onlyUniques(1, 1, 2, 2, 3, 8, 6, 7, 8));
console.log(onlyUniques('gato', 'pollo', 'cerdo', 'cerdo','gato', 'periquito', 'periquito'));
// En JavaScript, la clase Set puede obtener todos esos elementos no duplicados de un conjunto.


// Array.includes, que permite determinar si un elemento existe o no dentro del arreglo.

