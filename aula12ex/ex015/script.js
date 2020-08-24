function verificar() {
    var ano = new Date().getFullYear()
    var tano = document.getElementById('txtano').value
    var res = document.getElementById('res')
    if (tano.length == 0 || Number(tano) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(tano)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/mchild.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'img/mteen.png')

            } else if (idade < 60) {
                img.setAttribute('src', 'img/madult.png')
            }
            else {
                img.setAttribute('src', 'img/mold.png')

            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/fchild.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'img/fteen.png')

            } else if (idade < 60) {
                img.setAttribute('src', 'img/fadult.png')
            }
            else {
                img.setAttribute('src', 'img/fold.png')

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}