//iterativo
function fatorial(n) {
    let fat = 1
    for(let c = n;c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(`iterativo: ${fatorial(5)}`)
//recursivo
function rfatorial(n){
    if(n==1){
        return 1
    }else{
        return n*fatorial(n-1)
    }

}
console.log(`Recursivo:${rfatorial(5)}`)