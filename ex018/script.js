let inp = document.getElementById('num');
let sele = document.querySelector('option');
let btn1 = document.getElementById('btn-1'); 
let btn2 = document.getElementById('btn-2');
let res = document.querySelector('.saida');

btn1.addEventListener('click', adicionar = () =>{
    if(inp.value.length == 0){
        alert('Nenhum número digitado. Adicione um valor.');
    }else{
        let numero = Number(inp.value);
        let item = document.createElement('option');
        sele.appendChild(item).innerHTML = `Vetor ${numero} adicionado.`;
        sele.style.padding='0rem 0.5rem';
    }
});

btn2.addEventListener('click', finalizar = () =>{});
