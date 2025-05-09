function pedirPizza() {
  return new Promise((resolve) => {
    console.log("Pedido feito.");
    setTimeout(() => {
      resolve("Pizza pronta");
    }, 5 * 1000);
  });
}

const entregarPizza = () => {
  return new Promise((resolve) => {
    console.log("Pizza a caminho...");
    setTimeout(() => {
      resolve("Pizza entregue!");
    }, 3 * 1000);
  });
};

async function processaPedido() {
    console.log(await pedirPizza());
    console.log(await entregarPizza());

    console.log("Cliente feliz!");
}

processaPedido();
