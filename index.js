let nombre = "magali";
console.log(nombre);

let edad = 22;
console.log(edad);
let esMayorDeEdad = 18;

if(edad >= esMayorDeEdad) {
console.log("sos mayor de edad");
} else{
    console.log("sos menor de edad");
}

let anioDeNacimiento = 2001;
let anioActual = 2023;
let edad2 = anioActual - anioDeNacimiento;

console.log(edad2);

let num1 = 25;
let num2 = 15;
let resultadoSuma = num1 + num2;
console.log(resultadoSuma);

let resultadoResta = num1 - num2;
console.log(resultadoResta);

let resultadoMult = num1 * num2;
console.log(resultadoMult);

let resultadoDiv = num1 / num2;
console.log(resultadoDiv);

let moduloDiv = num1 % num2;
console.log(moduloDiv);
 
num1 += 1;
console.log(num1)
num2 += 1;
console.log(num2)

num1 -= 1;
console.log(num1)
num2 -= 1;
console.log(num2)

let igualDesigual = num1 == num2;
console.log(igualDesigual)

let mayorMenor = num1 > num2;
console.log(mayorMenor)
let menorMayor = num1 < num2;
console.log(menorMayor) 
let igualMayor = num1 >= num2;
console.log(igualMayor)
let igualMenor = num1 <= num2;
console.log(igualMenor)

let esAdolescente;

if (edad >= 13 && edad <= 19) {
  esAdolescente = true;
} else {
  esAdolescente = false;
}

console.log(esAdolescente);

let esNinoOJubilado;

if (edad < 13 || edad > 65) {
  esNinoOJubilado = true;
} else {
  esNinoOJubilado = false;
}

console.log(esNinoOJubilado);

if (esMayorDeEdad) {
  console.log("Puedes votar");
} else {
  console.log("No puedes votar");
}

let puntaje = 75;

if (puntaje < 60) {
  console.log("Reprobado");
} else if (puntaje >= 60 && puntaje < 90) {
  console.log("Aprobado");
} else if (puntaje >= 90) {
  console.log("Excelente");
} 

prompt("Ingrese su edad:");

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("No eres mayor de edad.");
}

let contraseña = "user2023";
let contraseñaIngresada = prompt("Ingrese la contraseña:");

if (contraseñaIngresada === contraseña) {
  console.log("La contraseña es correcta.");
} else {
  console.log("La contraseña es incorrecta.");
}

let dividendo = parseFloat(prompt("Ingrese el dividendo:"));
let divisor = parseFloat(prompt("Ingrese el divisor:"));

if (divisor !== 0) {
  let resultado = dividendo / divisor;
  console.log("El resultado de la división es: " + resultado);
} else {
  console.log("Error: No se puede dividir entre cero.");
}

let numero = parseInt(prompt("Ingrese un número entero:"));

if (numero % 2 === 0) {
  console.log("El número es par.");
} else {
  console.log("El número es impar.");
}

let ingresosMensuales = parseFloat(prompt("Ingrese sus ingresos mensuales en pesos:"));

if (edad > 16 && ingresosMensuales >= 10000) {
  console.log("Debe tributar.");
} else {
  console.log("No debe tributar.");
}

let rentaAnual = parseFloat(prompt("Ingrese su renta anual:"));
let tipoImpositivo;

if (rentaAnual < 10000) {
  tipoImpositivo = "5%";
} else if (rentaAnual >= 10000 && rentaAnual < 20000) {
  tipoImpositivo = "15%";
} else if (rentaAnual >= 20000 && rentaAnual < 35000) {
  tipoImpositivo = "20%";
} else if (rentaAnual >= 35000 && rentaAnual < 60000) {
  tipoImpositivo = "30%";
} else {
  tipoImpositivo = "45%";
}
console.log("El tipo impositivo correspondiente a su renta anual es: " + tipoImpositivo);
 
let puntuacion = parseFloat(prompt("Ingrese su puntuación:"));
let nivel;
let cantidadDinero;

if (puntuacion === 0.0) {
  nivel = "Inaceptable";
  cantidadDinero = 0;
} else if (puntuacion === 0.4) {
  nivel = "Aceptable";
  cantidadDinero = 2400 * puntuacion;
} else if (puntuacion >= 0.6) {
  nivel = "Meritorio";
  cantidadDinero = 2400 * puntuacion;
} else {
  nivel = "Puntuación inválida";
  cantidadDinero = 0;
}
console.log("Su nivel de rendimiento es: " + nivel);
console.log("La cantidad de dinero que recibirá es: $" + cantidadDinero);

let precioEntrada;

if (edad < 4) {
  precioEntrada = 0;
} else if (edad >= 4 && edad <= 18) {
  precioEntrada = 5;
} else {
  precioEntrada = 10;
}
console.log("El precio de la entrada es: $" + precioEntrada);


























