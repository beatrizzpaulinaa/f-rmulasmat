let salario = Number(prompt("Salário bruto:"));
let imposto;

if (salario <= 2112) {
    imposto = 0;
} else if (salario <= 2826.65) {
    imposto = salario * 0.075;
} else if (salario <= 3751.05) {
    imposto = salario * 0.15;
} else {
    imposto = salario * 0.225;
}

let liquido = salario - imposto;

alert("Imposto: R$ " + imposto.toFixed(2) +
    "\nSalário líquido: R$ " + liquido.toFixed(2));