// const usuario = `{"id": 1, "nome":"Matheus"}`;
//const usuario = "texto errado";
//const setPessoa = () =>{
//    try{
//        const user = JSON.parse(usuario);
//        console.log("Nome do usuário: ", user.nome);
//        return
//    }catch(error){
//        console.warn("Erro: não é um JSON!");
//        return
//    }finally{
//        console.log("executou finally")
//    }
//}
//console.log("não travou");

//Throw
//function dividir(a, b){
//    if(b === 0){
//        throw new Error("Não é possível dividir por 0.");
//    }
//    return a / b;
//}
//
//try{
//    let resultado = dividir(10,0);
//    console.log(resultado);
//}catch(error){
//    console.log("Erro ao dividir: ", error);
//}

//REST parameters
//function cadastrarPessoa(nome, idade){
//    if(!idade){
//        throw new Error("Idade nula");
//    }
//    if(!nome){
//        throw new Error("Nome inválido!");
//    }
//    if(idade < 0){
//        throw new Error("Idade inválida!");
//    }
//    let pessoa = {"nome": nome, "idade": idade};
//    console.log("Pessoa cadastrada: ", pessoa.nome);
//}
//
//try{
//    cadastrarPessoa("matheus");
//}catch(error){
//    console.log("Erro:", error);
//}

const soma = (...numeros) => {
    return numeros.reduce((acumulado, total) => acumulado += total, 0);
}

const juntar = (...palavras) => palavras.join(" - ");

console.log(juntar("testando", "função", "juntar"));

const maiores = pessoas => pessoas.filter(pessoa => pessoa.idade >= 18);
const arrayPessoas = [{nome: "maior", idade: 18}, {nome: "menor", idade: 12}];

console.log(maiores(arrayPessoas));