let primeiroNumero = ''
let segundoNumero = ''
let primeiroNumeroSelecionado = false
let numero = ''
let operadorLogico = ''
let resultadoObtido = false

const numeroBnt = (tecla) => {numero = tecla; adicionarNumero(numero)}
const numeroTeclado = (tecla) => {
    numero = tecla.key;
    if(teclasPermitidas.includes(numero)){
        adicionarNumero(numero)
    }
}

function adicionarNumero(num){
    const primeiroVisor = document.getElementById('primeiro-visor')
    const segundoVisor = document.getElementById('segundo-visor')
    let numeroNovo = ''

    if (primeiroNumeroSelecionado === false){
        numeroNovo =  primeiroVisor.innerText + num
        primeiroVisor.innerText = numeroNovo

    } else if (resultadoObtido == false) {
        numeroNovo = segundoVisor.innerText + num
        segundoVisor.innerText = numeroNovo
        resultadoObtido = true
    }
}
function operador(operador){
    const primeiroVisor = document.getElementById('primeiro-visor')
    const segundoVisor = document.getElementById('segundo-visor')
    let numeroAtual = primeiroVisor.innerText
    let numeroNovo =  `${numeroAtual} ${operador}`
    if (resultadoObtido == false){
        if (primeiroNumeroSelecionado === false && primeiroVisor.innerText != ''){
            primeiroNumero = primeiroVisor.innerText
            primeiroNumeroSelecionado = true
            primeiroVisor.style = 'height: 25%; padding: 1px 10px 1px 1px; border-bottom: 1px dotted #246e45; font-size: 12pt; min-height: 0; border-radius: 15px 15px 0 0;'
            segundoVisor.style = 'height: 75%; padding: 10px;'
        }
        if (operadoresLogicos.includes(numeroAtual.substr(-1)) == false && primeiroVisor.innerText != ''){
            primeiroVisor.innerText = numeroNovo
            operadorLogico = operador
        }
    }
}

function prepararCalculo(){
    const primeiroVisor = document.getElementById('primeiro-visor')
    const segundoVisor = document.getElementById('segundo-visor')
    const visorResultado = document.getElementById('resultado-visor')
    const numeroParaCalcular = `${primeiroVisor.innerText} ${segundoVisor.innerText}`

    segundoNumero = segundoVisor.innerText

    primeiroNumero = parseInt(primeiroNumero)
    segundoNumero = parseInt(segundoNumero)

    primeiroVisor.innerText = numeroParaCalcular
    segundoVisor.innerText = ''
    segundoVisor.style = ''

    
    if (resultadoObtido == true){
        visorResultado.style = 'height: 75%; padding: 10px;'
        calcular()
    }
}
function calcular(){
    const visorResultado = document.getElementById('resultado-visor')
    let resultado = 0
    switch(operadorLogico){
        case '+':
            resultado = primeiroNumero+segundoNumero
            visorResultado.innerText = resultado
            break
        case '-':
            resultado = primeiroNumero-segundoNumero
            visorResultado.innerText = resultado
            break
        case '/':
            resultado = primeiroNumero/segundoNumero
            visorResultado.innerText = resultado.toFixed(2)
            break
        case '*':
            resultado = primeiroNumero*segundoNumero
            visorResultado.innerText = resultado
            break
    }
}

function limpar(){
    const primeiroVisor = document.getElementById('primeiro-visor')
    const segundoVisor = document.getElementById('segundo-visor')
    const visorResultado = document.getElementById('resultado-visor')

    primeiroVisor.innerText = ''
    primeiroVisor.style = ''
    segundoVisor.innerText = ''
    segundoVisor.style = ''
    visorResultado.innerText = ''
    visorResultado.style = ''
    primeiroNumero = ''
    segundoNumero = ''
    primeiroNumeroSelecionado = false
    operadorLogico = ''
    resultadoObtido = false
}

const teclasPermitidas = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'Enter',
    'Backspace',
    'Delete'
]
const operadoresLogicos = ['=','+','-','*','/',]
document.getElementById('html').addEventListener('keydown', numeroTeclado)