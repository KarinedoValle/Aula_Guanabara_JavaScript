function carregar() {
var msg = window.document.getElementById("divmsg")
var divimg = window.document.getElementById("divimg")
var img = window.document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()
var horaCompleta = data.getHours() + "h, " + data.getMinutes() + "min e " + data.getSeconds() + "s"
divmsg.innerHTML = `Agora são ${horaCompleta}.`
if (hora >= 0 && hora < 6) {
    msg.innerHTML += `<p><strong>Bom madrugada!</strong></p>`
    img.src = "img/madrugadaweb.png"
    document.body.style.background = "#968ebf"

} else if (hora >= 6 && hora < 12) {
    msg.innerHTML += `<p><strong>Bom dia!</strong></p>`
    img.src = 'img/manhaweb.png'
    document.body.style.background = "#ffda83"

} else if (hora >= 12 && hora < 18) {
    msg.innerHTML += `<p><strong>Boa tarde!</strong></p>`
    img.src = "img/tardeweb.png"
    document.body.style.background = "#ed997f"

} else if (hora >= 18) {
    msg.innerHTML += `<p><strong>Boa noite!</strong></p>`
    img.src = "img/noiteweb.png"
    document.body.style.background = "#4c595c"

}
}
