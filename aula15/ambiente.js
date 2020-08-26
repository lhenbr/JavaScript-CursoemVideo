let num = [5 , 8, 2,9 ,3]
num.push(1)
num.sort()
//console.log(num)
//console.log(`O vetor tem ${num.length} posiçoes`)
//console.log(`O primeiro valor é ${num[0]}`)
//mostrar vetor
/*for(var pos = 0;pos < num.length;pos++){
    console.log(num[pos])
}*/
for(let pos in num){
    console.log(`a variavel na posição ${pos} é ${num[pos]}`)
}
console.log(`o valor 9 esta na posição ${num.indexOf(9)}`)