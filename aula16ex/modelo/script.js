var array = []
    let res = document.querySelector('div#res')

function add() {
    let num = document.querySelector('input#num')
    let sel = document.querySelector('select#numadd')
    if (num.value.length == 0) {
        alert('Digite um numero')
    } else {
        n = num.value
        if (array.indexOf(Number(n)) != -1) {
            alert(`O número ${n} já foi adicionado`)
        } else if (Number(n) < 1 || Number(n) > 100) {
            alert('Número fora do intervalo')

        } else {
            array.push(Number(n))
            let op = document.createElement('option')
            op.innerHTML = `Valor ${n} adicionado`
            sel.appendChild(op)
    res.innerHTML = ' '
        }
    }
    num.value=""
    num.focus()
}
function end() {
    let size = array.length
    let soma = 0
    if (size == 0) {
        alert('Adicione números')
    } else {
        array.sort()
        for (var numb in array) {
            soma += array[numb]
        }
        res.innerHTML += `<p>Ao todo temos ${size} número(s) cadastrados</p>`
        res.innerHTML += `<p>O menor valor informado foi ${array[0]} </p>`
        res.innerHTML += `<p>O Maior valor informado foi ${array[size - 1]} </p>`
        res.innerHTML += `<p>a soma dos valores informados é ${soma} </p>`
        res.innerHTML += `<p>a média dos valores informados é ${soma / size} </p>`
    }
}