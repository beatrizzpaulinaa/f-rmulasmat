let salario = parseFloat(prompt("Salário:"));
let parcela = parseFloat(prompt("Parcela:"));

if (parcela > salario * 0.30) {
    alert("Empréstimo Negado");
} else {
    alert("Empréstimo Pré-aprovado");
}