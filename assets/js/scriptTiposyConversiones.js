//Este es un comentario de una sola linea

/*
Este es un comentario
multilinea :D
*/

//alert("Hola Mundo");

// var frasco = "pastillas";
// var frasco = "pasitas con chocolate";
// var frasco = "shampoo";

// console.log(frasco);

/*Tipos de datos primitivos y no primitivos

string -> cadena de texto
number -> numero de operaciones
boolen -> booleano 
undefined -> indefinido
null -> nulo
symbol
object (no es primitivo)*/

/*  Upper CamelCase
    lower camelCase*/

//string - es una cadenade texto, que siempre debe ir entre comillas simples o comillas dobles
//var vaso = "leche";

//number no lleva comillas, y se refiere a un numero con el cual podemos hacer operaciones (sin comillas)

//var edad = 20;

//Boolean (True / False) - tiene dos salidas true o false
//var cuentasPremium = false;

//undefined (no confundir con null) - es un tipo de dato que existe pero no esta definido o inicializado
//var proximaCita;

//null - es un valor que no tenemos pero que declaramos
//var asistenciaInvitado = null;




//typeof es una palabra reservada que nos ayuda a saber que tipo de dato tenemos
//console.log(typeof(edad));

//var es una variable con alcance gkobal (tiene mayor alcance

//let es una variable con alcance local (solo se utiliza dentro de un bloque de codigo)

//const es una constante, es decir que es una variable que no cambia


//CONVERSION DE VARIABLES

// //1. number a string
// var peso = 66;
// console.log(typeof(peso));

// var pesoCadena = peso.toString();
// console.log((peso.toString));
// console.log(typeof(pesoCadena));

// //2. string a number
// var edad = "31";
// console.log(typeof(edad));

// var edadNumero = parseInt(edad);
// console.log(typeof(edadNumero));



//ACTIVIDAD CONVERSION 
//string - cadenas de texto
var nombrePaciente = "Juan Alberto";
var nombreDoctor = "Dr. Alfonso Lopez Valdez";
var cantidadCaries = "4";

//number - datos numericos
var edadPaciente = 24;
var capacidadPacientesPorDoctor = 15;

//boolean - true or false
var requiereAcompanante = edadPaciente < 18;
var dentistaDisponible = false;

//undefined - valores no declarados / opcionales
var telefonoOpcional; 
var citaUrgente;

//null - valores vacios
var apellidosPaciente = null;
var correoElectronico = null;


//CONVERTIR edadPaciente a string

console.log(typeof(edadPaciente)); //mostrar primero tipo de dato
var edadPacienteCadena = edadPaciente.toString(); //convertir a string

console.log(typeof(edadPacienteCadena)); //mostrar tipo de dato despues de conversion

//CONVERTIR cantidadCaries a number

console.log(typeof(cantidadCaries)); //mostrar primero tipo de dato
var cantidadCariesNumber = parseInt(cantidadCaries); //convertir a number

console.log(typeof(cantidadCariesNumber)); //mostrar tipo de dato despues de conversion



