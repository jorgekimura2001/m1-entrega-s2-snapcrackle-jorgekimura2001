// se o número for igual a impar, ou seja, maxValue % 2 !== 0, concatenar Snap
// mas se o número for múltiplo de 5, ou seja, maxValue % 5 == 0, concatenar Crackle
// e se for igual a impar e múltiplo de 5, maxValue % 2 !== 0 && maxValue % 5 == 0, concatenar SnapCrackle
// caso não seja igual a impar e multiplo de 5, maxValeu % 2 == 0 && maxValeu % 5 !== 0, concatenar maxValeu[i]

function snapCrackle(maxValue) {

    let result = []
    for(let i = 1; i <= maxValue; i++) {
        if (i % 2 !== 0 && i % 5 == 0) { // fluxo do javascript de cima à baixo 
            result.push("SnapCrackle")   // cuidar para que as condicionais não interfiram uma na outra
            continue                     // para parar o fluxo do javascript quando já for verdadeira
        }                                // && aceita apenas 2 valores true ou 2 valores false, não aceita true && false 
        if (i % 2 !== 0) { 
            result.push("Snap")
            continue
        }
        if (i % 5 == 0) { 
            result.push("Crackle")
            continue
        }
        if(i % 2 === 0){
            result.push(i)
        }
    }
    return result.join(', ')
}