
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
//adicionando as options ao select no html
function addCurrenciesToSelect(elementId) {
    const listaDeMoeads = Object.keys(TipodeMoedas); // pega lista de moedas - chave do map
    document.getElementById(elementId).innerHTML += listaDeMoeads.map(
      (moeda) => {
            return `<option value="${moeda}">${moeda}</option>`;
        } 
    );
    
    addCurrenciesToSelect("select-entrada");
    addCurrenciesToSelect("select-saida");

}
// Moeda base = real 

function onClickConverter() {
    // Get Input value
    const moedaEntrada =
      TipodeMoedas[document.getElementById("select-entrada").value];
    const moedaSaida =
      TipodeMoedas[document.getElementById("select-saida").value];
    const valorAConverter = Number(document.getElementById("input-value").value);

//conversao
const convertionRatio = moedaEntrada.valor / moedaSaida.valor;
const convertedValue = valorAConverter * convertionRatio;

//.valor = atributo da valor da moeda e .type = tipo 'usd , 'brl'
  
    let conversaoDisplay = convertedValue.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: moedaSaida.type
     });
    console.log(convertedValue);
    document.getElementById("converted-value").innerHTML = conversaoDisplay;
}

