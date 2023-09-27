//Funciones
//3. Programa para hacer limonada
function exprimirLimones(cantidad){
    console.log("Exprimiendo " + cantidad + " Limones.");
    let jugoExtraido= cantidad * 10; //Considerando obtener 10ml de jugo por cada limon
    console.log("Se obtuvo " + jugoExtraido + "ml de jugo de limon");
    return jugoExtraido; //return
}

//4. Funcion para mezclar el jugo con agua y azucar
function mezclarJugoDeLimon(cantidadDeJugo, cantidadDeAgua, cantidadDeAzucar){
    console.log("Mezclando " + cantidadDeJugo + "ml de jugo de limon con " + cantidadDeAgua + "ml de agua y " + cantidadDeAzucar + "gramos de azucar");
}

//5. Funcion para servir la limonada
function servirLimonada(){
    console.log("Sirviendo la limonada en un vaso");
    vasoDeLimonada = true;
}

//2. Funcion principal que prepare mi limonada
function prepararLimonada(cantidadDeLimon){
    let jugoDeLimon = exprimirLimones(cantidadDeLimon);
    mezclarJugoDeLimon(jugoDeLimon, 200, 10); //Cantidades ficticias de jugo de limon, de agua y de azucar
    servirLimonada();
}

//1. Llamar a la funcion principal para preparar limonada
var vasoDeLimonada = false;
prepararLimonada(5);//llamando al programa