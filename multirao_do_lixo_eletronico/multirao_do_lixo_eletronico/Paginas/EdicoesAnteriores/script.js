var edicao = 2023;

function AvancarEdicao(){
    if(edicao < 2023){
        EsconderEdicao();
        edicao++;
        MostrarEdicao();
    }    
}

function VoltarEdicao(){
    if(edicao > 2019){
        EsconderEdicao();
        edicao--;
        MostrarEdicao();
    }
}

function EsconderEdicao(){
    let edicaoAtual = document.getElementById(`edicao_${edicao}`);
    edicaoAtual.style.display = "none";
}

function MostrarEdicao(){
    let edicaoAnterior = document.getElementById(`edicao_${edicao}`);
    edicaoAnterior.style.display = "inline";
}