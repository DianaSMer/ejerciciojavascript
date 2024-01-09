//number

let edadMatusalen = 500;
let fechaDeNacimientoDiana = 1994;
let diaDeSanValentin = 14;
var diaDeReyes = 6;
let diaDelNino = 30;
let numDeApostoles = 12;
let numDeReyesMagos = 3
let numDeContinentes = 5;
let numDePersonasEnElMundo = 24000000000;
let numDePerrosDalmata = 101;

//boolean

var isEarthRound = true;
var isFrankesteinAlive = false;
var isDraculaInmortal = false;
var isVivaldiAMusician = true;
var isBethoveenDeaf = true;
var isMyCatAsleep = true;
var isTheSunAStar = true;
var isPlutonaPlanet = false;
var isColombiaACapiltal = false;
var IsSantainTheNorthPole = true;

//string

let cantanteFamoso = "Michael Jackson";
let princesaDelPop = "Britney Spears";
let cantanteDeRap = "Eminem";
let autorFamoso = "Edgar Allan Poe";
let deportistaFamoso = "Venus Williams";
let actorFamoso = "Chamelet"
let reyDeCamelot = "Arturo"
let santoFamoso = "San Judas Tadeo";
let cantanteDeReggeatonIndie = "Arka";
let amorDeTodasLasMamas = "Chayanne";

//variables numericas y operaciones

let num1 = 3;
let num2 = 20;
let suma = num1 + num2;

let a = 5;
let b = 2;
let resta = a - b;

let c = 6;
let d = 8;
let multiplica = c * d;

let e = 1304;
let f = 20;
let divide = e / f;

//variables que concatenen texto


let nombresFamosos = cantanteDeRap + santoFamoso;
console.log(nombresFamosos); 


let nombreComun = "Juan";
let apellidoComun = "Perez";
let nombreComunMexicano = nombreComun + apellidoComun;
console.log(nombreComunMexicano);

let poema1 = "te amo";
let poema2 = "rdido un perro";
let poemaCompleto = poema1 + poema2;
console.log(poemaCompleto);

let topping1 = "peperoni";
let topping2 = "piña";
let base = "masa";
let salsa = "tomate";
let pizza = topping1 + topping2 + base + salsa;
console.log(pizza); 

let nombresraros = cantanteDeReggeatonIndie + amorDeTodasLasMamas;
console.log(nombresraros);


//conversion de variables

let edad = 140;
let nombreRey = "Aragorn";
let condicion = true;

let edadBoolean = Boolean(edad);
console.log (edadBoolean);

let nombreReyBoolean = Boolean(nombreRey);
console.log (nombreReyBoolean);

let edadMatusalenString = String(edadMatusalen);
console.log (edadMatusalenString);

let condicionString = String(condicion);
console.log (condicionString);

let isEarthRoundNumber = Number(isEarthRound);
console.log (isEarthRoundNumber); 







//Calcular el perimetro de un circulo
function calculaElPerimetroCirculo(d){return d * 3.1416;
}

//Calcular el área de un rectangulo
function calculaElAreaRectangulo (b,h){return b * h;
}

//Calcula el cuadrado de un numero

function calculaElCuadrado (x) {return x*x;
}

//Calcula la conversion de celcius a farenheit 

function conversionCelsiusF (C) {return C* 9 / 5 + 32;
}

//Calcula el valor del voltaje dadas la resistencia y la corriente
const calculaVoltaje = (I, R) => (I * R);

//Calcula el volumen de una esfera

function calcularVolumenDeEsfera (r) {return 4/3 * 3.1416 * r * r +r;}
