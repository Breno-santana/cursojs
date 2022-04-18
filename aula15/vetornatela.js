let valores = [8, 1, 4, 3, 5, 7]
//valores.sort() 
valores.push(2)
//console.log(valores);

/*
console.log(valores[0]);
console.log(valores[1]);
console.log(valores[2]); // Maneira errada e difícil.
console.log(valores[3]);
console.log(valores[4]);
console.log(valores[5]);
*/

/*
for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`); // Código de:(Percurso para execução do vetor) Maneira fácil.
}
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`); // Usando o (for in) Maneira MUITO mais fácil.
}