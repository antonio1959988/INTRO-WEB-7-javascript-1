//Declaración de funcion que indica el tiempo de lavado de manos y guantes a utilizar
function preparacionInicial(tiempoSeg,guantes){
    console.log("Asegurando que el área de esterilización esté limpia y ordenada.")

    console.log("Lavado de manos con una duración de " + tiempoSeg + " segundos.");

    console.log("Colocación de guantes requeridos, en este caso: " + guantes + " guante(s).");

    //Cambio de estado del area de esterilizacion a limpio
    areaEsterilizacion = true;
    console.log("Estado actual en area de esterilizacion: " + areaEsterilizacion);
}

//Declaración de función que limpia determinada cantidad de instrumentos. Esta función retorna su mismo valor para ser asignado a la variable instrumentosListos
function limpiarInstrumentos(instrumentos){
    console.log("Se ha declarado que " + instrumentos + " instrumento(s) requiere(n) de limpieza antes de esterilizacion.");

    console.log("Limpiando " + instrumentos + " instrumento(s)");

    instrumentosLimpios = true;
    console.log("Estado actual de instrumentos limpios: " + instrumentosLimpios);

    return instrumentos;
}

//Declaracion de proceso de esterilización asignandole temperatura, presion y tiempo
function procesoEsterilizacion(temperatura, presiom, tiempo){
    console.log("Colocando los instrumentos limpios y secos en una bolsa de esterilización adecuada");
    console.log("Colocando las bolsas en el autoclave");
    console.log("Iniciando proceso de esterilización a una temperatura de " + temperatura + "°C y una presión de " + presiom + " Pa");
    console.log("Proceso de esterilización finalizado, enfriando los instrumentos. Se optó por esperar " + tiempo + " minutos.");
    console.log("Almacenando instrumentos limpios.");

    esterilizacionCompletada = true;
    console.log("Estado actual del proceso de esterilizacion: " + esterilizacionCompletada);
}

//Declaracion de funcion que inicia el protocolo, esta reune las tres funciones anteriores
function iniciarProtocolo(instrumentosIniciales){
    console.log("Iniciando protocolo.");
    preparacionInicial(20,2); //Tiempo en segundos del lavado de manos, cantidad de guantes a utilizar
    let instrumentosListos = limpiarInstrumentos(instrumentosIniciales); //Asignar valor retornado de la funcion limpiarInstrumentos para pasar a estar listos
    procesoEsterilizacion(121,103,45); //Valores para proceso de esterilizacion: temperatura, presion en Pascales y tiempo en minutos
    console.log("Se ha fnalizado el proceso de la esterilización de " + instrumentosListos + " instrumentos.")

}

//Asignacion y muestra del status de cada procedimiento (antes de esterilizar)
var areaEsterilizacion = false;
console.log("Estado inicial area de esterilización: " + areaEsterilizacion);

var instrumentosLimpios = false;
console.log("Estado inicial de limpieza de instrumentos: " + instrumentosLimpios);

var esterilizacionCompletada = false;
console.log("Estado inicial del proceso de esterilización: " + esterilizacionCompletada);

iniciarProtocolo(4); //asignar nstrumentos a esterilizar
