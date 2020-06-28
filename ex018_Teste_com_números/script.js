let numObj = window.document.getElementById("num")
let selec = window.document.getElementById("fLista")
let res = window.document.getElementById("res")
let lista = []

function errosAdd(n) {
    if (n.value.length == 0) {
        window.alert("Por favor, digite um número.")
        return true
    } else if (n.value < 1 || n.value > 100) {
        window.alert("Número inválido. Por favor, digite um número entre 1 e 100.")
        return true
    } else {
        return false
    }
}

function isInLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        window.alert("Número já encontrado na lista. Tente novamente.")
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (!errosAdd(numObj) && !isInLista(numObj.value, lista)) {
        lista.push(Number(numObj.value))
        let item = document.createElement("option")
        item.text = `Valor ${numObj.value} adicionado.`
        selec.appendChild(item)
        res.innerHTML = ""
    } 
    numObj.value = ""
    numObj.focus()
}

function finalizar() {
    if (lista.length == 0) {
        window.alert("Lista vazia. Por favor, insira os valores desejados.")
    } else {
        let tot = lista.length
        let soma = 0
        let media = 0
        let maior = lista[0]
        let menor = lista[0]
        for (let i in lista) {
            soma += lista[i]
            media = soma/lista.length
            if (lista[i] > maior) {
                maior = lista[i]
            } else if (lista[i] < menor) {
                menor = lista[i]
            }
        }

        res.innerHTML = ""
        res.innerHTML += `Total de números inseridos: <strong>${tot}</strong>.</br> Maior número inserido: <strong>${maior}</strong>. </br> Menor número inserido: <strong>${menor}</strong>. </br> Soma de todos os valores: <strong>${soma}</strong>. <br> Média de todos os valores: <strong>${media}</strong>.`
    }
    numObj.focus()
}

