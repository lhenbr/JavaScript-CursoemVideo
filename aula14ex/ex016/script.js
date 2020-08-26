function contar() {
    let start = document.querySelector('input#init')
    let end = document.querySelector('input#end')
    let step = document.querySelector('input#step')
    var res = document.querySelector('div#res')
    if (step.value.length == 0 || start.value.length == 0 || end.value.length == 0) {
        alert('[ERRO] Faltam Dados!')
        res.innerHTML = '<p>Impossivel contar</p>'
    } else {
        if (step.value == 0) {
            step = 1
            alert('Passo invalido, considerando 1')
        }
        res.innerHTML = ""
        var s =Number(start.value)
        var e = Number(end.value)
        var st = Number(step.value)
        if(s < e)
        for (var c = s; c <= e; c += st) {
            res.innerHTML += `${c} &#128073`
        }
        else
        for (var c = s; c >= e; c -= st) {
            res.innerHTML += `${c} &#128073`
        }
        res.innerHTML += '&#128515'
    }
}