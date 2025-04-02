let texto = document.getElementById("texto");
const pessoa = {
    nome: "Matheus",
    idade: 20,
    salario: 456654.65
};

texto.innerHTML = pessoa.nome + " " + pessoa["idade"] + "<br>";
pessoa.salario += 1000000;
texto.innerHTML += pessoa.salario;
console.log(pessoa);
delete pessoa.salario;
console.log(pessoa);

pessoa2 = {
    nome: "Matheus",
    idade: 21,
    salario: 2456654.65,
    endereco: {
        rua: "Isaac Nilsu",
        bairro: "Centro",
        cidade: "Londrina"
    }
}

console.log(pessoa2);
console.log(pessoa2.endereco);
console.log(pessoa2.endereco.rua);

let frutas = ["maçã", "banana", "laranja"];

frutas.pop("maçã");

console.log(frutas);