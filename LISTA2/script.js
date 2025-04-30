function calcularMedia() {
    // Obtendo os valores das notas dos campos de entrada
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);

    // Calculando a média aritmética das notas
    var media = (nota1 + nota2 + nota3 + nota4) / 4;

    // Exibindo a média calculada na página
    document.getElementById("resultado").innerHTML = "Média: " + media.toFixed(2);

    // Determinando se o aluno foi aprovado ou reprovado e exibindo na página
    if (media >= 7) {
        document.getElementById("status").innerHTML = "Aprovado";
    } else {
        document.getElementById("status").innerHTML = "Reprovado";
    }
}

function calcularMedia() {
    // Obtendo os valores das notas
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);

    // Calculando a média
    var media = (nota1 + nota2) / 2;

    // Exibindo a média
    document.getElementById("media").innerHTML = "Média: " + media.toFixed(2);

    // Verificando o status do aluno
    if (media >= 0 && media < 3) {
        document.getElementById("status").innerHTML = "Reprovado";
    } else if (media >= 3 && media < 7) {
        document.getElementById("status").innerHTML = "Exame";
    } else if (media >= 7 && media <= 10) {
        document.getElementById("status").innerHTML = "Aprovado";
    } else {
        document.getElementById("status").innerHTML = "Nota inválida";
    }
}

function encontrarMenor() {
    // Obtém os valores dos inputs
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Verifica qual número é o menor
    var menorNumero;
    if (num1 < num2) {
        menorNumero = num1;
    } else {
        menorNumero = num2;
    }

    // Exibe o resultado na página
    document.getElementById('resultado').innerText = "O menor número é: " + menorNumero;
}

function encontrarMaior() {
    // Obtendo os valores dos campos de entrada
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
    var num3 = parseFloat(document.getElementById('numero3').value);

    // Verificando o maior número
    var maiorNumero = num1;
    if (num2 > maiorNumero) {
        maiorNumero = num2;
    }
    if (num3 > maiorNumero) {
        maiorNumero = num3;
    }

    // Exibindo o resultado
    document.getElementById('resultado').innerHTML = "O maior número é: " + maiorNumero;
}

function calcular() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operacao = parseInt(document.getElementById("operacao").value);
    var resultado = 0;

    switch(operacao) {
        case 1:
            resultado = (num1 + num2) / 2;
            break;
        case 2:
            resultado = Math.abs(num1 - num2);
            break;
        case 3:
            resultado = num1 * num2;
            break;
        case 4:
            if(num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "Não é possível dividir por zero!";
            }
            break;
        default:
            resultado = "Opção inválida. Por favor, escolha uma das quatro opções válidas.";
    }

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function calcular() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operacao = document.getElementById("operacao").value.toUpperCase(); // Convertendo para maiúsculas
  
    var resultado = document.getElementById("resultado");
  
    if (isNaN(num1) || isNaN(num2)) {
      resultado.textContent = "Por favor, insira números válidos.";
      return;
    }
  
    switch (operacao) {
      case "A":
        resultado.textContent = "Resultado: " + Math.pow(num1, num2);
        break;
      case "B":
        resultado.textContent = "Raiz quadrada do primeiro número: " + Math.sqrt(num1) + ", Raiz quadrada do segundo número: " + Math.sqrt(num2);
        break;
      case "C":
        resultado.textContent = "Raiz cúbica do primeiro número: " + Math.cbrt(num1) + ", Raiz cúbica do segundo número: " + Math.cbrt(num2);
        break;
      default:
        resultado.textContent = "Opção inválida. Escolha A, B ou C.";
    }
}

function calcularAumento() {
    // Obter o salário do funcionário do campo de entrada
    var salario = parseFloat(document.getElementById("salario").value);

    // Verificar se o salário é inferior a R$ 500,00 e se é válido
    if (!isNaN(salario) && salario < 500) {
        // Calcular o aumento
        var aumento = salario * 0.3;
        var salarioReajustado = salario + aumento;
        
        // Exibir o resultado
        document.getElementById("resultado").innerText = "Salário Reajustado: R$ " + salarioReajustado.toFixed(2);
    } else {
        // Exibir mensagem de que o funcionário não tem direito ao aumento
        document.getElementById("resultado").innerText = "O funcionário não tem direito ao aumento.";
    }
}

function calcularSalario() {
    // Obter o salário atual do input
    var salarioAtual = parseFloat(document.getElementById("salario").value);

    // Calcular o percentual de aumento e o novo salário
    var percentualAumento = salarioAtual <= 300 ? 0.35 : 0.15;
    var aumento = salarioAtual * percentualAumento;
    var novoSalario = salarioAtual + aumento;

    // Exibir o novo salário na tela
    document.getElementById("resultado").innerHTML = "Novo salário: R$ " + novoSalario.toFixed(2);
}

function calcularCredito() {
    var saldoMedio = parseFloat(document.getElementById("saldoMedio").value);

    var percentual;
    var valorCredito;

    if (saldoMedio > 400) {
        percentual = 0.3;
    } else if (saldoMedio <= 400 && saldoMedio > 300) {
        percentual = 0.25;
    } else if (saldoMedio <= 300 && saldoMedio > 200) {
        percentual = 0.20;
    } else {
        percentual = 0.10;
    }

    valorCredito = saldoMedio * percentual;

    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<p>Saldo Médio: R$ " + saldoMedio.toFixed(2) + "</p>" +
                             "<p>Valor do Crédito: R$ " + valorCredito.toFixed(2) + "</p>";
}

function calcularPreco() {
    var custoFabrica = parseFloat(document.getElementById("custoFabrica").value);
    var porcentagemDistribuidor;
    var porcentagemImpostos;
    var precoConsumidor;
  
    if (custoFabrica <= 12000) {
      porcentagemDistribuidor = 0.05;
      porcentagemImpostos = 0;
    } else if (custoFabrica <= 25000) {
      porcentagemDistribuidor = 0.10;
      porcentagemImpostos = 0.15;
    } else {
      porcentagemDistribuidor = 0.15;
      porcentagemImpostos = 0.20;
    }
  
    precoConsumidor = custoFabrica + (custoFabrica * porcentagemDistribuidor) + (custoFabrica * porcentagemImpostos);
    
    document.getElementById("precoAoConsumidor").innerText = "Preço ao Consumidor: R$ " + precoConsumidor.toFixed(2);
}

function exe22(){
    let idade = Number(document.getElementById("idade").value)
    let peso = Number(document.getElementById("peso").value)
    let risco
    if (idade >= 0 && idade < 20){
        if (peso > 0 && peso < 60){
            risco = 9
        }
        else if (peso >= 60 && peso <= 90){
            risco = 8
        }
        else if (peso > 90){
            risco = 7
        }
        else {
            risco = "Peso inválido, risco não foi calculado"
        }
    }
    else if (idade >= 20 && idade <= 50){
        if (peso > 0 && peso < 60){
            risco = 6
        }
        else if (peso >= 60 && peso <= 90){
            risco = 5
        }
        else if (peso > 90){
            risco = 4
        }
        else {
            risco = "Peso inválido, risco não foi calculado"
        }
    }
    else if (idade > 50){
        if (peso > 0 && peso < 60){
            risco = 3
        }
        else if (peso >= 60 && peso <= 90){
            risco = 2
        }
        else if (peso > 90){
            risco = 1
        }
        else {
            risco = "Peso inválido, risco não foi calculado"
        }
    }
    else {
        risco = "Idade inválida, risco não foi calculado"
    }
    // resultado
    document.getElementById("resultado").innerHTML = risco
}

function exe23(){
    let codigo = Number(document.getElementById("codigo").value)
    let qtde = Number(document.getElementById("qtde").value)
    let resultado
    if (codigo <= 0 || codigo > 40 || qtde < 0){
        resultado = "Valores inválidos"
    }
    else {
        let precoUnitario
        if (codigo >= 1 && codigo <= 10){
            precoUnitario = 10
        }
        else if (codigo >= 11 && codigo <= 20){
            precoUnitario = 15
        }
        else if (codigo >= 21 && codigo <= 30){
            precoUnitario = 20
        }
        else { // 31 a 40
            precoUnitario = 30
        }
        let precoTotal = precoUnitario * qtde
        let desconto
        if (precoTotal < 250){
            desconto = precoTotal * 5.0/100
        }
        else if (precoTotal >= 250 && precoTotal <= 500){
            desconto = precoTotal * 10.0/100
        }
        else {
            desconto = precoTotal * 15.0/100
        }
        let precoFinal = precoTotal - desconto
        resultado = `Preço Unitário ${precoUnitario} Preço Total ${precoTotal} Desconto ${desconto} Preço Final ${precoFinal}`
    }
    document.getElementById("resultado").innerHTML = resultado
}

function exe24(){
    let preco = Number(document.getElementById("preco").value)
    let categoria = Number(document.getElementById("categoria").value)
    let situacao = document.getElementById("situacao").value
    // cria as variáveis calculadas
    let aumento, imposto, novo, classificacao, resultado
    if (preco < 0){
        resultado = "Preço inválido"
    }
    else { // todos valores são válidos
        if (preco <= 25){
            switch(categoria){
                case 1: aumento = (preco * 5/100); break
                case 2: aumento = (preco * 8/100); break
                case 3: aumento = (preco * 10/100); break
            }
        }
        else { // preco > 25
            switch(categoria){
                case 1: aumento =  (preco * 12/100); break
                case 2: aumento =  (preco * 15/100); break
                case 3: aumento = (preco * 18/100); break
            }
        }
        // imposto
        if (categoria == 2 || situacao == 'R'){
            imposto = (preco * 5) / 100
        }
        else {
            imposto = (preco * 8) / 100
        }
        // novo preço
        novo = preco + aumento + imposto
        // classificação
        if (novo <= 50){
            classificacao = "Barato"
        }
        else if (novo > 50 && novo < 120){
            classificacao = "Normal"
        }
        else {
            classificacao = "Caro"
        }
        resultado = `Aumento ${aumento} Imposto ${imposto} Novo ${novo} Classificação ${classificacao}`
    }
    // exibe ao usuário
    document.getElementById("resultado").innerHTML = resultado
}

