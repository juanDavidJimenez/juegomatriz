const p0Btn = document.getElementById("0");
const p1Btn = document.getElementById("1");
const p2Btn = document.getElementById("2");
const p3Btn = document.getElementById("3");
const p4Btn = document.getElementById("4");
const p5Btn = document.getElementById("5");

const p10Btn = document.getElementById("10");
const p11Btn = document.getElementById("11");
const p12Btn = document.getElementById("12");
const p13Btn = document.getElementById("13");
const p14Btn = document.getElementById("14");
const p15Btn = document.getElementById("15");

const p20Btn = document.getElementById("20");
const p21Btn = document.getElementById("21");
const p22Btn = document.getElementById("22");
const p23Btn = document.getElementById("23");
const p24Btn = document.getElementById("24");
const p25Btn = document.getElementById("25");



p0Btn?.addEventListener("click", ()=>{
    desabilitarFila1();
    p0Btn.style.backgroundColor ="white";
    if(p0Btn.disabled && p10Btn.disabled && p20Btn.disabled ){
        console.log("ya desactivado");
        irEstadisticas();
    }
});

p1Btn?.addEventListener("click", ()=>{
    desabilitarFila1();
    p1Btn.style.backgroundColor ="white";
    if(p0Btn.disabled && p10Btn.disabled && p20Btn.disabled ){
        console.log("ya desactivado");
        irEstadisticas();
    }
});

p2Btn?.addEventListener("click", ()=>{
    desabilitarFila1();
    p2Btn.style.backgroundColor ="white";
    if(p0Btn.disabled && p10Btn.disabled && p20Btn.disabled ){
        console.log("ya desactivado");
        irEstadisticas();
    }
});

p3Btn?.addEventListener("click", ()=>{
    desabilitarFila1();

    p3Btn.style.backgroundColor ="white";
    if(p0Btn.disabled && p10Btn.disabled && p20Btn.disabled ){
        console.log("ya desactivado");
        irEstadisticas();
    }
});

p4Btn?.addEventListener("click", ()=>{
    desabilitarFila1();

    p4Btn.style.backgroundColor ="white";
    if(p0Btn.disabled && p10Btn.disabled && p20Btn.disabled ){
        console.log("ya desactivado");
        irEstadisticas();
    }
});

p5Btn?.addEventListener("click", ()=>{
    desabilitarFila1();

    p5Btn.style.backgroundColor ="white";
    if(p0Btn.disabled && p10Btn.disabled && p20Btn.disabled ){
        console.log("ya desactivado");
        irEstadisticas();
    }
});

function desabilitarFila1(){
    p0Btn.disabled=true;
    p1Btn.disabled=true;
    p2Btn.disabled=true;
    p3Btn.disabled=true;
    p4Btn.disabled=true;
    p5Btn.disabled=true;
}


function desabilitarFila2(){
    p10Btn.disabled=true;
    p11Btn.disabled=true;
    p12Btn.disabled=true;
    p13Btn.disabled=true;
    p14Btn.disabled=true;
    p15Btn.disabled=true;
}


p10Btn?.addEventListener("click", ()=>{
    desabilitarFila2();
    p10Btn.style.backgroundColor ="white";
    if(p0Btn.disabled && p10Btn.disabled && p20Btn.disabled ){
        console.log("ya desactivado");
        irEstadisticas();
    }
});

p11Btn?.addEventListener("click", ()=>{
    desabilitarFila2();
    p11Btn.style.backgroundColor ="white";
    if(p0Btn.disabled && p10Btn.disabled && p20Btn.disabled ){
        console.log("ya desactivado");
        irEstadisticas();
    }
});

p12Btn?.addEventListener("click", ()=>{
    desabilitarFila2();
    p12Btn.style.backgroundColor ="white";
    if(p0Btn.disabled && p10Btn.disabled && p20Btn.disabled ){
        console.log("ya desactivado");
        irEstadisticas();
    }
});
p13Btn?.addEventListener("click", ()=>{
    desabilitarFila2();
    p13Btn.style.backgroundColor ="white";
    if(p0Btn.disabled && p10Btn.disabled && p20Btn.disabled ){
        console.log("ya desactivado");
        irEstadisticas();
    }
});
p14Btn?.addEventListener("click", ()=>{
    desabilitarFila2();
    p14Btn.style.backgroundColor ="white";
    if(p0Btn.disabled && p10Btn.disabled && p20Btn.disabled ){
        console.log("ya desactivado");
        irEstadisticas();
    }
});
p15Btn?.addEventListener("click", ()=>{
    desabilitarFila2();
    p15Btn.style.backgroundColor ="white";
    if(p0Btn.disabled && p10Btn.disabled && p20Btn.disabled ){
        console.log("ya desactivado");
        irEstadisticas();
    }
});

function desabilitarFila3(){
    p20Btn.disabled=true;
    p21Btn.disabled=true;
    p22Btn.disabled=true;
    p23Btn.disabled=true;
    p24Btn.disabled=true;
    p25Btn.disabled=true;
}

p20Btn?.addEventListener("click", ()=>{
    desabilitarFila3();
    p20Btn.style.backgroundColor ="white";
    if(p0Btn.disabled && p10Btn.disabled && p20Btn.disabled ){
        console.log("ya desactivado");
        irEstadisticas();
    }
});

p21Btn?.addEventListener("click", ()=>{
    desabilitarFila3();
    p21Btn.style.backgroundColor ="white";
    if(p0Btn.disabled && p10Btn.disabled && p20Btn.disabled ){
        console.log("ya desactivado");
        irEstadisticas();
    }
});
p22Btn?.addEventListener("click", ()=>{
    desabilitarFila3();
    p22Btn.style.backgroundColor ="white";
    if(p0Btn.disabled && p10Btn.disabled && p20Btn.disabled ){
        console.log("ya desactivado");
        irEstadisticas();
    }
});
p23Btn?.addEventListener("click", ()=>{
    desabilitarFila3();
    p23Btn.style.backgroundColor ="white";
    if(p0Btn.disabled && p10Btn.disabled && p20Btn.disabled ){
        console.log("ya desactivado");
        irEstadisticas();
    }
});
p24Btn?.addEventListener("click", ()=>{
    desabilitarFila3();
    p24Btn.style.backgroundColor ="white";
    if(p0Btn.disabled && p10Btn.disabled && p20Btn.disabled ){
        console.log("ya desactivado");
        irEstadisticas();
    }
});
p25Btn?.addEventListener("click", ()=>{
    desabilitarFila3();
    p25Btn.style.backgroundColor ="white";
    if(p0Btn.disabled && p10Btn.disabled && p20Btn.disabled ){
        console.log("ya desactivado");
        irEstadisticas();
    }
    
});

function irEstadisticas(){
    mostrarPuntaje();
    setTimeout(() => {
        console.log("cambiar de pantalla");
        window.location.href = "stadisticas.html";
      }, 3000);  
}


function mostrarPuntaje(){
    for (let i = 0; i < 5; i++) {
        alert(sessionStorage.getItem('intento'+i));
    }
}

