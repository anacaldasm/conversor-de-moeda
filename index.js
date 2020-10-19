let moedaEntrada = {};
let ValorAConverter = 0;
let conversao = 0;
let moedaSaida = {};

// adicionar mais tipos de moeda - colocar no select tambem
const TipodeMoedas = {

    Dolar: {
        valor: 5.30,
        type: 'USD'
    },

    Real: {
        valor: 1.0,
        type: 'BRL'
    },
    
    Euro: {
        valor: 6.30,
        type: 'EUR'
    },

    'Peso Argentino': {
        valor: 0.073,
        type: 'ARS'
    },

}

function onChangeSelecionarMoedaEntrada(event){
    let moeda = event.target.value; 
    console.log(event.target.value);
    moedaEntrada = TipodeMoedas[moeda];
}
function onChangeSelecionarMoedaSaida(event){
    let moeda = event.target.value; 
    console.log(event.target.value);
    moedaSaida = TipodeMoedas[moeda];
}

function onChangeInputValue(event){ 
    ValorAConverter = Number(event.target.value);
    console.log(event.target.value);
}
// Moeda base = real 

//.valor = atributo da valor da moeda e .type = tipo 'usd , 'brl'

function onClickConverter(){
    if (moedaEntrada.valor == 1){
        conversao = (ValorAConverter / moedaSaida.valor);
        
    } 
    else if (moedaSaida.valor == 1){

        conversao = (ValorAConverter * moedaEntrada.valor);
    }
    else {
        conversao = (moedaEntrada.valor * ValorAConverter / moedaSaida.valor);
    }
   
  
    let conversaoDisplay = conversao.toLocaleString('pt-BR', { style: 'currency', currency: moedaSaida.type });
    console.log(conversao);
    document.getElementById("ValorConvertido").innerHTML = conversaoDisplay;
}

