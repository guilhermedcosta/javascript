function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var hora = new Date().getHours()
    msg.innerHTML = `Agora são <strong>${hora} horas</strong>`
    if (hora >= 12 &&  hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#eeba6e'
    } else if (hora >= 18 || hora < 5) {
        img.src = 'noite.png'
        document.body.style.background = '#362a42'
    } else {
        img.src = 'dia.png'
        document.body.style.background = '#4176dc'
    }
}
