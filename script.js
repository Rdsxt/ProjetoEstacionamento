var carros = []

function calcularDiferencaHoras(data1, data2) {
  var diferenca =(data1.getTime() - data2.getTime()) / 1000;
  diferenca /= (60 * 60);

  return Math.abs(Math.round(diferenca));
}

function corParaHexadecimal(cor){
    const cores = {
        vermelho: "#FF0000",
        azul: "#0000FF",
        cinza: "#808080",
        prata: "#808080",
        preto: "#000000"
    }

    return cores[cor]
}

function estacionar(){
    let modelo = document.getElementById("modelo").value
    let placa = document.getElementById("placa").value
    let cor = document.getElementById("cor").value
    let entrada = document.getElementById("entrada").value
    let saida = document.getElementById("saida").value

    let carro = {
        modeloCarro: modelo,
        placaCarro: placa,
        corCarro: cor,
        entradaCarro: entrada,
        saidaCarro: saida,
    }

    carros.push(carro)
}

function mostrar(){
    var container = document.getElementById("corpoTabela")
    let quantidadeColunas = container.innerHTML.length
    let cor;

    if (quantidadeColunas > 0){
        container.innerHTML = "" //apaga tudo dentro do innerHTML do container caso a quantidade de colunas for maior que 0
    }

    carros.forEach((elemento, index) => {
        cor = carros[index].corCarro
        container.innerHTML += `
            <td>
                ${carros[index].modeloCarro}
            </td>
            <td>
                ${carros[index].placaCarro}
            </td>
            <td>
                <div style="background-color: ${corParaHexadecimal(cor)}; color: ${corParaHexadecimal(cor)}">${carros[index].corCarro}</div>
            </td>
            <td>
                ${carros[index].entradaCarro}
            </td>
            <td>
                ${carros[index].saidaCarro}
            </td>
        `
    })
}

function saida(){
    let dataAtual = new Date().getFullYear()
    let placa = document.getElementById("placa").value
    let saida = document.getElementById("saida").value
    let horaEntrada;
    let horaSaida;
    let horasEstacionado;
    let valorTotal;

    carros.forEach((elemento, index) => {
        if (carros[index].placaCarro == placa && carros[index].saidaCarro == saida){
            horaEntrada = new Date(`${dataAtual} ${carros[index].entradaCarro}`)
            horaSaida = new Date(`${dataAtual} ${carros[index].saidaCarro}`)

            horasEstacionado = calcularDiferencaHoras(horaEntrada, horaSaida)
            valorTotal = 5 + (horasEstacionado * 2)
        }
    })

    if (valorTotal !== undefined){
        alert(`Valor a pagar: ${valorTotal}`)
    }else{
        alert("Carro não encontrado")
    }
}