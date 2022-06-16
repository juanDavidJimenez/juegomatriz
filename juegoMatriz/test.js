
//const valores = window.location.search;
//Creamos la instancia
//const urlParams = new URLSearchParams(valores);
//alert(valores);
//Accedemos a los valores
//var nombre = urlParams.get('nombre');
//alert(nombre);
//console.log(urlParams.has('nombre'));
var nombreUsuario = sessionStorage.getItem('nombreUsuario');
alert("bienvenido: " + nombreUsuario);
let puntaje = new Array();

//contador de pregunta
const contPregunta = document.getElementById("pregunta-actual");
var intento = Number(contPregunta.innerText);

//matriz
const celda0 = document.getElementById("0");
const celda1 = document.getElementById("1");
const celda2 = document.getElementById("2");
const celda3 = document.getElementById("3");
const celda4 = document.getElementById("4");
const celda5 = document.getElementById("5");
const celda6 = document.getElementById("6");
const celda7 = document.getElementById("7");
const celda8 = document.getElementById("8");
const celda9 = document.getElementById("9");
const celda10 = document.getElementById("10");
const celda11 = document.getElementById("11");
const celda12 = document.getElementById("12");
const celda13 = document.getElementById("13");
const celda14 = document.getElementById("14");
const celda15 = document.getElementById("15");
const celda16 = document.getElementById("16");
const celda17 = document.getElementById("17");
const celda18 = document.getElementById("18");
const celda19 = document.getElementById("19");
const celda20 = document.getElementById("20");
const celda21 = document.getElementById("21");
const celda22 = document.getElementById("22");
const celda23 = document.getElementById("23");
const celda24 = document.getElementById("24");
let celdas = [celda0, celda1, celda2, celda3, celda4, celda5, celda6, celda7, celda8, celda9,
     celda10, celda11,celda12,celda13,celda14,celda15,celda16,celda17,celda18,celda19,celda20,celda21,celda22,celda23,celda24];
let matrix = [[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14,],[15,16,17,18,19,],[20,21,22,23,24]];


for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(" matrix[i][j] " +matrix[i][j]);
    }
}

var inicioF = 4;
var inicioC = 0;


//ruta label
const rutaLabel = document.getElementById("label-ruta");
let ruta = "";
let caminoRuta = new Array();
// 0 izq, 1 arriba, 2 abajo, 3 dercha, 





//botones para mover
const izquierdaBtn = document.getElementById("izquierda-bnt");
const arribaBtn = document.getElementById("arriba-bnt");
const abajoBtn = document.getElementById("abajo-bnt");
const derechaBtn = document.getElementById("derecha-bnt");

//boton para probar la ruta digitada
const probarBtn = document.getElementById("probar-ruta");

//console.log("tamaño "+ruta.length);

pintarCasilla();

izquierdaBtn.addEventListener("click", ()=>{
    if(validarDistanciaRuta()){
        console.log("🡸");
        ruta = ruta + "🡸";
        rutaLabel.innerHTML = ruta;
        caminoRuta.push(0);
    }

});
arribaBtn.addEventListener("click", ()=>{
    if(validarDistanciaRuta()){
        console.log("🡹");
        ruta = ruta + "🡹";
        rutaLabel.innerHTML = ruta;
        caminoRuta.push(1);
    }

});
abajoBtn.addEventListener("click", ()=>{
    if(validarDistanciaRuta()){
        console.log("🡻");
        ruta = ruta + "🡻";
        rutaLabel.innerHTML = ruta; 
        caminoRuta.push(2);       
    }

});
derechaBtn.addEventListener("click", ()=>{
    if(validarDistanciaRuta()){
        console.log("🡺");
        ruta = ruta + "🡺";
        rutaLabel.innerHTML =  ruta;
        caminoRuta.push(3);
    }

});

probarBtn.addEventListener("click", ()=>{
    if( ruta.length > 0){
        verificarRespuesta();
    }

});

function validarDistanciaRuta(){
    if( ruta.length <= 22 ){
        return true;
    }else{
        return false;
    }
}

function verificarRespuesta(){
    
    var fila = inicioF;
    var columna = inicioC;
    var caminoPorCeldas = new Array();
    
    for (let i = 0; i < caminoRuta.length; i++) {
        const element = caminoRuta[i];
        switch (element) {
            case 0:
                celdas[matrix[fila][columna]].innerHTML = "🡸"
                if(columna > 0){
                    columna--;
                }
                break;
            case 1:
                celdas[matrix[fila][columna]].innerHTML = "🡹"
                if(fila > 0){
                    fila--;
                }
                break;
            case 2:
                celdas[matrix[fila][columna]].innerHTML = "🡻"
                if(fila < matrix.length-1){
                    fila++;
                    console.log("fila][columna"+fila+" - "+columna);
                    console.log(matrix.length);
                }
                break;
            case 3:
                celdas[matrix[fila][columna]].innerHTML = "🡺"
                if(columna < matrix[0].length-1){
                    columna++;
                }
                break;
                    
            default:
                break;
        }
    }

    if(fila === destinoF  && columna === destinoC){
        celdas[matrix[fila][columna]].innerHTML = "WIN"
        puntaje.push(1);
        console.log("gano y el puntaje es "+ puntaje[intento-1]+" intento"+intento);
    }
    else{
        console.log("fila][columna"+fila+" - "+columna);
        celdas[matrix[fila][columna]].innerHTML = "Lost"
        puntaje.push(0);
        console.log();
        console.log("perdio y el puntaje es "+ puntaje[intento-1]+" intento"+intento);
    }
    setTimeout(() => {
        limpiarTablero();
        intento++;
        contPregunta.innerHTML = intento;
      }, 1000);
    setTimeout(() => {
        prepararIntento();
        pintarCasilla();
      }, 1000); 
}

function limpiarTablero(){
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].innerHTML = "";
    }
}

function darMensajeResultado(resultado){
    if(resultado === 1){
        alert("Has ganado");
    }else{
        alert("Has fallado");
    }
}

function prepararIntento(){
    ruta = " ";
    caminoRuta = new Array();
    rutaLabel.innerHTML =  "";
    if(intento === 6){
        mostrarPuntaje();
        console.log("Se ha acabado el test")
        rutaLabel.innerHTML =  "Se ha acabado el test";
        probarBtn.disabled = true;
        derechaBtn.disabled = true;
        izquierdaBtn.disabled = true;
        abajoBtn.disabled = true;
        arribaBtn.disabled = true;
        setTimeout(() => {
            console.log("cambiar de pantalla");
            window.location.href = "encuesta.html";
          }, 3000);              
    }
}

function mostrarPuntaje(){
    guardarPuntaje();
    let mensajePuntaje = "";
    for (let i = 0; i < puntaje.length; i++) {
        const respuesta = puntaje[i];
        if(respuesta === 0){
            mensajePuntaje += "Prueba "+(i+1) +" perdió \n";
        }else{
            mensajePuntaje += "Prueba "+(i+1) +" ganó \n";
        }
    }

    alert(mensajePuntaje);
}

function guardarPuntaje(){

    for (let i = 0; i < puntaje.length; i++) {
        const respuesta = puntaje[i];
        sessionStorage.setItem('intento'+i, puntaje[i]);
    }
}


function pintarCasilla(){
    celdas[matrix[inicioF][inicioC]].innerHTML = "O"
    calcularDestino();
    console.log("destinof"+destinoF+" destinoC"+destinoC);
    celdas[matrix[destinoF][destinoC]].innerHTML = "X"
}

function calcularDestino(){
    
    switch (intento) {
        case 1:
            destinoF = 3;
            destinoC = 4;
            break;
        case 2:
            destinoF = 1;
            destinoC = 2;
            break;
        case 3:
            destinoF = 1;
            destinoC = 3;
            break;
        case 4:
            destinoF = 0;
            destinoC = 0;
            break;
        case 5:
            destinoF = 2;
            destinoC = 4;
            break;

        default:
            break;
    }

}

