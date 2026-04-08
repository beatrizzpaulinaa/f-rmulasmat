let valor = Number(prompt("Valor da compra:"));
let regiao = prompt("1-Sul | 2-Sudeste | 3-Outras");

let frete;

if (valor > 250) {
    frete = 0;
} else if (regiao == "1") {
    frete = 20;
} else if (regiao == "2") {
    frete = 10;
} else {
    frete = 30;
}

let total = valor + frete;

alert("Frete: R$ " + frete.toFixed(2) + "\nTotal: R$ " + total.toFixed(2));