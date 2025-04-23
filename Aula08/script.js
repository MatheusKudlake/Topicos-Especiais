/*function funcaoExterna(){
    let varExterna = "Escopo externo!";

    function funcaoInterna(){
        console.log(varExterna); //Closure
    }

    return funcaoInterna;
}

//const funcInterna = funcaoExterna();
//funcInterna();
funcaoExterna();*/

//Exemplo 2

/*function criarContador(){
    let contador = 0;

    return function () {
        contador++;
        return contador; // Closure
    }
}

const contador1 = criarContador();
console.log(contador1());
console.log(contador1());
console.log(contador1());

//Exemplo 3

function criarConta(saldoInicial){
    let saldo = saldoInicial;

    return {
        getSaldo: function(){
            return saldo;
        },
        depositar: function(valor){
            saldo += valor;
        },
        sacar: function(valor){
            if(valor<=saldo) saldo -= valor;
        }
    }
}

const conta1 = criarConta(100);
console.log(conta1.getSaldo());
conta1.depositar(50);
console.log(conta1.getSaldo());
conta1.sacar(100);
console.log(conta1.getSaldo());
conta1.sacar(200);
console.log(conta1.getSaldo());*/

//Função de alta ordem

const processarArray = (array, operacao) => {
    for(i = 0; i < array.length; i++){
        operacao(array[i]);
    }
}

const dobro = (numero) => {
    return numero*2;
}

const multiplicar = (num, mult) => {
    return num * mult;
}

let array1 = [1, 2, 3, 4, 5, 6];
processarArray(array1, console.log);
//processarArray(array1, multiplicar());

//let dobrados = array1.map(num => num* 2 );
//console.log(dobrados);
