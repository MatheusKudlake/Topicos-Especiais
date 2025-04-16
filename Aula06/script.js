let texto = document.getElementById("texto");
/*function dividir(n1, n2){
    let resultado = n2 === 0 ? "Não é possível dividir por 0." : n1 / n2;
    return resultado;
}
function multiplicar(n1, n2){
    return n1 * n2;
}
dividir(10,0);
texto.innerHTML += "<br> Resultado da multiplicação: " + multiplicar(2, 2);
texto.innerHTML += "<br> " + (typeof(dividir(10, 0)) == 'string' ? dividir(10, 0) : ("Resultado da divisão: " + dividir(10,0)));*/

let teste = function(soma, notas){return soma, notas;};
const calcularMedia = function(notas){
    const total = notas.reduce(function(soma, nota){return soma + nota;},0);
    //const total = notas.reduce(teste, 0);
    console.log("Total: " + total);
    return total / notas.length;
}

const calculaTotalPedido = function(itensPedido){
    return itensPedido.reduce((acumulado, atual) => {return acumulado + atual;}, 0);
}

let pedidos = [4.57, 9.54, 2.65, 7.65];
let notas = [1, 2, 3, 4, 5, 6, 7];
console.log("Média: " + calcularMedia(notas));
console.log("Total do pedido: " + calculaTotalPedido(pedidos));

notas.forEach(function(valor){
    console.log("Valor atual: " + valor);
    console.log("Valor dobrado: " + valor * 2);    
});

 //Arrow function
let alarme = (horario) => {console.log("teste")}

alarme();