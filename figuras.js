
function perimetroCuadrado (lado){
    return perimetroCuadrado = lado * 4;
}

function areaCuadrado (lado){
    return areaCuadrado = lado * lado;
}

function perimetroTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3;
}

function areaTriangulo (base , altura){
    return (base * altura) / 2;
}


function perimetroCirculo (diametro ){
    return diametro * Math.PI;
};

function areaCirculo (radio ){

    return (radio * radio) * Math.PI;
}


function calcularPeriemtroCuadrado(){
    //llamamos la etiqueta
    const input = document.getElementById("InputCuadrado");

    //Obtenemos el valor de la etiqueta 
    const value = input.value;

    //llamamos la funicon y mandamos alerta al usuario con la respuesta 
    const perimetro = perimetroCuadrado(value);

    //Mostamos el resultado con una alerta 
    alert(perimetro);

}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");

    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);
}


//Triangulo 
function calcularPeriemtroTriangulo(){
    const inputTriangulo1 = document.getElementById("InputTrianguloLado1");
    const inputTriangulo2 = document.getElementById("InputTrianguloLado2");
    const inputTriangulo3 = document.getElementById("InputTrianguloLado3");

    let valor1 = Number(inputTriangulo1.value);
    let valor2 = Number(inputTriangulo2.value);
    let valor3 = Number(inputTriangulo3.value);

    
    const perimetro = perimetroTriangulo(valor1,valor2,valor3);

    alert(perimetro);
    console.log(perimetro);

}

function calcularAreaTriangulo(){
    
    const inputTriangulo2 = document.getElementById("InputTrianguloLado2");
    const baseTriangulo = document.getElementById("InputTrianguloBase");

    const valor2 = inputTriangulo2.value;
    const base = baseTriangulo.value;

    const areaTriangulo = areaTriangulo(base,valor2);


    alert(areaTriangulo);
}
function calcularPeriemtroCirculo(){
    const inputCirculo = document.getElementById("Inputcirculo");

    const valorCirculo = inputCirculo.value;

    const perimetroCirculo = perimetroCirculo(valorCirculo);

    alert(perimetroCirculo);
}

function calcularAreaCirculo(){
    const inputCirculoArea = document.getElementById("InputcirculoArea");
    const valorRdio = inputCirculoArea.value;

    
    const areaCirculo1 = areaCirculo(valorRdio);

    alert (areaCirculo1);
}