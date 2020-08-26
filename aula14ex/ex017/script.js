function gerar() {
    var number = document.querySelector('input#number')
    var sel = document.querySelector('select#select')
    if (number.value.length == 0) {
        alert('Digite um valor!')
    } else {
        number = Number(number.value)
        sel.innerHTML = " "
        for (var c = 0; c <= 9; c++) {
            var op = document.createElement('option')
            op.innerHTML = ` ${number}x${c}=${c * number}   `
            sel.appendChild(op)
        }
    }
}