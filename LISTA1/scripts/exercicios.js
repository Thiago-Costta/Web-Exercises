function subtrair(){
    // Obtendo os valores dos campos de entrada
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Calculando a subtração
    var resultado = num1 - num2;

    // Exibindo o resultado
    document.getElementById('resultado').innerHTML = 'A subtração é: ' + resultado;
}

function exe2(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)
    let result = nro1 * nro2 * nro3
    alert(`A multiplicação é ${result}`)
}
function calcularDivisao(){
    // Obtém os valores dos campos de entrada
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    
    // Calcula a divisão e exibe o resultado
    var resultadoDivisao = numero1 / numero2;
    document.getElementById('resultado').innerText = 'O resultado da divisão é: ' + resultadoDivisao;
  }
function calcularMedia(){
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);

    // Calcula a média
    var media = (nota1 * 2 + nota2 * 3) / (2 + 3);

    // Exibe o resultado
    document.getElementById("resultado").innerHTML = "A média é: " + media.toFixed(2);
}
function calcularDesconto(){
    var preco = document.getElementById("preco").value;
  
    if (!preco) {
      alert("Por favor, insira um preço válido.");
      return;
    }
  
    // Convertendo o preço para um número e aplicando o desconto de 10%
    var novoPreco = parseFloat(preco) * 0.9;
  
    document.getElementById("resultado").innerText = "O novo preço com desconto é R$ " + novoPreco.toFixed(2);
  }
function calcularComissao(){
    var salarioMensal = parseFloat(document.getElementById("salarioMensal").value);
    var valorVendas = parseFloat(document.getElementById("valorVendas").value);

    var comissao = valorVendas * 0.04;
    var salarioFinal = salarioMensal + comissao;

    document.getElementById("resultado").innerHTML = `
      <h2>Resultado</h2>
      <p>Comissão: R$ ${comissao.toFixed(2)}</p>
      <p>Salário Final: R$ ${salarioFinal.toFixed(2)}</p>
    `;
}
function pesoganho(){
    let peso = Number(document.getElementById("peso").value)
    let pesoganho = peso * (Number(document.getElementById("porcentagem").value) / 100)
    let pesomais = peso + pesoganho
    alert(`O aumento de peso foi de ${pesoganho.toFixed(2)}KG
    O peso atual é de ${pesomais.toFixed(2)}KG `)
}
function pesoperdido()
{
    let peso = Number(document.getElementById("peso").value)
    let porcentagem = Number(document.getElementById("porcentagem").value)
    let pesoperdido = peso * (porcentagem / 100)
    let pesomenos = peso - pesoperdido
    alert(`A perda de peso foi de ${pesoperdido.toFixed(2)}KG
    O peso atual é de ${pesomenos.toFixed(2)}KG `)
}
function gramas(){
    let quilos = Number(document.getElementById("quilos").value)
    let gramas = quilos * 1000
    alert(`${quilos}KG convertido para gramas são ${gramas}g`)
}
function area(){
    let basemaior = Number(document.getElementById("basemaior").value)
    let basemenor = Number(document.getElementById("basemenor").value)
    let altura = Number(document.getElementById("altura").value)
    let area = ((basemaior + basemenor) * altura) / 2
    alert(`A área do trapézio é ${area}`)
}
function areaq(){
    let base = Number(document.getElementById("base").value)
    let alturaq = Number(document.getElementById("alturaq").value)
    let areaq = base * alturaq
    alert(`A área do quadrado é de ${areaq}`)
}

    
