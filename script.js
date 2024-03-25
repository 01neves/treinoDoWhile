let saldo = 1000; // Saldo inicial
let maiorValor = 0;
let totalValores = 0;
let contadorValores = 0;

do {
    const nome = prompt("Digite seu nome:");
    const cpf = prompt("Digite seu CPF:");
    let valor = parseFloat(prompt("Digite o valor:"));

    // Verifica se o valor é positivo
    if (valor < 0 || isNaN(valor)) {
        alert("Valor inválido. Digite um valor positivo.");
        continue;
    }

    // Verifica se é saque ou depósito
    const operacao = prompt("Escolha a operação:\n1 - Saque\n2 - Depósito");

    if (operacao === "1") { // Saque
        if (valor > saldo) {
            alert("Saldo insuficiente.");
            continue;
        }
        saldo -= valor;
    } else if (operacao === "2") { // Depósito
        saldo += valor;
    } else {
        alert("Opção inválida.");
        continue;
    }

    // Atualiza o maior valor
    if (valor > maiorValor) {
        maiorValor = valor;
    }

    // Atualiza o total de valores e o contador
    totalValores += valor;
    contadorValores++;


} while (0);

alert(`Saldo total: R$ ${saldo.toFixed(2)}`);
alert(`Maior valor inserido: R$ ${maiorValor.toFixed(2)}`);
