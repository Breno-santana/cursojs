/*
let num = [5, 2, 8, 6, 3] // Aqui não começa de 1 a 5, e sim de 0 a 4. Os elementos não começam do 1 e sim do 0.
num[5] = 7 //Criou o elemento 5 e acrescentou o valor 7. Resultado: Nosso vetor é o 5,2,8,9,3,7
num.push(9) // Criou o elemento 9 e colocu na última posição. Resultado: Nosso vetor é o 5,2,8,9,3,7,9

console.log(`Nosso vetor é o ${num}`);
*/

let num = [5, 2, 8, 6, 3]
num[5] = 19
num.push(20);
//num.sort(); // Coloca os valores em ordem.
console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);

let pos = num.indexOf(6) // O (indexOf) busca valores em um vetor.

if(pos == -1){
    console.log('O valor não foi encontrado.')
} else{
    console.log(`O valor 6 está na posição ${pos}`);
}

