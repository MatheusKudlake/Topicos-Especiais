/*function cumprimenta (nome){
    console.log("Olá " + nome);
}

function cumprimenta2 (nome){
    console.log("Olá2 " + nome);
}

function processaEntradaUsuario(callback){
    let nomeUsuario = "Helton"; 
    callback(nomeUsuario);
}

processaEntradaUsuario(cumprimenta2);

//Callback assíncrono
console.log("--Início--");
setTimeout(() => {
    console.log("Execução atrasada (setTimeout)");
}, 3 * 1000);
console.log("--Fim--");

//Callback com função assíncrona

function buscarUsuario(callback){
    setTimeout(() => {
        callback({nome: "Matheus", idade: 20});
    }, 3 * 1000);
}

buscarUsuario(usuario => {
    console.log("Usuário encontrado!");
    console.log("Nome: " + usuario.nome + ", Idade: " + usuario.idade);
})

function fazerPedidoPizza(){
    return new Promise((resolve, reject) =>{
        console.log("Pedido recebido, preparando...");
        setTimeout(() => {
            resolve("Pizza pronta.");
        }, 5*1000);
    });
}

function entregarPizza(){
    return new Promise((resolve, reject) => {
        console.log("Pizza a caminho da entrega...");
        setTimeout(() => {
            resolve("Pizza entregue.");
        }, 2* 1000);
    })
}

async function processaPedido(){
    console.log("Cliente fez o pedido.");
    const pizza = await fazerPedidoPizza();
    console.log(pizza);

    const entrega = await entregarPizza();
    console.log(entrega);

    console.log("Cliente recebeu!!");
}

processaPedido();*/

function enviarEmail(destinatario){
    return new Promise((resolve, reject) => {
        console.log("Enviando email para " + destinatario);
        setTimeout(() => {
            const sucesso = Math.random() > 0.2;
            if(sucesso){
                resolve("Email enviado.");
            }else{
                reject("Falha ao enviar email.");
            }
        },2 * 1000);
    })
}

async function processarEnvio(){
    try{
        const resultado = await enviarEmail("Matheus K");
        console.log(resultado);
    }catch(erro){
        console.log("Erro: " + erro);
    }
}

processarEnvio();