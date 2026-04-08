let valor = Number(prompt("Valor do pedido:"));
let total = valor;
let msg = "";

if (valor > 50) {
    let cartao = prompt("Tem cartão fidelidade? (sim/não)");

    if (cartao == "sim") {
        total = valor * 0.90;
        msg = "Desconto aplicado!";
    } else {
        msg = "Ganhou um cookie!";
    }
}
alert("Total: R$ " + total.toFixed(2) + "\n" + msg);