let idade = parseInt(prompt("Idade:"));
let estudante = prompt("É estudante? (sim/não)");

let valor = 40;

if (idade < 12 || idade > 60 || estudante == "sim") {
    valor = 20;
}

alert("Ingresso: R$ " + valor.toFixed(2));