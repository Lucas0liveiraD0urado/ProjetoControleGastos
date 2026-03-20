const desc = document.getElementById("descricao")
const vlr = document.getElementById("valor")
const lista = []
const listaGastosCons = document.getElementById("listaGastos")
const valorTotalCons = document.getElementById("valorTotal")
let DtdId = 0
function clicarGasto() {
    let gasto = {
        id: DtdId ++,
        Descricao: desc.value,
        Preco: vlr.value
    }
    lista.push(gasto)
    let item = document.createElement("li")
    let BtRemover = document.createElement("button")
    item.innerText = gasto.Descricao+" - "+gasto.Preco+" R$"
    listaGastosCons.appendChild(item)
    BtRemover.innerText = "Remover"
    item.appendChild(BtRemover)
    let total = 0
    for (let gasto of lista) {
        total += parseFloat(gasto.Preco)
    }
    desc.value = ""
    vlr.value = ""
    desc.focus()
    BtRemover.onclick = function() {
        listaGastosCons.removeChild(item)
        lista.splice(gasto.id, 1)
        console.log(lista)
        
    }
    valorTotalCons.innerText = "Total: "+total+" R$"
}