
//SOMAR
const campoNumero1 = document.getElementById("campoNumero1");
const campoNumero2 = document.getElementById("campoNumero2");
const campoResultado = document.getElementById("campoResultado");
const botaoSomar = document.getElementById("somar");

botaoSomar.onclick = aoClicarNoBotaoSomar;

function aoClicarNoBotaoSomar() {

    const numero1 = Number(campoNumero1.value);
    const numero2 = Number(campoNumero2.value);

    const resultado = somar(numero1, numero2);

    campoResultado.value = resultado;
}


//MULTIPLICAR
const botaoMultiplicar = document.getElementById("multiplicar");
botaoMultiplicar.onclick = aoClicarNoBotaoMultiplicar;

function aoClicarNoBotaoMultiplicar() {
    
    const mult1 = Number(campoNumero1.value);
    const mult2 = Number(campoNumero2.value);

    const resultado = multiplicar(mult1, mult2);

    campoResultado.value = resultado;
}

//SUBTRAIR
const botaoSubtrair = document.getElementById("subtrair")
botaoSubtrair.onclick = aoClicarNoBotaoSubtrair;

function aoClicarNoBotaoSubtrair() {

    const sub1 = Number(campoNumero1.value);
    const sub2 = Number(campoNumero2.value);

    const resultado = subtrair(sub1, sub2);

    campoResultado.value = resultado;
}

//DIVIDIR
const botaoDividir = document.getElementById("dividir");
botaoDividir.onclick = aoClicarNoBotaoDividir;

function aoClicarNoBotaoDividir() {

    const div1 = Number(campoNumero1.value);
    const div2 = Number(campoNumero2.value);

    const resultado = dividir(div1, div2);

    campoResultado.value = resultado;
}






