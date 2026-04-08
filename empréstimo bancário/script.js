let salario = Number(prompt("Salário:"));
let parcela = Number(prompt("Parcela:"));

if (parcela > salario * 0.30) {
    alert("Empréstimo Negado");
} else {
    alert("Empréstimo Pré-aprovado");
}