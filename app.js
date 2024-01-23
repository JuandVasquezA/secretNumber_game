//Variables---------
let secretNumber = 0;
let intentos = 0;
let range = prompt('Introduce un numero como rango maximo para jugar el juego');
let generatedNumberList = [];
//------------------
//Funciones--------------------------
function addTextElement(element, text){
    let Element = document.querySelector(element);
    Element.textContent = text; 
    return;
}
function addTextElementById(Id, text){
    let Element = document.getElementById(Id);
    Element.textContent = text; 
    return;
}

function generateSecretNumber(range) {
let generatedNumber =  Math.floor(Math.random()* range + 1);
console.log(generatedNumber);
console.log(generatedNumberList);

if (generatedNumberList.length == range) {
    generatedNumberList.splice(0,range);
    return secretNumber = generateSecretNumber(range);
}else{


if (generatedNumberList.includes(generatedNumber)){
    return generateSecretNumber(range);
} else {
    generatedNumberList.push(generatedNumber);
    return generatedNumber;
}
}
}
//--------------------------------------------------------------------
function cleanTextBox(){
    document.getElementById('valorUsuario').value = '';
    return;
}
//----------------------------------------------------------------
function verificarIntento() {
let userNumber = parseInt(document.getElementById('valorUsuario').value);
console.log(secretNumber);
console.log(userNumber);
if(userNumber === secretNumber){
    addTextElement('p', `Acertaste el numero en ${intentos} ${intentos > 1 ? 'intentos': 'intento'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
} else {
    if(userNumber > secretNumber){
    addTextElement('p', 'El numero secreto es menor');
} else{
    addTextElement('p', 'El numero secreto es mayor');
}
intentos++;
cleanTextBox();
}
}
//----------------------------------------------------------------------------
function condicionesIniciales(){
    //Pone los mensajes iniciales
    addTextElement('h1' ,'Juego del numero secreto');
    addTextElement('p' , `Escoge un numero del 1 al ${range}`);
    //Genera el numero secreto
    secretNumber = generateSecretNumber(range);
    intentos = 1;
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
//----------------------------------------------------------------------------
function reiniciarJuego(){
    //Limpiar la caja
    cleanTextBox();
    //Definir el rango maximo del juego
    //Reinicia las condiciones
    condicionesIniciales();
    return 0;
}
//--------------------------------------------------------------------------------

function factorial(numero) {
if (numero==0 || numero == 1){
    return 1;
} else {
  return factorial(numero-1) * numero
}
}
//--------------------------------------------
function tablaDeMultiplicar(numero){
    console.log( `La tabla de multiplicar de ${(numero)}:`);
    for (let j = 10; j >= 0; j--){
        console.log(`${(numero)} x ${(j)} = ${(numero*j)}`);
    }
}

//-----------------------------------------------------------------------------------





//-----------------------------------Main---------------------------------------------

console.log(factorial(3));
condicionesIniciales();
tablaDeMultiplicar(5);

let numeros = [1,2,3,4,5];
console.log(numeros.length-1)
