var carros = []

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
    var container = document.getElementById("corpoTabela");
    carros.forEach((elemento, index) => {
        container.innerHTML += `
            <td>
                ${carros[index].modeloCarro}
            </td>
            <td>
                ${carros[index].placaCarro}
            </td>
            <td>
                ${carros[index].corCarro}
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