const desc = document.getElementById("descricao")
const vlr = document.getElementById("valor")
let lista = []
const listaGastosCons = document.getElementById("listaGastos")
const valorTotalCons = document.getElementById("valorTotal")
let DtdId = 0
function clicarGasto() {
    let gasto = {
        id: DtdId ++,
        Descricao: desc.value,
        Preco: parseFloat(vlr.value)
    }
    lista.push(gasto)
    renderizarGasto(gasto)
    calculaTotal()
    desc.value = ""
    vlr.value = ""
    desc.focus()
    salvarListaCompleta()
}
function renderizarGasto(pg) {
    let item = document.createElement("li")
    let BtRemover = document.createElement("button")
    BtRemover.innerText = "Remover"
    item.innerText = pg.Descricao+" - "+pg.Preco+" R$"
    listaGastosCons.appendChild(item)
    item.appendChild(BtRemover)
    BtRemover.onclick = function() {
        listaGastosCons.removeChild(item)
        lista = lista.filter(g => g.id !== pg.id)
        console.log(lista)
        calculaTotal()
        salvarListaCompleta()
    }
}
function calculaTotal() {
    let cttValor = 0
    for(let idx = 0; idx < lista.length; idx++) {
        cttValor += lista[idx].Preco
        console.log(cttValor)
    }  
     valorTotalCons.innerText = "Total: "+cttValor+" R$"
}

function guardarDados(gsto) {
    let gastosSalvos = localStorage.getItem("MeusGastos")
    let listaParaSalvar = []
    if (gastosSalvos) {
        listaParaSalvar = JSON.parse(gastosSalvos);
    }
    listaParaSalvar.push(gsto);
    localStorage.setItem('MeusGastos', JSON.stringify(listaParaSalvar))
    console.log("Lista salva", listaParaSalvar);
}

function salvarListaCompleta() {
    localStorage.setItem("MeusGastos", JSON.stringify(lista))
    console.log("Lista salva:", lista)
}

function carregarDados() {
    let gastosSalvos = localStorage.getItem("MeusGastos")
    
    if (gastosSalvos) {
        lista = JSON.parse(gastosSalvos)
        for (let i = 0; i < lista.length; i++) {
            renderizarGasto(lista[i])
        }
        
        calculaTotal()
        console.log("Dados carregados:", lista)
    }
}
carregarDados()