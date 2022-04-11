

function Cumprimentar(nomeA, nomeB) {
    nomeA = 'Lucas'
    nomeB = 'Jeremias'
    console.log("Olá," + nomeA + "!")
    console.log('Olá,' + nomeB + "!")
}

Cumprimentar()

function mostrarDados(PessoaA, PessoaB) {
    PessoaA = {
        nome: 'Josias',
        endereço: 'São Paulo',
        Salário: (1500 + 'Reais'),
        País: 'Brasil'
    }

    PessoaB = {
        nome: 'Lucas',
        endereço: 'Guarulhos',
        Salário: (1200 + 'Reais'),
        País: 'Groelândia'
    }

    console.log (PessoaA.nome, PessoaA.Salário)
    console.log (PessoaB.nome, PessoaB. Salário)
}

mostrarDados ()

function Dividir(A,B) {
    let resultado = A / B
    console.log('A divisão entre ' + A + ' E ' + B + ' É igual a: ' + resultado)
}

Dividir (10,5)




// converter idade de anos para dias

function anosParaDias (idade) {
    idadeEmMeses = idade * 12
    idadeEmDias = idadeEmMeses * 30
    console.log('Sua idade em Anos: ' + idade)
    console.log('Sua idade em Meses: ' + (idadeEmMeses.toFixed(2)))
    console.log('Sua idade em Dias: ' + (idadeEmDias.toFixed(2)))
}

anosParaDias(25)
anosParaDias(70)



// quantidade de horas trabalhadas e salario

function calcularSalario (horasTrabalhadas, salarioHora) {
    
    SalarioBruto = horasTrabalhadas * salarioHora
    console.log('O seu salário bruto é de: ' + SalarioBruto)
    {
        if (SalarioBruto >= 2000) {
        console.log('PARABENS VC GANHA BEM')
        } else if (SalárioBruto < 2000)
        console.log('Você ganha MAL!')
    }

}

calcularSalario (150, 40.5)



// RETORNAR O MES CORRESPONDENTE

function qualMesEstamos (mesAtual) {
    nomeDoMes = ['ESSE MÊS NÃO EXISTE', 'JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO']
    console.log (nomeDoMes[mesAtual])
}

qualMesEstamos (4)



// SABER SE O PRIMEIRO É MAIOR OU IGUAL

function maiorOuIgual(NumeroA, NumeroB) {
    console.log(NumeroA >= NumeroB)
}

maiorOuIgual(6,90)



// QUAL FOI SUA NOTA? 

function SaberNota (notaProva1, notaProva2, notaProva3) {
    notaFinal = ((notaProva1 + notaProva2 + notaProva3) / 3)

    console.log('SUA NOTA FINAL FOI: ' + notaFinal)
    if (notaFinal === 3) {
        console.log ('VOCÊ FOI REPROVADO!')
    } else if (notaFinal === 4 || 5) {
        console.log('VOCÊ ESTÁ EM RECUPERAÇÃO')
    } else if (notaFinal === 6 || 7)  {
        console.log ('VOCÊ FOI APROVADO!')
    } else if (notaFinal >= 8) {
        console.log ('VOCÊ FOI APROVADO COM HONRA')
    }
    
}

SaberNota (5, 10, 3)

// subtrair

function subtracao (A, B ,C ) {
    let sub = A - B - C 
    console.log("O RESULTADO FODA É: " + sub);
}

subtracao(5,10,3)