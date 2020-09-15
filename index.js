let moeda = 0;
let ValorAConverter = 0;
let conversao = 0;


function onChangeSelecionarMoeda(event){
    console.log(event.target.value);
    moeda = Number(event.target.value);
}

function onChangeInputValue(event){ 
    ValorAConverter = Number(event.target.value);
    console.log(event.target.value);
}

function onClickConverter(){
   conversao = (moeda * ValorAConverter);
    console.log(conversao);
    document.getElementById("ValorConvertido").innerHTML = conversao;
}
     