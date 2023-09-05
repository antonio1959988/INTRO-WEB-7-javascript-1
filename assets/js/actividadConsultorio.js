//string - cadenas de texto
var nombrePaciente = "Juan Alberto";
var nombreDoctor = "Dr. Alfonso Lopez Valdez";

//number - datos numericos
var edadPaciente = 24;
var capacidadPacientesPorDoctor = 15;

//boolean - true or false
var requiereAcompanante = edadPaciente < 18;
var dentistaDisponible = False;

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
