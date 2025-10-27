function verificar(){
    var atualAno = new Date().getFullYear()
    var ano = document.getElementById('nasc').value
    var res = document.getElementById('res')
    if (ano <= 0 || ano > atualAno || ano.length != 4) {
        alert('[ERROR] Verifique o ano de nascimento')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = atualAno - ano
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked){
            genero = 'Masculino'
            if (idade >= 0 && idade < 12){
                //baby
                img.setAttribute('src', 'h-bebe.png')
            } else if (idade < 20) {
                //jovem
                img.setAttribute('src', 'h-jovem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'h-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'h-idoso.png')
            }
        } else {
            genero = 'Feminino'
            if (idade >= 0 && idade < 12){
                //baby
                img.setAttribute('src', 'm-bebe.png')
            } else if (idade < 20) {
                //jovem
                img.setAttribute('src', 'm-jovem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'm-idosa.png')
            } else {
                //idoso
                img.setAttribute('src', 'm-adulta.png')
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos o Gênero ${genero} com idade de ${idade} anos`
    res.appendChild(img)
}