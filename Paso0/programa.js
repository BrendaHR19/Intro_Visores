function saludar(){
    alert("Hola Mundo");
}

//foreach recorrer un iterable en js

let arreglo= [4,6,8,3,4,6];

arreglo.forEach( (valor, indice)=>{
    console.log(valor)
}
)


//map 
function calcular_cuadrado(valor){
    return valor ** 2;
};
let cuadrados = arreglo.map(calcular_cuadrado)

//Imprimir cuadrados
console.log(arreglo);
cuadrados.forEach((valor, indice)=>{
    console.log(valor);
});


//Filter
function mayor50(valor){
    return valor>50
}

let mayores50 = cuadrados.filter(mayor50);
console.log(mayores50)
console.warn("mensaje")


//Slice

let parte = arreglo.slice(2,4) //no incluye ultima posición (4)
console.log(arreglo)
console.log(parte)