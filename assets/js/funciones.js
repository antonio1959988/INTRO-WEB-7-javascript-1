//FUNCIONES TRADICIONALES
/* 
    - Una funcion es un bloque de codigo que realiza una tarea especifica, cuando se le llama
    - Cada funcion de javascript es un objeto funcion
*/

function saludar(){
    console.log("Hola soy una funcion");
}

saludar();
saludar();
saludar();

/*Las funciones son simplemente objetos especiales con la capacidad adicional de ser invocados (llamadas como funciones). Esto significa que puedes asignar funciones a variables, pasarlas como argumentos a otras funciones y devolver funciones desde otras funciones. Esto facilita la creacion de funciones de orden superior, como funciones de devolucion de llamada y funciones que generan otras funciones.

*/

//DECLARAR FUNCIONES
/*
    - La palabra reservada function, que nos indica que estamos definiendo una funcion
    - El nombre de la funcion, dependiendo de la accion a realizar
    - Un par de parentesis () despues del nombre. Puede contener parametros. En este caso no tenemos ninguno
    - Seguido de un juego de llaves para cerrar el bloque de codigo.
    - Dependiendo de las instrucciones dentro del cuerpo de la funcion y del proposito de la misma, se determina si la funcion retorna un valor
*/

//LLAMAMOS UNA FUNCION Y LE VAMOS A ALMACENAR UN RESULTADO
function suma(a, b){
    return a + b;
}

var resultado = suma(5,3); //Almacenar funcion en una variable
console.log(resultado); //funcion

/*La función suma toma dos argumentos (a y b) y devuelve la suma de estos dos valores. Luego, llamamos a la función y almacenamos el resultado en la variable resultado. */

//funcion que muestra un mensaje en la consola
function saludar2(nombre){
    console.log("Hola, " + nombre + "!");
}

//Llamamos a la funcion saludar a alguien
saludar2("Antonio"); //imprimir el saludo

/*
    - La funcion saludar toma un argumento (nombre) y muestra un mensaje en la consola. Aunque la función no devuelve un valor explícitamente con return, realiza una acción (mostrar un mensaje) cuando se llama. 
*/

//Hoisting
/*
    - Yo puedo invocar una funcion antes de siquiera declararla
    - Es fundamental en el entendimiento de la forma en que se ejecuta nuestro codigo de JS, esto aplica tanto para variables como para funciones. Como tal, la traducción de Hoisting es elevación, a partir de aquí, su entendimiento es mucho más intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables declaradas dentro del código.
*/

console.log(miVariable); //No da error, pero imprime "undefined"
var miVariable = 10;

//Scope = Alcance, Hace referencia al alcance de una variable en nuestro codigo de JS
/*
    - Global: Quiere decir que se puede utilizar o trabajar con una variable dentro de cualquier parte del codigo.

    - var: No es tan recomendado, por comportamiento de la variable y la poca adaptabilidad.

    - let: es preferible e incluso mas segura de utilizar porque ademas de funcionar de manera global, tambien puede ser utilizada de manera de manera local.

    - const: Se refiere, por su nombre tan intuitivo, a la palabra constante, esto quiere decir que su valor no puede ser reasignado.
*/

//VARIABLE LOCAL
function funcionConVariableLocal(){
    var mensaje = "Esta es una variable local";
    console.log(mensaje);
}

funcionConVariableLocal();
//console.log(mensaje); //nos da error por ser variable local

/* * En este ejemplo, la variable mensaje se declara dentro de la función funcionConVariableLocal. Es una variable local porque solo es accesible dentro del ámbito de esa función. Si intentamos acceder a ella fuera de la función, obtendremos un error. */

//VARIABLE GLOBAL
var mensajeGLobal = "Esta es una variable global";

function funcionConVariableGlobal(){
    console.log(mensajeGLobal);
}

funcionConVariableGlobal(); //la estamos llamando

/**En este ejemplo, la variable mensajeGlobal se declara fuera de cualquier función, lo que la convierte en una variable global. Esto significa que es accesible desde cualquier parte del código, tanto dentro como fuera de la función funcionConVariableGlobal. */


//FUNCIONES ANONIMAS
/*
    - Estas funciones pueden ser declaradas sin un nombre y luego asignadas a variables o pasarse como parametros en otras funciones.

    - La diferencia principal de estas funciones es que se declaran sin un nombre
*/
// function(){
//     console.log("Hola en funcion Anonima"); //Esto es una funcion anonima
// }
const saludo = function(){
    console.log("Hola en funcion Anonima");
}

saludo();


//Funciones flecha//
/*
    - Una forma mas concisa de definir funciones anonimas. Se le llama flecha debido a su sintaxis que utiliza (=>)
    - Basicamente, se trata de reemplazar la palabra function y añadir => antes de abrir nuestras llaves
*/
const resta = (a,b) => a - b;
/*
    - Esta funcion flecha es una forma mas corta de:
        const suma = function (a,b){
            return a - b;
        }
*/
console.log(resta(5,3));
/*
    - 
*/