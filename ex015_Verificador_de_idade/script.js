function verificar() {
    var anoNasc = window.document.getElementById("anoNasc")
    var fsex = window.document.getElementsByName("radSex")
    var res = window.document.getElementById("res")
    var data = new Date()
    var ano = data.getFullYear()
    var idade = ano - anoNasc.value
    var genero = ""
    var img = document.createElement("img")
    img.setAttribute("id", img)
    
    //Alertas para inserção de dados incorreta
    if (anoNasc.value.length == 0) {
        window.alert("Ano de nascimento não preenchido.")
    } if (anoNasc.value > ano) {
        window.alert("Ano de nascimento inválido. Tente novamente.")
    } if (anoNasc.value.length != 0 && anoNasc.value.length != 4) {
        window.alert("Ano de nascimento inválido. O ano deve conter 4 caracteres.")
    } 
    
    if (anoNasc.value <= ano && anoNasc.value.length == 4) {
        if (fsex[0].checked) {
            genero = "homem"
        } else {
            genero = "mulher"
            }
    
    //Bebê
    if(idade < 2 && genero == "homem"){ 
        img.setAttribute("src", "img/homembebe.png")
    } else if (idade < 2 && genero == "mulher") {
        img.setAttribute("src", "img/mulherbebe.png")
    } 
    
    //Criança
    else if ((idade >= 2 && idade < 12) && genero == "homem") { 
        img.setAttribute("src", "img/homemcrianca.png")
    } else if ((idade >= 2 && idade < 12) && genero == "mulher") {
        img.setAttribute("src", "img/mulhercrianca.png")
    } 
    
    //Adolescente
    else if ((idade >= 12 && idade < 15) && genero == "homem") {
        img.setAttribute("src", "img/homemadolescente.png")
    } else if ((idade >= 12 && idade < 15) && genero == "mulher") {
        img.setAttribute("src", "img/mulheradolescente.png")
    } 
   
    //Jovem
    else if ((idade >= 15 && idade < 18) && genero =="homem") {
        img.setAttribute("src", "img/homemjovem.png")
    } else if ((idade >= 15 && idade < 18) && genero =="mulher") {
        img.setAttribute("src", "img/mulherjovem.png")
    } 
    
    //Adulto
    else if ((idade >= 18 && idade < 60) && genero =="homem") {
        img.setAttribute("src", "img/homemadulto.png")
    } else if ((idade >= 18 && idade < 60) && genero =="mulher") {
        img.setAttribute("src", "img/mulheradulta.png")
    } 
    
    //Idoso
    else if (idade >= 60 && genero =="homem") {
        img.setAttribute("src", "img/homemidoso.png")
    } else if (idade >= 60 && genero =="mulher"){
        img.setAttribute("src", "img/mulheridosa.png")
    }
}
    res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}