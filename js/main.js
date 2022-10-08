const controle = document.querySelectorAll("[data-controle]");
const estatiticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29, 
        "poder": 35,
        "energia": -21,
        "velocidade": - 5
    },
    "blindagem": {
        "forca": 41, 
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0, 
        "poder": 7,
        "energia": 48,
        "velocidade": -4
    },
    "pernas": {
        "forca": 27, 
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },
    "foguetes": {
        "forca": 0, 
        "poder": 28,
        "energia": 0,
        "velocidade": -7
    },
};

controle.forEach((elemento) => {
    elemento.addEventListener("click", (e) => {
        // primeiro parametro pegando o conteudo visivel ao usuario
        // segundo parametro, o nó-pai, o bloco acima do elemento que estamos mexendo
        manipulaDados(e.target.dataset.controle , e.target.parentNode);
        atualizaEstatistica(e.target.dataset.item);
    });
});

function manipulaDados(operacao, controle) {
    // peça esta recebendo apenas o seletor que esta dentro de CONTROLE, que é o elemento passado por parametro
    const peca = controle.querySelector("[data-contador]");

    if (operacao === "-") {
        if (parseInt(peca.value) > 0) {
            peca.value = parseInt(peca.value) - 1;
        }
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}
function atualizaEstatistica(peca){
     estatiticas.forEach((elemento)=>{
         elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
     });
}