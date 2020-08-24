function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = document.getElementById('img')
    //var hora = new Date().getHours()
    var hora =12
    msg.innerHTML = `<strong>Agora são ${hora} Horas</strong>`
    if(hora >= 0 && hora < 12){
        img.src = "manha.png"
        document.body.style.background ="orange"
    }else if (hora >= 12 && hora < 18){

        document.body.style.background ="blue"
        img.src = "tarde.png"
    }else{

        img.src = "noite.png"
        document.body.style.background ="gray"
    }
}