let inp = document.getElementById('num');
let sele = document.querySelector('option');
let btn1 = document.getElementById('btn-1'); 
let btn2 = document.getElementById('btn-2');
let res = document.querySelector('.saida');
let corpo = document.querySelector('body');

btn1.addEventListener('click', adicionar = () =>{
    if(inp.value.length == 0){
        alert('Nenhum número digitado. Adicione um valor.');
    }else{
        let numero = Number(inp.value);
        let item = document.createElement('option');
        item.innerHTML = numero;
        sele.appendChild(item);
    }
});

btn2.addEventListener('click', finalizar = () =>{});
